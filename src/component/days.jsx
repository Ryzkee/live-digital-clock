import React from 'react';

function Days(props) {
  const date = new Date();
  const currentDay = date.getDay();
  return (
    <>
      {props.days.map((day, index) => {
        return index === currentDay ? <p key={day} className='opacity-[1]'>{day}</p> : <p key={day} className='opacity-[0.1]'>{day}</p>;
      })}
    </>
  );
}

export default Days;