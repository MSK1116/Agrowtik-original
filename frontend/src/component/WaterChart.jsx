import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

// Sample data for the chart
const data = [
  { demand: 10, nasa: 75, sentinel: 0.3, sport: 2.5, rainfall: 75 },
  { demand: 50, nasa: 34, sentinel: 0.4, sport: -2, rainfall: 55 },
  { demand: 100, nasa: 11, sentinel: 0.6, sport: 1.45, rainfall: 30 },
  { demand: 150, nasa: 50, sentinel: 0.23, sport: 1.9, rainfall: 23 },
  { demand: 200, nasa: 4, sentinel: 0.18, sport: -1.2, rainfall: 5 },
  { demand: 250, nasa: 26, sentinel: 0.28, sport: 0.4, rainfall: 15 },
  { demand: 300, nasa: 0, sentinel: 0.325, sport: -0.9, rainfall: 0 },
];

const WaterChart = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <div className="bg-white  w-full shadow-lg rounded-lg p-4 hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105">
        <h2 className="text-xl font-semibold text-center mb-4">Water-Related Data</h2>
        <LineChart width={900} height={400} data={data}>
          <XAxis dataKey="demand" label={{ value: "Demand (Rate/Kg)", position: "insideBottomRight", offset: -10 }} />
          <YAxis domain={[0, 340]} label={{ value: "Value", angle: -90, position: "insideLeft" }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line type="monotone" dataKey="nasa" stroke="#8884d8" name="NASA Imerge" strokeWidth={2} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sentinel" stroke="#82ca9d" name="Sentinel" strokeWidth={2} />
          <Line type="monotone" dataKey="sport" stroke="#ffc658" name="SPoRT" strokeWidth={2} />
          <Line type="monotone" dataKey="rainfall" stroke="#ff7300" name="Rainfall" strokeWidth={2} />
        </LineChart>
      </div>
    </div>
  );
};

export default WaterChart;
