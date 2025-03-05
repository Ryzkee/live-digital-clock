import React from 'react';

function Hours(props) {
  const hours = props.hours;
  const mapping = {
    11: "1",
    21: "2"
  };
  
  function hoursTime() {
    if (hours < 1) 
      return <>
        <p>0</p>
        <p>0</p>
      </>;
    if (hours === 1) 
      return <>
        <p>0</p>
        <p className="text-[115px] opacity-0">1</p>
        <p className="opacity-0">1</p>
        <p>1</p>
      </>;
    if (hours < 10) 
      return <>
        <p>0</p>
        <p>{hours}</p>
      </>;
    if (mapping[hours]) 
      return <>
        <p>{mapping[hours]}</p>
        <p className="text-[115px] opacity-0">1</p>
        <p className="opacity-0">1</p>
        <p>1</p>
      </>;
    
    return <p>{hours}</p>;
  }

  return(
    <>
     {hoursTime()}
    </>
  )
}

export default Hours;