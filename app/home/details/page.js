import React from 'react'
import Link from 'next/link';
import { IoArrowBackCircleOutline } from "react-icons/io5";

import { SiWindows95 } from "react-icons/si";
const page = () => {
  return (
    <div className=''>
    <div className='sticky top-0 bg-gray-950 text-slate-50 text-xl flex flex-row px-3 h-10 items-center gap-10'>
   <Link href='/home'> <IoArrowBackCircleOutline className='text-3xl hover:text-red-600 duration-300'/> </Link> <span className='font-light'>HP Victus 16</span>
    </div>
    <div className='flex px-4 flex-col '>
    <img className="h-96 object-cover lg:object-scale-down lg:h-px-150 md:h-px-50" src="https://www.reliancedigital.in/medias/HP-Victus-16-d0309TX-493837856-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODU4ODA5fGltYWdlL2pwZWd8aW1hZ2VzL2g0OC9oOWEvMTAwMTE4NDYzMTE5NjYuanBnfGRkM2M5YTU0ZWVlNWQ2OGIzMTUwMTdhY2Q0N2JlOTU3ZTY5ZmQwZDc1YmFkY2EyZDIwMmM1MDVhYzI0YjRjZDg"/>
    <span className='text-3xl flex '>HP VICTUS 16<SiWindows95 className='text-sm text-red-600' /></span><span className='text-xl'> ₹ 56,999 /-</span>
    </div>
    <div className='grid justify-start px-4 items-center mt-3 border p-4'>
    <span>SPECIFICATIONS</span>
    <span className='text-gray-600'>Ryzen 3750H Octa Core CPU</span>
    <span className='text-gray-600'>8 GB DDR4 RAM</span>
    <span className='text-gray-600'>1 TB NVME SSD </span>
    <span className='text-gray-600'>NVIDIA GTX-1660Ti GPU with 6 GB Virtual RAM </span>
    </div>
    <div className='p-4 '>
        <span>Condition : </span><span className='text-green-600'> EXCELLENT </span>
    </div>
    <div className='p-4 right-0 bottom-0 absolute'>
        <button className='bg-gray-950 text-slate-50 px-3 py-2 rounded-sm hover:bg-red-600 duration-200'>Buy Now </button>
    </div>
    </div>
  )
}

export default page