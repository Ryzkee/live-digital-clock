import React from 'react';

function Date(props) {
  const date = props.date;
  const getMonth = date.getMonth();
  return (  
    <>
      <p className="text-[20px] text-[#64e0a4] w-[50%] pl-[5px]">{
          props.months[getMonth]
        } {
          date.getDate()
        } {
          date.getFullYear()
        }
      </p>
    </>
  );
}

export default Date;