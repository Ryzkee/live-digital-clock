import React, { useState } from 'react';
import Days from './days';
import Hours from './hours';
import Minutes from './minutes';
import Seconds from './seconds';
import Post from './timepost';
import Date from './date';

function DigitalClock({ time, onButtonClick }) {
  const [button, setButton] = useState(false);
  const [highlight, setHighlight] = useState(false);
  const [handleTime, sethandleTime] = useState(false);
  const [milTime, setMilTime] = useState(false);

  const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  const checkHours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  function offDisplay() {
    return days.map((day) => {
       return <p key={day} className='opacity-[0.1] text-white'>{day}</p>;
    })
  }

  const hours = () => { 
    if((checkHours > 12 && checkHours < 24) && milTime === false){ 
      return time.getHours();
    }else{
      if(checkHours <= 12){
        return time.getHours();
      }else{
        return time.getHours() - 12;
      }
    }
  } 

  const handleValueClick = () => {
    const newValue = !button;
    setButton(newValue);
    onButtonClick(newValue);

    if (newValue) {
      setHighlight(true);
      setTimeout(() => {
        setHighlight(false);
      }, 1000);
    }
  }

  const handleTimeValueClick = () => {
    const newValue = !handleTime;
    sethandleTime(newValue);
    setMilTime(newValue);
  }

  return (
    <div className='w-[530px] h-[280px] bg-[#313a3f] flex justify-center items-center rounded-[40px] z-[1]'
      style={{
        background: "rgb(71,80,85)",
        background: "linear-gradient(160deg, rgba(71,80,85,1) 30%, rgba(71,80,85,1) 49%, rgba(36,40,43,1) 50%, rgba(36,40,43,1) 70%)",
      }}
    >
      <div className='border-7 w-[500px] h-[250px] flex flex-col items-center px-3 py-2 rounded-[30px]'
        style={{
          background: "rgb(71,80,85)",
          background: "linear-gradient(155deg, rgba(71,80,85,1) 30%, rgba(71,80,85,1) 49%, rgba(36,40,43,1) 50%, rgba(36,40,43,1) 70%)",
        }}
      >
        <div className="w-full h-[20%] text-[#64e0a4] text-[13pt] digital flex flex-row justify-around items-center">
          {button ? <Days days={days}/> : offDisplay()}
        </div>
      <div className='w-full h-[80%] flex flex-col items-center justify-center'>
        <div className="text-[#64e0a4] text-[8rem] digital w-[85%] h-[80%] flex flex-row justify-around items-center">
            <div className='relative w-[30%] h-[70%] text-left flex items-center'> 
              <p className='absolute flex justify-end w-full'>
                {button ? <Hours hours={hours()}/> : <p></p>}
              </p>
              <p className={`w-full flex justify-end ${highlight ? "text-[#64e0a4] opacity-[1]" : "text-white opacity-[0.2]"} `}>88</p>
            </div>     
            <p className={`${button ? "opacity-[1]": "opacity-[0.2] text-white"}`}>:</p>
            <div className='relative w-[30%] h-[70%] text-left flex items-center'>
              <p className='absolute flex justify-end w-full'>
                {button ? <Minutes minutes={minutes}/> : <p></p>}
              </p>
              <p className={`w-full flex justify-end ${highlight ? "text-[#64e0a4] opacity-[1]" : "text-white opacity-[0.2]"} `}>88</p>
            </div>
            <p className={`${button ? "opacity-[1]": "opacity-[0.2] text-white"}`}>:</p>
            <div className='relative w-[30%] h-[70%] text-left flex items-center'>
              <p className='absolute flex justify-end w-full'>
                {button ? <Seconds seconds={seconds}/> : <p></p>}
              </p>
              <p className={`w-full flex justify-end ${highlight ? "text-[#64e0a4] opacity-[1]" : "text-white opacity-[0.2]"} `}>88
                </p>
            </div>
            <div className='w-[7%] h-[75%] flex justify-end items-end '>
              {button ? <Post /> : <p className='text-[25pt] opacity-[0.2] text-white'>AM</p>}
            </div>
        </div>
        <div className='w-full h-[20%] flex items-end justify-between'>
          {button ? <Date date={time} months={months}/> : <p className='text-[20px] text-white w-[50%] pl-[5px] opacity-[0.2]'>Date</p>};
          <div className='w-[50%] h-full flex justify-end items-center z-10'>
            <button className={`text-white text-[10pt] w-[50px] h-full border-2 rounded-full mr-5 ${button ? 'bg-red-500' : 'bg-green-500'}`}
              onClick={handleValueClick}>
              {button ? 'Stop' : 'Start'}
            </button>
          <button className='text-white text-[8pt] w-[50px] h-full border-2 rounded-full mr-2 flex items-center justify-center'
            onClick={handleTimeValueClick}>
              <p className={`${handleTime ? "text-[#64e0a4] text-[13pt]" : "text-white"}`}>12</p>
              <p>/</p>
              <p className={`${handleTime ? "text-white" : "text-[#64e0a4] text-[13pt]"}`}>24</p>
              </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default DigitalClock;