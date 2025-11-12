const { useState, useEffect, useRef } = React;

export const OTPGenerator = () => {

  let buttonPress = false;

  //const [otp, setOtp] = useState();
  const pRef = useRef("");
  const [ref, setRef] = useState("Click 'Generate OTP' to get a code");
  const [h2Otp, setH2Otp] = useState("");
  const [num, setNum] = useState(5);

  // let five = 5;

  const handleClick = (num) => {
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
    
    buttonPress = true;

    console.log(buttonPress);
    
    setH2Otp(String(Math.floor(Math.random() * 1000000)).padStart(6, '0'));

    setRef("Expires in: " + setNum(num) + " seconds");

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

  useEffect(() => {
    //pRef.value = "a"
    console.log("Component renders");
    console.log(buttonPress);
    console.log(num);
    // setRef("Expires in: " + num + " seconds");

    

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

    setNum(numDecr);

    function numDecr() {
      if (!interv) {
        interv = setInterval(numFunc, 1000);
      }
      
    console.log(num);
    }

    function numFunc() {
      // if (num != 0) {
      //   return num--
      // }
      while (num >=1) {
       setNum(num--)
      }
    }

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

    return () => {
      // setNum(clearInterval(num));
      // setNum(clearInterval(interv));
      // clearInterval(setNum);
      // clearInterval(interval);

      function stopInterv() {
        clearInterval(interv);
        interv = null;
      }
    }

    
  }, [num]);

  return (
    <div className="container" style={{backgroundColor: "darkblue", color: "skyblue", padding: 0, margin: 0}}>
      <h1 id="otp-title">OTP Generator </h1>
    
      <h2 id="otp-display">{h2Otp}</h2>
      <p id="otp-timer" aria-live="polite" ref={pRef}>{ref}</p>
      <button id="generate-otp-button" onClick={() => handleClick(num)}>Generate OTP</button>
    </div>

    );

};