import React from "react";
import about from "../../images/about.jpg";
import chipsabout from "../../images/chips_about.png";

function About() {
  return (
    <>
<<<<<<< HEAD
      <section>
        <section className="w-full p-2 mt-10 overflow-x-hidden">
          <div className="w-[80%] justify-between lg:flex mx-auto rounded-xl hover:shadow-[#b49e9c] shadow-lg p-5 ">
            <div className=" p-5  h-full my-auto  text-sm lg:text-lg">
              <h1 className="font-bold lg:text-3xl text-center  text-xl text-red-500">
                {" "}
                About
              </h1>
              <p className="mt-2 " style={{textAlign:"justify"}}>
                Chhattisgarh Infotech Promotion Society (CHiPS) is the nodal
                agency and prime mover for propelling IT growth & implementation
                of the IT & e-Governance projects in the State of Chhattisgarh.
                CHiPS is involved in the end-to-end implementation of some mega
                IT Projects like, SDC, SSDG, SWAN, GIS, CHOi CE, e-Procurement
                etc. A professional approach is being adopted for the
                implementation of IT Projects using the services of e-governance
                experts and consultants from corporate and academia.
                Chhattisgarh State with wide-ranging socio-economic disparities
                is now witnessing the ongoing Information Technology (IT)
                revolution. Information and Communication Technology (ICT) is a
                particularly important medium for the state in reaching out and
                improving livelihoods specially for its overwhelming SC / ST
                population across 44% forest area, which had largely remained
                untouched by modern development. An overwhelming proportion of
                this population is dependent upon agriculture and forest for
                their basic livelihood. Despite significant bottlenecks of
                limited access to market related information, monsoon forecasts,
                government schemes, information on modern farming practices,
                agriculture and forest contribute significantly to the State’s
                income. ICT has the potential to significantly improve this
                contribution. In doing so, Government of Chhattisgarh seeks to
                create an IT environment in the state wherein investments in IT
                are not only encouraged but actively facilitated. We aim to
                achieve quality and excellence in state government services to
                citizens, state transactions with citizens and businesses, and
                internal state governmental operations/functions through the
                strategic deployment of information technologies. The State of
                Chhattisgarh recognizes the importance of Information and
                Communication Technology as a key enabler in its economic
                development and improving the quality of life. With a view to
                make Chhattisgarh an IT enabled state progressively, CHi PS has
                come up with the “Electronics, IT and ITeS Investment Policy of
                Chhattisgarh 2014 – 2019”.
              </p>
            </div>
        
            <img src={chipsabout} alt="" className='lg:w-1/3 w-1/2 p-2   shadow-lg shadow-zinc-400 rounded-xl'  style={{position:'relative',height:'400px', backgroundColor:'whitesmoke', top:'150px'}} />
          </div>
          <div className="w-[80%] justify-between lg:flex mx-auto  mt-20 p-2">
            <div className=" h-1/2 my-auto   text-sm lg:text-lg">
              <h1 className="font-bold  text-xl lg:text-3xl text-center text-red-500">
                {" "}
                Background
              </h1>

              <p className="m-3 " style={{textAlign:"justify"}}>
                The objective of <b>Chhattisgarh Center of Geoinformatics (CGCOG)</b> is insertion of GIS/ Geospatial technology in 
                Chhattisgarh State for effective planning, monitoring, management of natural resources, efforts optimization, 
                GIS capacity building among Departments and Development of Geo-Ecosystem.
                 It will help to optimize collection, collation, compilation and centralization of spatial data. This project will facilitate
                 Spatial Data Infrastructure (SDI) of Chhattisgarh State.
=======
    
  
    <section>
        <section className='w-full p-2 {styles.nunitoFont} mt-10 overflow-x-hidden' >
            <div className='w-[80%] justify-between lg:flex mx-auto rounded-xl hover:shadow-[#b49e9c] shadow-lg p-5 '>
                <div className=' p-5  h-full my-auto  text-sm lg:text-lg'>
                <h1 className='font-bold lg:text-3xl text-center  text-xl text-red-500'> About</h1>
                <p className='mt-2 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni iusto enim omnis maxime pariatur nisi vel cum nulla dolores asperiores!</p>
                </div> 
                      
                    <img src="https://cms.patrika.com/wp-content/uploads/2019/10/22/chips.jpg" alt="" className='lg:w-1/3 w-1/2 p-2   shadow-lg shadow-zinc-400 rounded-xl' />
                     



            </div>
            <div className='w-[80%] justify-between lg:flex mx-auto  mt-20 mb-20 p-2'>
                <div className=' h-1/2 my-auto   text-sm lg:text-lg'>
                <h1 className='font-bold  text-xl lg:text-3xl text-center text-red-500'> Background</h1>
             
                <p className='m-3 '>
                Need for a federated approach for creation, sharing and management of map data has long been felt in the state. There are multiple departments, independently creating spatial data. It has been found that following issues needs to be addressed:
>>>>>>> 04809ddb7e895704324ec182fbf06a89bd58b7e5
                <br />
                <br />
                <ul className="list-disc ">
                  <li>
                    {" "}
                <b>The Major Components of CGCOG are-</b>
                  </li>
                  <li>
                    {" "}
                   Geo Spatial Data Management.
                  </li>
                  <li>
                    Networked Geospatial Database.
                  </li>
                  <li>Web GIS.</li>
                  <li>
                  Near Real Time Information.
                  </li>
                  <li>
                    Geo Spatial Ecosystem.
                  </li>
                  <li>
                  Spatial Data Infrastructure (SDI)
                  </li>
                  <li>
                  Spatial Data Policy (SDP)
                  </li>
                </ul>
              </p>
            </div>
            <img
              src={about}
              alt=""
              className=" lg:w-1/3 w-1/2 rounded-xl   shadow-lg shadow-zinc-400"
            />
          </div>
        </section>
      </section>
    </>
  );
}

export default About;
