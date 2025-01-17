import { useState } from "react";

const Stopwatch = () =>{
  const [time,setTime] = useState(0);
  const [isIntervalStart, setIsIntervalStart] = useState(-1);

  function handleStart(){
    let timerId = setInterval(()=>{
      setTime((time)=>time+1);
    },1000);
    setIsIntervalStart(timerId)
  }

  function handleStop(){
    clearInterval(isIntervalStart);
    setIsIntervalStart(-1);
  }

  function handleRest(){
    clearInterval(isIntervalStart);
    setIsIntervalStart(-1);
    setTime(0);
  }

  function formatTime(seconds){
    const minutes = Math.floor(seconds/60);
    const remainingSeconds = seconds%60;
    return `${minutes}:${remainingSeconds<10?"0":''}${remainingSeconds}`;
  }

  return(
    <div>
      <h1>Stop Watch</h1>
      <p>time: {formatTime(time)}</p>
      {isIntervalStart === -1 ? 
      <button onClick={handleStart}>Start</button>:
      <button onClick={handleStop}>Stop</button>
}
      <button onClick={handleRest}>Reset</button>
    </div>
  )
}
export default Stopwatch;