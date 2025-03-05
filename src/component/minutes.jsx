import React from 'react';

function Minutes(props) {
  const minutes = props.minutes;
  const mapping = {
    11: "1",
    21: "2",
    31: "3",
    41: "4",
    51: "5",
  };
  
  function minTime() {
    if (minutes < 1) 
      return <>
        <p>0</p>
        <p>0</p>
      </>;
    if (minutes === 1) 
      return <>
        <p>0</p>
        <p className="text-[115px] opacity-0">1</p>
        <p className="opacity-0">1</p>
        <p>1</p>
      </>;
    if (minutes < 10) 
      return <>
        <p>0</p>
        <p>{minutes}</p>
      </>;
    if (mapping[minutes]) 
      return <>
        <p>{mapping[minutes]}</p>
        <p className="text-[115px] opacity-0">1</p>
        <p className="opacity-0">1</p>
        <p>1</p>
      </>;
    
    return <p>{minutes}</p>;
  }

  return(
    <>
     {minTime()}
    </>
  )
}

export default Minutes;