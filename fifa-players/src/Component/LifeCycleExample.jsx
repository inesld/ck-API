import React, { useEffect, useState } from 'react'

const LifeCycleExample = () => {
    const [message,setMessage]=useState("bonjour !")
    // useEffect(() => {
    //     console.log("Hello ines");
    //    return () => {
    //     console.log("updating");
    //    }
    //   }, [counter])
      
useEffect(() => {
  console.log('monting use');

  return () => {
   console.log('inmonting');
  }
}, [message])

  return (
    <div>
        <h1>{message}</h1>
        <button onClick={()=>setMessage('Au revoir')}>
            changer le message
             </button>
    </div>
  )
}

export default LifeCycleExample