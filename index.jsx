const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {

  //let buttonPress = false;

  const [otp, setOtp] = useState();
  const pRef = useRef("");
  const [ref, setRef] = useState("Click 'Generate OTP' to get a code");
  const [messageOtp, setmessageOtp] = useState("");
  const [num, setNum] = useState(5);

  const handleClick = () => {
      //console.log(setOtp(Math.floor(Math.random() * 1000000)));
      //pRef.current.value = "a";
      //buttonPress = true;
      
     // let num = 5;

      function count(num) {
      
      while (num >= 1) {
        num--
      }
    }

      setNum(setInterval(count, 10));
      
      setRef("Expires in: " + num + " seconds");
      setmessageOtp(String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
);
     // console.log(buttonPress);
       function setTimer() {
    //if (buttonPress === true) {
     // console.log("eso")
    //}

  }
    }

  useEffect(() => {
    //pRef.value = "a"
    console.log("Component renders")
    //setRef("Expires in: " + num + " seconds");
  }), [pRef];

  return (
    <div className="container" style={{backgroundColor: "darkblue", color: "skyblue", padding: 0, margin: 0}}>
      <h1 id="otp-title">OTP Generator </h1>
    
      <h2 id="otp-display">{messageOtp}</h2>
      <h2></h2>
      <p id="otp-timer" aria-live="polite" ref={pRef}>{ref}</p>
      <button id="generate-otp-button" onClick={handleClick}>Generate OTP</button>
    </div>

    );

};