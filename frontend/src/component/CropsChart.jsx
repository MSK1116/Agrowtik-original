import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import axios from "axios";

const CropsPriceChart = () => {
  const [sortGoods, setSortGoods] = useState({});
  const [loading, setLoading] = useState(true);

  const getPost = async () => {
    try {
      const res = await axios.get("https://agrowtik-back.vercel.app/goods/getPost");

      const sortGoods = res.data.reduce((acc, post) => {
        const { goods, bid } = post;

        if (!acc[goods]) {
          acc[goods] = [];
        }
        // Normalize bid into an array
        if (Array.isArray(bid)) {
          acc[goods].push(...bid); // Spread the array if bid contains multiple numbers
        } else if (typeof bid === "number") {
          acc[goods].push(bid); // Add single number to the array
        }

        return acc;
      }, {});

      setSortGoods(sortGoods);
      console.log(sortGoods); // Prints the sorted goods and bids
    } catch (error) {
      console.error("Error fetching data: ", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  // Prepare chart data
  const chartData = Object.entries(sortGoods).map(([goods, bids]) => {
    return bids.map((bid, index) => ({
      goods, // Name of the goods
      bidAmount: bid.amount || bid, // Support for both object bids and numeric bids
      index, // Use the index as X-axis
    }));
  });

  // Flatten chartData for LineChart's "data" prop
  const flatChartData = chartData.flat();
  console.log(flatChartData);

  return (
    <div className="flex justify-center items-center p-6">
      <div className="bg-white w-full shadow-lg rounded-lg p-4 hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105">
        <h2 className="text-xl font-semibold text-center mb-4">Crops Price Chart</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <LineChart width={900} height={400} data={flatChartData}>
            <XAxis type="number" dataKey="index" label={{ value: "Bid Index", position: "insideBottom", offset: 0 }} />
            <YAxis domain={[0, Math.max(...flatChartData.map((item) => item.bidAmount)) + 10]} label={{ value: "Bid Amount", angle: -90, position: "insideLeft" }} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend verticalAlign="top" />
            {Object.keys(sortGoods).map((goods, index) => (
              <Line
                key={goods}
                type="monotone"
                dataKey="bidAmount"
                data={flatChartData.filter((item) => item.goods === goods)}
                name={goods}
                stroke={`#${Math.floor(Math.random() * 16777215).toString(16)}`} // Random color
                strokeWidth={2}
              />
            ))}
          </LineChart>
        )}
      </div>
    </div>
  );
};

export default CropsPriceChart;
