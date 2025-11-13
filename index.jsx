const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {
  const pRef = useRef();
  const buttonRef = useRef();
  const [h2Otp, setH2Otp] = useState("Click 'Generate OTP' to get a code");
  const [num, setNum] = useState(5);
  const [buttonPressState, setButtonPressState] = useState(false);

  const handleClick = () => {
    setButtonPressState(true);
    setH2Otp(String(Math.floor(Math.random() * 1000000)).padStart(6, "0"));
  };

  useEffect(() => {
    if (buttonPressState) {
      buttonRef.current.disabled = true;
      pRef.current.innerText = "Expires in: " + num + " seconds";

      const countdownInterval = setInterval(() => {
        setNum((prevNum) => {
          if (prevNum <= 1) {
            clearInterval(countdownInterval);
            setButtonPressState(false);
            buttonRef.current.disabled = false;
            pRef.current.innerText =
              "OTP expired. Click the button to generate a new OTP.";
            return 5;
          }
          pRef.current.innerText = "Expires in: " + (prevNum - 1) + " seconds";
          return prevNum - 1;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [buttonPressState, pRef]);

  return (
    <div
      className="container"
      style={{
        backgroundColor: "darkblue",
        color: "skyblue",
        padding: 0,
        margin: 0,
      }}
    >
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{h2Otp}</h2>
      <p id="otp-timer" aria-live="polite" ref={pRef}></p>
      <button id="generate-otp-button" onClick={handleClick} ref={buttonRef}>
        Generate OTP
      </button>
    </div>
  );
};
