'use client'
import React, { useState } from 'react';
import { CiStar } from "react-icons/ci";
import { SiMacos } from "react-icons/si";
import { SiWindows95 } from "react-icons/si";
import { LuChrome } from "react-icons/lu";
import ProductCard from "../components/ProductCard";
import laptopData from './laptop'; // Import the JSON data

const Page = () => {
  const [filteredData, setFilteredData] = useState(laptopData);

  const filterByOS = (os) => {
    if (os === 'all') {
      setFilteredData(laptopData);
    } else {
      const filtered = laptopData.filter((laptop) => laptop.os.toLowerCase() === os.toLowerCase());
      setFilteredData(filtered);
    }
  };

  return (
    <div className='inset-x-2'>
     
      <div className='w-screen bg-gray-800 text-gray-50 h-10 items-center justify-center flex gap-10'> <span>Browse Notebooks</span> </div> 
      <div className='sticky top-0 grid grid-cols-4 items-center h-20 w-screen text-slate-900 border border-gray-200 bg-gray-100 '>
        <div
          className="flex justify-center items-center h-full hover:text-red-600 cursor-pointer"
          onClick={() => filterByOS('all')}
        >
          all
        </div>
        <div
          className="flex justify-center items-center h-full"
          onClick={() => filterByOS('macos')}
        >
          <SiMacos className="text-5xl hover:text-red-600 cursor-pointer" />
        </div>
        <div
          className="flex justify-center items-center h-full"
          onClick={() => filterByOS('windows')}
        >
          <SiWindows95 className="text-3xl hover:text-red-600 cursor-pointer" />
        </div>
        <div
          className="flex justify-center items-center h-full"
          onClick={() => filterByOS('linux')}
        >
          <LuChrome className="text-3xl hover:text-red-600 cursor-pointer" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-2 px-4 lg:grid-cols-4">
        {filteredData.map((laptop, index) => (
          <ProductCard key={index} laptop={laptop} />
        ))}
      </div>
    </div>
  );
};

export default Page;