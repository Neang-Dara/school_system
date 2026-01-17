import Announcements from '@/app/components/Announcements'
import BigCalendar from '@/app/components/BigCalendar'
import Performance from '@/app/components/Performance'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleTeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
        {/* left */}
        <div className='w-full xl:w-2/3'>
            {/* Top */}
            <div className='flex flex-col lg:flex-row gap-4'>
                {/* User info card */}
                <div className='bg-slate-400 py-6 px-4 rounded-md flex-1 flex gap-4'>
                    <div className='w-1/3'>
                        <Image src="/photos/image.png" alt="" width={144} height={144} className="w-36 h-36 rounded-full object-cover"/>
                    </div>
                    <div className='w-2/3 flex flex-col justify-between gap-4'>
                        <h1 className='text-xl font-semibold'>Neang Dara</h1>
                        <p className='texit-sm text-gray-500'>Lorem lorem lorem lorem</p>
                        <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
                            <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 items-center gap-2'>
                                <Image src="/icons/blood.png" alt="" width={14} height={14}/>
                                <span>A+</span>
                            </div>
                            <div>
                                <Image src="/icons/calendar.png" alt="" width={14} height={14}/>
                                <span>January 2025</span>
                            </div>
                            <div>
                                <Image src="/icons/email.png" alt="" width={14} height={14}/>
                                <span>user@gmail.com</span>
                            </div>
                            <div>
                                <Image src="/icons/phone.png" alt="" width={14} height={14}/>
                                <span>096 664 9118</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* small card */}
                <div className='flex-1 flex gap-4 justify-between flex-wrap'>
                    {/* card */}
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                        <Image src="/icons/email.png" alt="" width={24} height={24} className='w-6 h-6'/>
                        <div className=''>
                            <h1 className='text-xl font-semibold'>90%</h1>
                            <span className='text-sm text-gray-400'>Attendance</span>
                        </div>
                    </div>
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                        <Image src="/icons/email.png" alt="" width={24} height={24} className='w-6 h-6'/>
                        <div className=''>
                            <h1 className='text-xl font-semibold'>2</h1>
                            <span className='text-sm text-gray-400'>Branches</span>
                        </div>
                    </div>
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                        <Image src="/icons/email.png" alt="" width={24} height={24} className='w-6 h-6'/>
                        <div className=''>
                            <h1 className='text-xl font-semibold'>6</h1>
                            <span className='text-sm text-gray-400'>Lessons</span>
                        </div>
                    </div>
                    <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                        <Image src="/icons/email.png" alt="" width={24} height={24} className='w-6 h-6'/>
                        <div className=''>
                            <h1 className='text-xl font-semibold'>6</h1>
                            <span className='text-sm text-gray-400'>classes</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* bottom */}
            <div className='mt-4 bg-white rounded-md p-4 h-[1000px] '>
                <h1>Teacher&apos;s Schedule</h1>
                <BigCalendar/>
            </div>
        </div>
        {/* right */}
        <div className='w-full xl:w-1/3 flex flex-col gap-4'>
            <div className='bg-white p-4 rounded-md'>
                <h1 className='text-xl font-semibold'>Shortcuts</h1>
                <div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-500'>
                    <Link className="p-3 rounded-md bg-sky-500" href="">Teacher&apos;s Classes</Link>
                    <Link className="p-3 rounded-md bg-sky-500" href="">Teacher&apos;s Student</Link>
                    <Link className="p-3 rounded-md bg-sky-500" href="">Teacher&apos;s Lessons</Link>
                    <Link className="p-3 rounded-md bg-sky-500" href="">Teacher&apos;s Exams</Link>
                    <Link className="p-3 rounded-md bg-sky-500" href="">Teacher&apos;s Assignment</Link>
                </div>
            </div>
            <Performance/>
            <Announcements/>
        </div>
    </div>
  )
}

export default SingleTeacherPage