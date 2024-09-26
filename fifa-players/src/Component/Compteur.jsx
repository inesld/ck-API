import React, { useEffect, useState } from "react";

const Compteur = () => {
  // On Declare state (variable) :
  // counter getter  ( state)
  // setCounter setter  (la fonction qui modife le state couter)
  // let counter = 0
  // setCounter(1) equivalent a  counter = 1
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Hello ines");
   return () => {
    console.log("updating");
   }
  }, [counter])
  

  
  const increment = () => {
    setCounter(counter+1)
  }

  const decrement = () => {
    if (counter>0) {

        setCounter(counter-1)
    }

  }

  return (
    <div>
      <button onClick={()=>increment()}>  Increment (+)</button>
      <p> Sccore {counter}</p>
      <button onClick={()=>decrement()}> decrement (-)</button>
    </div>
  );
};

export default Compteur;
