import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";


function Sliderr() {
    const slides=[
        {
            url:"https://stategisportal.nic.in/stategisportal/assets/img/slider/22/slider1.png"
        },
        {
          url:"https://stategisportal.nic.in/stategisportal/assets/img/slider/22/slider2.png"
        },
        {
          url:"https://stategisportal.nic.in/stategisportal/assets/img/slider/22/slider3.png"
        }
    ]
    const[currslide,setcurrslide]=useState(0);

    const prev=()=>{
      const first= currslide===0;
      const prevdone=first ?slides.length-1 :currslide-1;

      setcurrslide(prevdone);
    }

    const next=()=>{
      const last=currslide===slides.length-1;
      const nextdone=last?0:currslide+1;

      setcurrslide(nextdone)
    }
    const gotoslide=(index)=>{
      setcurrslide(index)
    }
    setTimeout(next,7000);
    
  return (
    <div className='w-full   sm:h-48 md:h-72  lg:h-[500px]  overflow-x-hidden   '>
    <div style={{backgroundImage:`url(${slides[currslide].url})`}}  className=' w-full h-full bg-center bg-cover duration-200 relative  '>
    <span className='relative left-[95%] top-[50%] cursor-pointer   ' onClick={next}>
       <FaArrowRight  size={25} color='#a3b8c2'/>
       </span>
       <span className='relative left-[5%] top-[50%]  cursor-pointer ' onClick={prev}>
       <FaArrowLeft  size={25} color='#a3b8c2'/>
       </span>
       {/* <div className='absolute right-1/2 top-'></div> */}
       {/* <div className='relative flex cursor-pointer justify-center top-5'>
        {/* {
          slides.map((slide,index)=>(
            <div onClick={gotoslide(index)} key={index}>

              <RxDotFilled size={30} />
            </div>  
          ))
        } */}
       {/* </div>  */}
     </div>

  </div>
  )
}

export default Sliderr
