// import React, { useState } from 'react'
import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
// import Dropdown from './Dropdown';

// function Footer() {
    
//     const otherdepartments=[
//         {
//             title:"Bhuvan",
//             url:"#"
//         },
//         {
//             title:"Census",
//             url:"#"
//         },{
//             title:"Bharat Maps",
//             url:"#"
//         },{
//             title:"NSDI",
//             url:"#"
//         }
//     ]
//   return (
//     <>
    
//   <div className=' hidden lg:block w-full pt-5   bg-black '>
//     <div className='w-[80%] h-full mx-auto flex justify-between'>
//         <div className='text-white'>
//             <h1 className=' font-bold text-xl'>Other Departments</h1>
//             <hr  className='text-white w-1/2 mt-2 border-b-2'/>
//             <ul className='' >
//                 {
//                     otherdepartments.map((val)=>{
//                         return (
//                             <li className='mt-2'>
//                                 <a href={val.url}>{val.title}</a>
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//         <div className='text-white'>
//             <h1 className=' font-bold text-xl'>Other Departments</h1>
//             <hr  className='text-white w-1/2 mt-2 border-b-2'/>
//             <ul className='' >
//                 {
//                     otherdepartments.map((val)=>{
//                         return (
//                             <li className='mt-2'>
//                                 <a href={val.url}>{val.title}</a>
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//         <div className='text-white'>
//             <h1 className=' font-bold text-xl'>Other Departments</h1>
//             <hr  className='text-white w-1/2 mt-2 border-b-2'/>
//             <ul className='' >
//                 {
//                     otherdepartments.map((val)=>{
//                         return (
//                             <li className='mt-2'>
//                                 <a href={val.url}>{val.title}</a>
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//         <div className='text-white'>
//         <h1 className=' font-bold text-xl'>Address</h1>
//             <hr  className='text-white w-1/2 mt-2 border-b-2'/>
//             3rd Floor, SDC BUILDING, 
//             <br />opp. New Circuit House, Civil Lines, 
//             <br />Raipur, Chhattisgarh 492001

//             <br />
//             <br />
//             Call=9899999999
//             <br />
//             Fax=777777777777777
//             <br />
//             Email=info@xyz.com


//      <div className='flex w-full mt-2 '>
//      <FaInstagram  size={25} color='white' className='mr-5' />
//             <FaTwitter size={25} color='white' className='mr-5'/>
//             <FaLinkedinIn  size={25} color='white' className='mr-5'/>
//             <SiGmail  size={25} color='white' className='mr-5' />
//      </div>
//         </div>
     

//     </div>
//     <div className='w-full bg-brown pl-4 pr-4  text-white flex justify-between bg-slate-500 mt-1 '>
    
//     <div className='inline'>
//     Designed, Developed & Maintained by CHIPS , <h2 className='text-red-400 inline-flex'> <a href="https://www.chips.gov.in/" target='_blank'>CHIPS</a></h2> © 2024
//     </div>
//     <div>
//     Site best viewed in Microsoft Internet Explorer 10+, Google Chrome ver 60, Firefox ver 60 or above in 1024x768 resolution
//     </div>

//     </div>
//     </div>


//     {/* responsive */}

// <div className='  max-w-[1024px]  lg:hidden w-full  pt-5  bg-black'>
//     <div className='w-[80%] mx-auto  flex-col justify-between '>
//         <Dropdown name="Other Departments" paths={otherdepartments}
//          />
//          <Dropdown name="Other Departments" paths={otherdepartments}
//          />


// <div className='text-white'>
//         <h1 className='  text-xl'>Address</h1>
//             <hr  className='text-white   border-b-2'/>
//             3rd Floor, SDC BUILDING, 
//             <br />opp. New Circuit House, Civil Lines, 
//             <br />Raipur, Chhattisgarh 492001

//             <br />
//             <br />
//             Call=9899999999
//             <br />
//             Fax=777777777777777
//             <br />
//             Email=info@xyz.com


//      <div className='flex w-full mt-2 '>
//      <FaInstagram  size={25} color='white' className='mr-5' />
//             <FaTwitter size={25} color='white' className='mr-5'/>
//             <FaLinkedinIn  size={25} color='white' className='mr-5'/>
//             <SiGmail  size={25} color='white' className='mr-5' />
//      </div>
//         </div>
        
//     </div>
//     <div className='w-full bg-brown pl-4 pr-4  text-white text-xs flex justify-between bg-slate-500 mt-1 '>
    
//     <div className='inline'>
//     Designed, Developed & Maintained by CHIPS , <h2 className='text-red-400 inline-flex'> <a href="https://www.chips.gov.in/" target='_blank'>CHIPS</a></h2> © 2024
//     </div>
//     <div>
//     Site best viewed in Microsoft Internet Explorer 10+, Google Chrome ver 60, Firefox ver 60 or above in 1024x768 resolution
//     </div>

//     </div>

// </div>
//     </>
 
//   )
// }

// export default Footer

import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { TbDeviceLandlinePhone } from "react-icons/tb";
function Footer() {
  return (
    <section >
        <div className='w-full mt-10 m-2 bg-[#212121] overflow-x-hidden'>
            <div className='w-[80%] mx-auto flex justify-between m-4'>
                <div className=' m-2  text-slate-200'>
                    <h1 className='text-red-400 lg:text-2xl text-xl '>Contact Us</h1>
                    <p>
                    Chhattisgarh Infotech Promotion Society (CHiPS),<br />
3rd Floor, State Data Centre Building,<br />
Opp. New Circuit House,<br />
Civil Lines, Raipur-492001 Chhattisgarh <br />
<br />

{/* <SiGmail  size={20} color='white' className='mr-5 inline' /> <p className="inline">ceochips@nic.in</p> */}
<span className="flex ">
<FaPhone size={20} color="slate-200" className="mr-2" /> <p> (0771) 4014158</p>
</span>
<span className="flex ">
<SiGmail size={20} color="slate-200" className="mr-2" /> <p> ceochips@nic.in</p>
</span>
<span className="flex ">
<TbDeviceLandlinePhone size={20} color="slate-200" className="mr-2" /> <p> (0771) 4014158</p>
</span>
</p>
                    
                </div>
                <div className=''>
                    form
                </div>


            </div>

        </div>
    </section>
  )
}

export default Footer

