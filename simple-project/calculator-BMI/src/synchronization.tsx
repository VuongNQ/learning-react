import { useState } from "react";

export default function Synchrozition() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
 
  async function handleAwaitBuy() {
    setPending(p => p + 1);
    await delays(3000);
    setPending(p => p - 1 );
    setCompleted(c => c + 1);
  } 

  return (  
    <>
    <h5>Pending : {pending}</h5>
    <h5>Completed: {completed}</h5>
    <button onClick={handleAwaitBuy}>Buy</button>
    </>
  );
}

function delays(ms) {
  return new Promise(resolve => {
    setTimeout(resolve,ms)
  })
}