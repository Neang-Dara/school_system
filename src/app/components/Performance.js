"use client";
import React from "react";
import Image from "next/image";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

const data = [
  { name: "Completed", value: 92, fill: "#C3EBFA" },
  { name: "Remaining", value: 8, fill: "#FAE27C" },
];

const PerformanceChart = () => {
  return (
    <div className="bg-white p-4 rounded-md h-80 relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Performance</h1>
        <Image src="/icons/more.png" alt="more" width={16} height={16} />
      </div>

      {/* Chart Container */}
      <div className="relative w-full h-[230px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              startAngle={180}
              endAngle={0}
              cx="50%"
              cy="75%"
              innerRadius={65}
              outerRadius={135}
              isAnimationActive={true}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Center text */}
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 text-center pointer-events-none">
          <h1 className="text-xl font-bold">9.2</h1>
          <p className="text-[10px] text-gray-400">of 10 max LTS</p>
          <h2 className="font-medium text-m mt-8">
            1st Semester - 2nd Semester
          </h2>
        </div>

      </div>
    </div>
  );
};

export default PerformanceChart;
