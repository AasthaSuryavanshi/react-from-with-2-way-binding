import React from 'react'

function background() {
  return (
<div className=' w-[100vw] h-[100vh] bg-gradient-to-r from-[#D8CED0] to-[#D4CBCD] overflow-hidden flex items-center justify-center'>
    <div className='w-[50%] overflow-hidden bg-black translate-x-[15vh]'>
      <video src="../7d4fe75aac7d95f21a8037b3e961876d.mp4" autoPlay loop muted
    className='w-[100%] h-[100%] scale-[1.3]  '></video>
    </div>
    </div>  )
}

export default background