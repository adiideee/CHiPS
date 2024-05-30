import React from 'react'


function Card({head,para,imgsrc}) {
  
  
  return (
   <>
<div className='m-2'>
<div
  className={`relative overflow-hidden w-72 h-72 rounded-3xl cursor-pointer text-2xl font-bold `} width={100} style={{backgroundImage:`url(${imgsrc})`}}
>
  <div class="z-10 absolute w-full h-full peer"></div>
  <div
    class="absolute peer-hover:-top-20 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-36 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"
  ></div>
  <div
    class="absolute flex text-sm text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-36 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500"
  >
    {para}
    </div>
  <div class="w-full h-full items-center justify-center flex uppercase">
   {head}
  </div>
</div>

</div>

</>
  )
}

export default Card


// <div className='m-2'>
// <div
// className={`relative overflow-hidden w-60 h-60 rounded-3xl cursor-pointer text-xl font-bold justify-center bg-zinc-500  `}
// >
// {/* <img src={mining} alt="" className='w-full h-full ' /> */}

// <div className="z-10 absolute w-full h-full peer">

// </div>
// <div
//   className=" absolute peer-hover:-top-44 peer-hover:-left-16 peer-hover:w-[140%] peer-hover:h-[140%] -top-32 -left-32 w-32 h-44 rounded-full bg-purple-300 transition-all duration-500"
// >
  
// </div>
// <div
//   className="  absolute flex text-sm text-center items-end justify-end peer-hover:right-0 peer-hover:rounded-b-none peer-hover:bottom-0 peer-hover:items-center peer-hover:justify-center peer-hover:w-full peer-hover:h-full -bottom-32 -right-36 w-36 h-44 rounded-full bg-purple-300 transition-all duration-500"
// >
//   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque maiores ratione alias doloremque aut, consequuntur praesentium nesciunt hic. Provident, porro.
// </div>
// <div className="w-full h-full items-center justify-center flex uppercase  z-10">
//   Mining Geo Portal.
// </div>
// </div>


    
//   </div>
