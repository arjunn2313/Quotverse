 
import React from 'react'
 

export default function LeftBar() {
  return (
    <div className='hidden sm:block sm:col-span-2'> 
        <div className='sm:p-5 border-b'>
            <h5 className='sm:text-center sm:text-md font-roboto font-bold'>Quotverse</h5>
        </div>
        <div className='w-4/5 mx-auto pt-12 flex flex-col gap-6'>
            <img src='assets\image 1.png' alt='avatar' className="w-16 h-16"/>
            <div>
                <h3 className='text-xl'>Jhon Doe</h3>
                <p className='text-sm'>jhondoe</p>
            </div>
            <div>
                <h6 className='text-sm lg:text-nowrap'>UI Developer | Let's redesign the world</h6>
            </div>
            <div>
                <span className='text-gray-600'>2957 likes</span>
            </div>
        </div>
    </div>
  )
}
