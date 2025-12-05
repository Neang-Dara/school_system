"use client"

import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Girls',
    count:50,
    fill: '#FAE27C',
  },
  {
    name: 'Boys',
    count: 50,
    fill: '#C3EBFA',
  },
  {
    name: 'Total',
    count: 100,
    fill: 'white',
  },
]
import React from 'react'
import Image from 'next/image';

const CountChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full shadow-xl">
        {/* Title */}
        <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Students</h1>
            <Image src="/icons/more.png" alt="" width={20} height={ 20}/>
        </div>
        {/* Chart */}
        <div className="relative w-full h-[75%]">
        <ResponsiveContainer>
            <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={100} data={data}>
                <RadialBar
                    background
                    dataKey="count"
                />

            </RadialBarChart>
        </ResponsiveContainer>
        <Image src="/icons/malefemale.png" alt="" width={50} height={50} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "/>
        </div>
        {/* bottom */}
        <div className="flex justify-center gap-16">
            <div className="flex flex-col gap-2">
                <div className="w-5 h-5 bg-[#C3EBFA] rounded-full">
                
                </div>
                <h1 className="font-bold">1,234</h1>
                <h2 className="text-xs text-gray-300">Boys(50%)</h2>
            </div>
            <div className="flex flex-col gap-2">
                <div className="w-5 h-5 bg-[#FAE27C] rounded-full">
                
                </div>
                <h1 className="font-bold">1,234</h1>
                <h2 className="text-xs text-gray-300">Girls(50%)</h2>
            </div>
        </div>
    </div>

  )
}

export default CountChart