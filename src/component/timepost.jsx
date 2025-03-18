import React from 'react';

function Post({milTime}) {
  const date = new Date();
  const hrs = date.getHours();
  
  console.log({milTime});
  function postTime() {
    if(milTime === false){
      return <p className='text-[25pt] opacity-[0.2] text-white'>AM</p>;
    }else{
      if (hrs >= 0 && hrs < 12) {
        return "AM";
      } else {
        return "PM";
      }
    }
  }

  console.log(hrs)
  return (
    <>
      <p className='text-[25pt]'>{postTime()}</p>
    </>
  );
}

export default Post;