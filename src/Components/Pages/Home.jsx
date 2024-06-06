import React from 'react'
import Sliderr from '../Container/Sliderr'
import Card from "../Container/Card"
import Footer from './Footer'

function Home() {


  return (
    <div className='w-full {styles.nunitoFont} h-screen '>
      <Sliderr/>
     <section className='mt-10 mb-10 w-[80%] mx-auto'>
      <h1 className='text-center font-bold text-gray-500 text-4xl'>Chhattisgarh GEO Serivces </h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem sequi aperiam, est animi possimus in voluptatem cupiditate nemo magnam mollitia repellat porro harum, fugit sit! Temporibus nostrum vitae alias similique impedit, possimus beatae eos libero ad aliquid incidunt est pariatur iste suscipit ab exercitationem iure molestias illo blanditiis sunt voluptate.
        
      </div>
     </section>
    {/* <Footer/> */}
    </div>
  )
}

export default Home
