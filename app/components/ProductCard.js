import Link from 'next/link';
import React from 'react'
import { SiWindows95 } from "react-icons/si";
const ProductCard = () => {
  return (
    <div className=' text-gray-700 flex flex-col items-start   w-50 border rounded-md p-4'>
       <div>
        <img className="w-96 object-cover" src="https://www.reliancedigital.in/medias/HP-Victus-16-d0309TX-493837856-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxODU4ODA5fGltYWdlL2pwZWd8aW1hZ2VzL2g0OC9oOWEvMTAwMTE4NDYzMTE5NjYuanBnfGRkM2M5YTU0ZWVlNWQ2OGIzMTUwMTdhY2Q0N2JlOTU3ZTY5ZmQwZDc1YmFkY2EyZDIwMmM1MDVhYzI0YjRjZDg"/>
        </div> 
        <div className='flex flex-row gap-2 justify-evenly  ml-4 font-bold'>
        <span>< SiWindows95 className='text-xl text-red-900' /></span>    <span className='text-md'>HP Victus 16 </span>
        </div>
        <div className='text-xs ml-11 '>
            <span className='text-gray-500'>Condition : </span><span className='text-green-600'>FAIR</span>
        </div>
        <div className='text-sm mt-2 ml-11'>
            <button className='border border-gray-950 p-2 text-gray-950 rounded-sm hover:bg-gray-950 hover:text-slate-50 duration-300'><Link href='/home/details'>View Details</Link></button>
        </div>
    </div>
  )
}

export default ProductCard