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
    <nav className="p-4 min-h-4 pb-1 flex justify-between items-center h-18 px-4 text-sm font-semibold bg-gray-300">
      <a href='#'> 
        <div className="flex items-center ">
        <div className="h-14 w-32 mr-2 mb-2 bg-cover bg-no-repeat bg-center navlogo" alt="CG-Govt-Logo" >
        <img src={logo} alt="" className='w-[90%] ' />
        </div>
          <div className="flex flex-col space-y-1  ml-16">
            <span className="text-2xl font-semibold  mr-10 mb-0 text-black  "> Chhattisgarh Center of Geo-Information (CGCOG)</span>
            {/* <span className="  text-sm mt-0 text-[#00000]"></span> */}
          </div>
        </div>
        </a>
      <ul className=" font-semibold flex space-x-4">
        <li>
         <NavLink to="/" className="flex items-center hover:text-[#00000]" > <IoHome className="mr-2 text-lg" />Home</NavLink>
         {/* <a href="#" className="flex items-center hover:text-[#00000]" >
            <AiFillHome className="mr-2 text-lg" />
            Home
          </a> */}
        </li>
        <li>
            <NavLink to="/about-us" className="flex items-center hover:text-[#00000]" >
            <GrCircleInformation className="mr-2 text-lg" />
            About Us

            </NavLink>
          {/* <a href="#" className="flex items-center hover:text-[#00000]">
            <IoIosInformationCircle className="mr-2 text-lg" />
            About Us
          </a> */}
        </li>
        <li>
            <NavLink className="flex items-center hover:text-[#00000]" to="/departments" >
              <FaBuilding className="mr-2 text-lg" color='red-900' />
            Departments</NavLink>
          {/* <a href="#" className="flex items-center hover:text-[#00000]">
            <PiNotePencilFill  className="mr-2 text-lg" />
            Projects
          </a> */}
        </li>
        <li>
            <NavLink  className="flex items-center hover:text-[#00000]" to="/data" >
            <AiFillDatabase className="mr-2 text-lg" />
            Data

            </NavLink>
          {/* <a href="#" className="flex items-center hover:text-[#00000]">
            <FaDatabase className="mr-2 text-lg" />
            Data
          </a> */}
        </li>
        <li>
          <NavLink className="flex items-center hover:text-[#00000]" to="/stategis">
          <IoMap  className="mr-2 text-lg" />
            CG GIS
          </NavLink>

          {/* <a href="#" className="flex items-center hover:text-[#00000]">
            <IoLocationSharp className="mr-2 text-lg" />
            CG GIS
          </a> */}
        </li>
        <li>
            <NavLink className="flex items-center hover:text-[#00000]" to="/districtgis" >
            <FaMapPin  className="mr-2 text-lg" />
            District GIS
            </NavLink>
          {/* <a href="#" className="flex items-center hover:text-[#00000]">
            <IoLocationSharp className="mr-2 text-lg" />
            District GIS
          </a> */}
        </li>
        <li>
            <NavLink className="flex items-center hover:text-[#00000]" to="/cgatlas" >
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