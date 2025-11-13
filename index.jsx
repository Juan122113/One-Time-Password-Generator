const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {

  let buttonPress = false;
  let five = 5;
  // let five;
  // let remainingTime;

  //const [otp, setOtp] = useState();
  // const pRef = useRef("");
  const buttonRef = useRef();
  const [ref, setRef] = useState("");
  const [h2Otp, setH2Otp] = useState("Click 'Generate OTP' to get a code");
  const [num, setNum] = useState(5);
  const [buttonPressState, setButtonPressState] = useState(false); 
  const [remainingTime, setRemainingTime] = useState(5);

  console.log(buttonRef);

  const handleClick = () => {
    // console.log(event);
      //console.log(setOtp(Math.floor(Math.random() * 1000000)));
      //pRef.current.value = "a";
      //buttonPress = true;
      
     // let num = 5;

    // function count(five) {
      
    //   while (five >= 1) {
    //     five--

    //   console.log(five);
    //   }
    //   console.log(five)

    //   return five;

    //   ;
    // }
 

    //console.log(num);
      
    // setRef("Expires in: " + setInterval(count(five), 1000) + " seconds");
    
    // buttonPress = true;

    setButtonPressState(true);

    // console.log(buttonPress);
    
    setH2Otp(String(Math.floor(Math.random() * 1000000)).padStart(6, '0'));

    // setNum(num);

    // setRef("Expires in: " + num + " seconds");

  //   useEffect(() => {
  //   //pRef.value = "a"
  //   console.log("Component renders");
  //   console.log(buttonPress);
  //   // setRef("Expires in: " + num + " seconds");
  //   // num--

  //   const inter = setInterval(() => {while (num >=1) {
  //     num--
  //   }}, 1000);

    

  //   // let five = 5;

  //   // if (buttonPress == true) {
  //   //   //function count(five) {
      
  //   // while (five >= 1) {
  //   //     five--

  //   //   console.log(five);
  //   //   }
  //   //   console.log(five)

  //   //   //return five;

      
  //   // //}

  //   // setRef("Expires in: " + setInterval(five, 1000) + " seconds");
    
  //   // } else {
  //   //   clearInterval(setRef);
  //   // }

    
  // }, [num]);

    // let five = 5;

    // setRef("Expires in: " + setInterval(interval(five), 1000) + " seconds");

    // setRef("Expires in: " + (function interval(five) {
    //   // while (five >= 1) {
    //   //   return five--
    //   //   // setInterval(five, 1000);
    //   // }
    //   for (let i = five; i >= 0; i--) {
    //     return i;
    //     console.log(i);
    //   }
    // }) + " seconds");

    // setRef();

    // const inter = setInterval(() => {console.log("Expires in: ${five} seconds")}, 1000);

    // function interval(num) {
    //   // while (five >= 1) {
    //   //   return five--
    //   //   // setInterval(five, 1000);
    //   // }
    //   for (let i = num; i >= 0; i--) {
    //     return i;
    //     console.log(i);
    //   }
    // }

    // if (buttonPress == true) {
    //   //function count(five) {
      
    // // while (five >= 1) {
    // //   five--

    // //   // function interval(five) {
    // //   //   setInterval(five, 1000);
    // //   // }

    // //   console.log(five);
    // //   }
    // //   console.log(five)

    //   //return five;

      
    // //}

    // // setRef("Expires in: " + setInterval(five, 1000) + " seconds");
    
    // // } else {
    // //   clearInterval(setRef);
    // }



// console.log(numInterval);

// function numInterval() {
//   return setInterval(count(five), 1000);
// }
        
     // console.log(buttonPress);
    //    function setTimer() {
    // //if (buttonPress === true) {
    //  // console.log("eso")
    // //}

    // }
  }

  // if (handleClick()) {
  //   buttonPressState = true;
  // }

  // console.log(buttonPress);
  console.log(buttonPressState);

  useEffect(() => {
    //pRef.value = "a"
    console.log("Component renders");
    // console.log(buttonPress);
    console.log(buttonPressState);
    console.log(num);
    // setRef("Expires in: " + num + " seconds");
    // setRef("Expires in: " + remainingTime + " seconds");

    

    // let five = 5;

    // if (buttonPress == true) {
    //   //function count(five) {
      
    // while (five >= 1) {
    //     five--

    //   console.log(five);
    //   }
    //   console.log(five)

    //   //return five;

      
    // //}

    // setRef("Expires in: " + setInterval(five, 1000) + " seconds");
    
    // } else {
    //   clearInterval(setRef);
    // }
    // setNum(setInterval(interval, 1000));

    let interv;

    if (buttonPressState) {
      console.log(ref);
      // numDecr(interv);
      // console.log(interv);

    //   function numDecr() {
    //     if (!interv) {
    //       console.log(interv);
    //       interv = setInterval(numFunc, 1000);
    //       console.log(interv);
    //     }

    // setNum(interv);
      
    //     console.log(num);
    //     console.log(five);
    //   }

      buttonRef.current.disabled = true;

      setRef("Expires in: " + num + " seconds");

      const countdownInterval = setInterval(() => {
        // let five = [5, 4, 3, 2, 1];
        // let five = 5;
        // let count = five--;
        // let remainingTime = five--;
        // let remainingTime = 5-1;

        // while (five > 0) {
        //   setNum(five);
        //   setRef("Expires in: " + num + " seconds");
        //   five--
        // }
        // remainingTime--;
        // remainingTime = remainingTime--;
        // remainingTime = remainingTime-1;
        // setRemainingTime(five--);

        // if (five > 0) {
        //   five--;
        // }

        // for (let i = 0; i < five.length; i++) {
        //   setNum(five[i]);
        // }

        // five.map((i) => {setNum(i);});

        // setNum(five.map((i) => {setNum(i);}));

        // setRef("Expires in: " + five + " seconds");
        // setRef("Expires in: " + num + " seconds");

        // five = 5;
        // setRef("Expires in: " + setNum(num - 1) + " seconds");
        // setNum(num - 1);
        // five = five-1;
        // setRef("Expires in: " + num + " seconds");
        setRef("Expires in: " + setNum(num-1) + " seconds");
        setNum(num-1);
        console.log(remainingTime);
        
        // let five = 5;
        // setNum(five--)
        // five--

        if (num <= 1) {
          // setRemainingTime(0);
          // five = 0;
          setNum(1);
          clearInterval(countdownInterval);
          console.log("Countdown complete");
          setButtonPressState(false);
          buttonRef.current.disabled = false;
          setRef("OTP expired. Click the button to generate a new OTP.");
          setNum(5);
        }

        // setNum(remainingTime);
        // setNum(five);
        // setRef("Expires in: " + num + " seconds");
      }, 1000)

      return () => clearInterval(countdownInterval);

    //   function numFunc() {
    //   // if (num != 0) {
    //   //   return num--
    //   // }
    //   // while (five >=1) {
    //   //  five--;
    //   // //  setNum(five);
    //   // }
        

    //     if (five > 0) {
    //     // setNum(five);
    //       console.log(five);
    //       // return five--
    //       five--
    //       // remainingTime = five--
    //       setNum(five);
    //     // setNum(remainingTime);
    //       console.log(five);
    //       console.log(remainingTime);
    //       // five - 1
    //       // return five;
    //     }

    //     if (five <= 0) {
    //       five = 0;
    //       clearInterval(numDecr);
    //     }
        
    //     // setNum(remainingTime);
    //     // setRef("Expires in: " + remainingTime + " seconds");
    //   }
      
    //   numDecr(interv);

    // //   function numDecr() {
    // //     if (!interv) {
    // //       console.log(interv);
    // //       interv = setInterval(numFunc, 1000);
    // //       console.log(numFunc);
    // //       console.log(interv);
    // //     }

    // // // setNum(interv);
      
    // //     console.log(num);
    // //     console.log(five);
    // //   }
      
    //   console.log(five);
      // return five
    } //else {
      // return () => {
      // // setNum(clearInterval(num));
      // // setNum(clearInterval(interv));
      // // clearInterval(setNum);
      // // clearInterval(interval);

      //   function stopInterv() {
      //     clearInterval(interv);
      //     interv = null;
      //   }
      // }
  

    // console.log(interv);
    // setNum(numDecr);
    // console.log(five);
    // setNum(five);

    // numDecr(interv);

    // function numDecr() {
    //   if (!interv) {
    //     return interv = setInterval(numFunc, 1000);
    //     console.log(interv);
    //   }

    // setNum(interv);
      
    // console.log(num);
    // console.log(five);
    // }

    // function numFunc() {
    //   // if (num != 0) {
    //   //   return num--
    //   // }
    //   // while (five >=1) {
    //   //  five--;
    //   // //  setNum(five);
    //   // }
    //   if (five > 0) {
    //     five--
    //     setNum(five);
    //   }
      
    //   console.log(five);
    //   // return five
    // }

    // setNum(interv);
    // setNum(numDecr);

    // setNum(setInterval(function numDecr(num) {
    //   while (num >= 1) {
    //    num--
    //   //   // setInterval(five, 1000);
    //   }
    //   // for (let i = num; i >= 0; i--) {
    //   //   return i;
    //   //   console.log(i);
    //   // }
    // }), 1000);

    // return () => {
    //   // setNum(clearInterval(num));
    //   // setNum(clearInterval(interv));
    //   // clearInterval(setNum);
    //   // clearInterval(interval);

    //   function stopInterv() {
    //     clearInterval(interv);
    //     interv = null;
    //   }
    // }

    // setNum(numDecr);

    
  }, [ref, num, buttonPressState, remainingTime]);

  return (
    <div className="container" style={{backgroundColor: "darkblue", color: "skyblue", padding: 0, margin: 0}}>
      <h1 id="otp-title">OTP Generator</h1>
      <h2 id="otp-display">{h2Otp}</h2>
      <p id="otp-timer" aria-live="polite">{ref}</p>
      <button id="generate-otp-button" onClick={handleClick} ref={buttonRef} >Generate OTP</button>
    </div>

    );

};