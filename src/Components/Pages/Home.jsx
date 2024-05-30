import React from 'react'
import Sliderr from '../Sliderr'
import Card from '../../Card'

function Home() {
const cardinfo=[
  {
    id:1,
    para:"lorem20",
    img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
    title:"Hi"
  },
  {
    id:2,
    para:"lorem30",
    img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
    // img:'./images/mining.jpg',
    title:"hello"

  }
]

  return (
    <div className='w-full h-screen mt-2 mb-2'>
      <Sliderr/>
     <section className=' w-[75%] mx-auto '>
   <div className='w-full flex flex-wrap'>
  {
    cardinfo.map((item)=>{
      return(
        <Card head={item.title} para={item.para} imgsrc={item.img}  />
      )
    })
  }
   </div>
     </section>
    </div>
  )
}

export default Home
