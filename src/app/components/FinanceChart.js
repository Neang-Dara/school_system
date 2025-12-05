"use client"
import Image from 'next/image'
import React from 'react'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    income:4000,
    expanse:2400,
  },
  {
    name: 'Feb',
    income: 3000,
    expanse: 1398,
  },
  {
    name: 'Mar',
    income: 2000,
    expanse:9800,
  },
  {
    name: 'Apr',
    income: 2780,
    expanse: 3908,
  },
  {
    name: 'May',
    income: 1890,
    expanse: 4800,
  },
  {
    name: 'jun',
    income: 2390,
    expanse: 3800,
  },
  {
    name: 'jul',
    income: 3490,
    expanse: 4300,
  },
  {
    name: 'Aug',
    income: 4000,
    expanse: 2400,
  },
  {
    name: 'Sep',
    income: 4000,
    expanse: 2400,
  },
  {
    name: 'Oct',
    income: 4000,
    expanse: 2400,
  },
  {
    name: 'Nov',
    income: 4000,
    expanse: 2400,
  },
  {
    name: 'Dec',
    income: 4000,
    expanse: 2400,
  },
];
const FinanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full mt-4 shadow-xl">
        {/* Title */}
        <div className="flex justify-between items-center">
            <h1 className="text-lg font-semibold">Finace</h1>
            <Image src="/icons/more.png" alt="" width={20} height={ 20}/>
        </div>
        <ResponsiveContainer width="100%" height="90%">
            <LineChart
                data={data}
                margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" stroke="#ddd"/>
                <XAxis dataKey="name" tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
                <YAxis tick={{fill:"#d1d5db"}} tickLine={false} tickMargin={10}/>
                <Tooltip />
                <Legend align='center' verticalAlign='top' wrapperStyle={{paddingTop:"10px",paddingBottom:"30px"}} />
                <Line type="monotone" dataKey="income" stroke="#CFCEFF" strokeWidth={5} legendType='circle'/>
                <Line type="monotone" dataKey="expanse" stroke="#C3EBFA" strokeWidth={5} legendType='circle'/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}

export default FinanceChart