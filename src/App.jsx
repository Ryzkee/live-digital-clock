import { useState, useEffect } from 'react'
import DigitalClock from './component/digitalclock';

function App() {
  const [time, setTime] = useState(new Date());
  const [button, setButton] = useState(false);

  useEffect(() => {
    let timer;
      if(button === true){
        timer = setInterval(() => {
          setTime(new Date());
        }, 1000);
      }
    return () => clearInterval(timer);
  }, [button]);

  const handleBtnClick = (value) => {
    setButton(value);
  }
  


  return (
    <div className="bg-[#6ba8a9] w-full h-[725px] flex justify-center items-center font-Orbitron relative">
      <div className='w-[200px] h-[80px] absolute bg-[#475055] start-center top-52 rounded-2xl'></div>
      <div className='bg-[#588c8a] w-[630px] h-[80px] absolute z-[0] start-center bottom-45 rounded-[60%]'></div>
      <DigitalClock time={time} onButtonClick={handleBtnClick}/>
    </div>
  )
}

export default App
