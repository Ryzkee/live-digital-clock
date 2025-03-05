import React from 'react';

function Post() {
  const date = new Date();
  const hrs = date.getHours();

  function postTime() {
    if (hrs >= 0 && hrs < 12) {
      return "AM";
    } else {
      return "PM";
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