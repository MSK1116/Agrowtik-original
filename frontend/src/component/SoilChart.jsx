import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const soilData = [
  { demand: 10, usdSMAP: 1, subSurface: 2, subSurfaceAnomaly: 2.5, surface: 2, surfaceAnomaly: 3.9 },
  { demand: 50, usdSMAP: 35, subSurface: 50, subSurfaceAnomaly: 1.5, surface: 12, surfaceAnomaly: 1.75 },
  { demand: 100, usdSMAP: 90, subSurface: 70, subSurfaceAnomaly: -2.2, surface: 23, surfaceAnomaly: -2.5 },
  { demand: 150, usdSMAP: 73, subSurface: 35, subSurfaceAnomaly: -1.8, surface: 21, surfaceAnomaly: 1.4 },
  { demand: 200, usdSMAP: 15, subSurface: 18, subSurfaceAnomaly: -0.25, surface: 9, surfaceAnomaly: -1.2 },
  { demand: 250, usdSMAP: 110, subSurface: 110, subSurfaceAnomaly: 0.65, surface: 25, surfaceAnomaly: 0.8 },
  { demand: 300, usdSMAP: 102, subSurface: 104, subSurfaceAnomaly: 0.1, surface: 22, surfaceAnomaly: 0.1 },
];

const SoilChart = () => {
  return (
    <div className="flex justify-center items-center p-6">
      <div className="bg-white w-full shadow-lg rounded-lg p-4 hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105">
        <h2 className="text-xl font-semibold text-center mb-4">Soil-Related Data</h2>
        <LineChart width={900} height={400} data={soilData}>
          <XAxis dataKey="demand" />
          <YAxis domain={[0, 120]} label={{ value: "Value", angle: -90, position: "insideLeft" }} />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend verticalAlign="top" />
          <Line type="monotone" dataKey="usdSMAP" stroke="#8884d8" name="USD SMAP" strokeWidth={2} activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="subSurface" stroke="#82ca9d" name="Sub Surface Soil Moisture" strokeWidth={2} />
          <Line type="monotone" dataKey="subSurfaceAnomaly" stroke="#ffc658" name="Sub Surface Soil Moisture Anomaly" strokeWidth={2} />
          <Line type="monotone" dataKey="surface" stroke="#ff7300" name="Surface Soil Moisture" strokeWidth={2} />
          <Line type="monotone" dataKey="surfaceAnomaly" stroke="#00c49f" name="Surface Soil Moisture Anomaly" strokeWidth={2} />
        </LineChart>
      </div>
    </div>
  );
};

export default SoilChart;
