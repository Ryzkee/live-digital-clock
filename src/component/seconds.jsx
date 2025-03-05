import React from 'react';

function Seconds(props) {
  const seconds = props.seconds;
  const mapping = {
    11: "1",
    21: "2",
    31: "3",
    41: "4",
    51: "5",
  };

  function secTime() {
    if (seconds < 1) 
      return <>
        <p>0</p>
        <p>0</p>
      </>;
    if (seconds === 1) 
      return <>
        <p>0</p>
        <p className="text-[115px] opacity-0">1</p>
        <p className="opacity-0">1</p>
        <p>1</p>
      </>;
    if (seconds < 10) 
      return <>
        <p>0</p>
        <p>{seconds}</p>
      </>;
    if (mapping[seconds]) 
      return <>
        <p>{mapping[seconds]}</p>
        <p className="text-[115px] opacity-0">1</p>
        <p className="opacity-0">1</p>
        <p>1</p>
      </>;
    
    return <p>{seconds}</p>;
  }

  return(
    <>
     {secTime()}
    </>
  )
}

export default Seconds;