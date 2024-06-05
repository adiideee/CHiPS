import React from 'react'
import about from "../../images/about.jpg"

function About() {
  return (
    <>
    
  
    <section>
        <section className='w-full p-2 mt-10 overflow-x-hidden' >
            <div className='w-[80%] justify-between lg:flex mx-auto rounded-xl hover:shadow-[#b49e9c] shadow-lg p-5 '>
                <div className=' p-5  h-full my-auto  text-sm lg:text-lg'>
                <h1 className='font-bold lg:text-3xl text-center  text-xl text-red-500'> About</h1>
                <p className='mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto enim omnis maxime pariatur nisi vel cum nulla dolores asperiores!</p>
                </div> 
                      
                    <img src="https://cms.patrika.com/wp-content/uploads/2019/10/22/chips.jpg" alt="" className='lg:w-1/3 w-1/2 p-2   shadow-lg shadow-zinc-400 rounded-xl' />
                     



            </div>
            <div className='w-[80%] justify-between lg:flex mx-auto  mt-20 p-2'>
                <div className=' h-1/2 my-auto   text-sm lg:text-lg'>
                <h1 className='font-bold  text-xl lg:text-3xl text-center text-red-500'> Background</h1>
             
                <p className='m-3 '>
                Need for a federated approach for creation, sharing and management of map data has long been felt in the state. There are multiple departments, independently creating spatial data. It has been found that following issues needs to be addressed:
                <br />
                <br />
<ul className='list-disc '>
    <li> Duplication in data creation efforts by various state departments</li>
    <li> Absence of standardized practices for map data creation and usage</li>
    <li>Absence of appropriate state policies for spatial data sharing and usage</li>
    <li>Ensure safe usage of map data</li>
    <li>Extend benefits of map data for the cause of improving citizen centric servicesbr</li>
    <li>In order to address the above, MPSSDI has been designated as the nodal agency for implementation of the Madhya State Spatial Data Infrastructure Program</li>
</ul>




                </p>
                </div>
                <img src={about} alt="" className=' lg:w-1/3 w-1/2 rounded-xl   shadow-lg shadow-zinc-400' />
            </div>
        </section>
    </section>
    </>
  )
}

export default About
