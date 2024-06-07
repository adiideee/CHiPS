import React from 'react'
import Card from '../Container/Card'
function Project() {
  const cardinfo=[
    {
      id:1,
      para:" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae assumenda odit dignissimos enim. Voluptate dolor magnam nesciunt. Ex, ea sapiente? ",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"Hi",
      link:"https://www.chips.gov.in/en"
    },
    {
      id:2,
      para:"lorem30",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"hello",
      link:"https://www.chips.gov.in/en"
      
  
    },
    {
      id:3,
      para:"lorem20",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"Hi",
      link:"https://www.chips.gov.in/en"
    },
    {
      id:4,
      para:"lorem30",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"hello",
      link:"https://www.chips.gov.in/en"
      
  
    },
    {
      id:5,
      para:"lorem20",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"Hi",
      link:"https://www.chips.gov.in/en"
    },
    {
      id:6,
      para:"lorem30",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"hello",
      link:"https://www.chips.gov.in/en"
      
  
    },
    {
      id:7,
      para:"lorem20",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"Hi",
      link:"https://www.chips.gov.in/en"
    },
    {
      id:8,
      para:"lorem30",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"hello",
      link:"https://www.chips.gov.in/en"
  
    },
    {
      id:9,
      para:"lorem30",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"hello",
      link:"https://www.chips.gov.in/en"
      
  
    },
    {
      id:10,
      para:"lorem20",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"Hi",
      link:"https://www.chips.gov.in/en"
    },
    {
      id:11,
      para:"lorem30",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"hello",
      link:"https://www.chips.gov.in/en"
      
  
    },
    {
      id:12,
      para:"lorem20",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"Hi",
      link:"https://www.chips.gov.in/en"
    },
    {
      id:13,
      para:"lorem30",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"hello",
      link:"https://www.chips.gov.in/en"
      
  
    },
    {
      id:15,
      para:"lorem20",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"Hi",
      link:"https://www.chips.gov.in/en"
    },
    {
      id:16,
      para:"lorem30",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"hello",
      link:"https://www.chips.gov.in/en"
  
    },
    {
      id:17,
      para:"lorem30",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"hello",
      link:"https://www.chips.gov.in/en"
  
    },
    {
      id:18,
      para:"lorem30",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"hello",
      link:"https://www.chips.gov.in/en"
  
    },
    {
      id:19,
      para:"lorem30",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"hello",
      link:"https://www.chips.gov.in/en"
  
    },
    {
      id:20,
      para:"lorem30",
      img:'https://chipsgis.cgstate.gov.in/assets/img/portfolio/mining.jpg',
      title:"hello",
      link:"https://www.chips.gov.in/en"
  
    },

  ]
  return (
    <div>
      
      <div className=' h-full flex justify-center mb-10 items-center'>
   <div className=' grid grid-cols-4 gap-5 h-full'>
   {
    cardinfo.map((item)=>{
      return(
          <a href={item.link} target='_blank'>
              <Card imgSrc={item.img}  title={item.title} text={item.para}   />
          </a>
      )
    })
  }
   </div>
     </div>
    </div>
  )
}

export default Project
