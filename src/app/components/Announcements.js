import React from 'react'

const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md shadow-xl'>
        <div className='flex items-center justify-between'>
            <h1 className='text-xl font-semibold'>Announcements</h1>
            <span className='text-sm text-gray-400'>View all</span>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
            <div className='bg-[#EDF9FD] rounded-md p-4 '>
                <div className='flex items-center justify-between'>
                    <h2 className='font-medium'>There will be a brief staff meeting</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025-10-12</span>
                </div>
            </div>
            <div className='bg-[#F1F0FF] rounded-md p-4 '>
                <div className='flex items-center justify-between'>
                    <h2 className='font-medium'>Our system will be unavailable</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025-10-19</span>
                </div>
            </div>
            <div className='bg-[#FEFCEB] rounded-md p-4 '>
                <div className='flex items-center justify-between'>
                    <h2 className='font-medium'>Join us for exciting workshops</h2>
                    <span className='text-xs text-gray-400 bg-white rounded-md px-1 py-1'>2025-10-28</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Announcements