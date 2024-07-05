import React from 'react';
import { FaAtlas } from "react-icons/fa";
import { IoMap } from "react-icons/io5";
import { FaMapPin } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import { GrCircleInformation } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
import { NavLink,Link } from 'react-router-dom';
import logo from "../../images/logo.ico"

function Navbar() {
  return (
    <nav className="p-4 min-h-4 pb-2 flex justify-between items-center px-1 text-sm font-semibold bg-gray-300">
      <a href='#'> 
        <div className="flex items-center ">
        <div className="h-10 w-32 ml-3 mb-3 pl-2 bg-cover bg-no-repeat bg-center navlogo" alt="CG-Govt-Logo" >
        <img src={logo} alt="" className='w-[80%] ' />
        </div>
<<<<<<< HEAD
          <div className="flex flex-col space-y-1  ml-16">
            <span className="text-2xl font-semibold  mr-10 mb-0 text-black  "> Chhattisgarh Center of Geo-Information (CGCOG)</span>
            {/* <span className="  text-sm mt-0 text-[#00000]"></span> */}
=======
          <div className="flex flex-col space-y-1  ml-8">
            <span className="text-2xl font-semibold  mr-2 mb-0 text-black  "> Chhattisgarh Center of Geo-Information (CGCOG)</span>
            {/* <span className="  text-sm mt-0 text-[#FF00FF]"></span> */}
>>>>>>> 04809ddb7e895704324ec182fbf06a89bd58b7e5
          </div>
        </div>
        </a>
      <ul className=" font-semibold flex  space-x-5 mr-3">
        <li>
<<<<<<< HEAD
         <NavLink to="/" className="flex items-center hover:text-[#00000]" > <IoHome className="mr-2 text-lg" />Home</NavLink>
         {/* <a href="#" className="flex items-center hover:text-[#00000]" >
=======
         <NavLink to="/" className="flex items-center hover:text-gray-500" > <IoHome className="mr-2 text-lg" />Home</NavLink>
         {/* <a href="#" className="flex items-center hover:text-[#FF00FF]" >
>>>>>>> 04809ddb7e895704324ec182fbf06a89bd58b7e5
            <AiFillHome className="mr-2 text-lg" />
            Home
          </a> */}
        </li>
        <li>
<<<<<<< HEAD
            <NavLink to="/about-us" className="flex items-center hover:text-[#00000]" >
=======
            <NavLink to="/about-us" className="flex items-center hover:text-gray-500" >
>>>>>>> 04809ddb7e895704324ec182fbf06a89bd58b7e5
            <GrCircleInformation className="mr-2 text-lg" />
            About Us

            </NavLink>
          {/* <a href="#" className="flex items-center hover:text-[#00000]">
            <IoIosInformationCircle className="mr-2 text-lg" />
            About Us
          </a> */}
        </li>
        <li>
<<<<<<< HEAD
            <NavLink className="flex items-center hover:text-[#00000]" to="/departments" >
=======
            <NavLink className="flex items-center hover:text-gray-500" to="/departments" >
>>>>>>> 04809ddb7e895704324ec182fbf06a89bd58b7e5
              <FaBuilding className="mr-2 text-lg" color='red-900' />
            Departments</NavLink>
          {/* <a href="#" className="flex items-center hover:text-[#00000]">
            <PiNotePencilFill  className="mr-2 text-lg" />
            Projects
          </a> */}
        </li>
        <li>
<<<<<<< HEAD
            <NavLink  className="flex items-center hover:text-[#00000]" to="/data" >
=======
            <NavLink  className="flex items-center hover:text-gray-500" to="/data" >
>>>>>>> 04809ddb7e895704324ec182fbf06a89bd58b7e5
            <AiFillDatabase className="mr-2 text-lg" />
            Data

            </NavLink>
<<<<<<< HEAD
          {/* <a href="#" className="flex items-center hover:text-[#00000]">
            <FaDatabase className="mr-2 text-lg" />
=======
          {/* <a href="#" className="flex items-center hover:text-[#FF00FF]">
            <FaDatalg className="mr-2 text-lg" />
>>>>>>> 04809ddb7e895704324ec182fbf06a89bd58b7e5
            Data
          </a> */}
        </li>
        <li>
<<<<<<< HEAD
          <NavLink className="flex items-center hover:text-[#00000]" to="/stategis">
=======
          <NavLink className="flex items-center hover:text-gray-500" to="/stategis">
>>>>>>> 04809ddb7e895704324ec182fbf06a89bd58b7e5
          <IoMap  className="mr-2 text-lg" />
            CG GIS
          </NavLink>

          {/* <a href="#" className="flex items-center hover:text-[#00000]">
            <IoLocationSharp className="mr-2 text-lg" />
            CG GIS
          </a> */}
        </li>
        <li>
<<<<<<< HEAD
            <NavLink className="flex items-center hover:text-[#00000]" to="/districtgis" >
=======
            <NavLink className="flex items-center hover:text-gray-500" to="/districtgis" >
>>>>>>> 04809ddb7e895704324ec182fbf06a89bd58b7e5
            <FaMapPin  className="mr-2 text-lg" />
            District GIS
            </NavLink>
          {/* <a href="#" className="flex items-center hover:text-[#00000]">
            <IoLocationSharp className="mr-2 text-lg" />
            District GIS
          </a> */}
        </li>
        <li>
<<<<<<< HEAD
            <NavLink className="flex items-center hover:text-[#00000]" to="/cgatlas" >
=======
            <NavLink className="flex items-center hover:text-gray-500" to="/cgatlas" >
>>>>>>> 04809ddb7e895704324ec182fbf06a89bd58b7e5
            <FaAtlas className="mr-2 text-lg" />
            CG Atlas

            </NavLink>
          {/* <a href="#" className="flex items-center hover:text-[#00000]">
            <MdContactPhone className="mr-2 text-lg" />
            Contact Us
          </a> */}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
