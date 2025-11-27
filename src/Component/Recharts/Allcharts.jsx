import React from "react";
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Allcharts = ({ ratings }) => {
  console.log("Received Ratings →", ratings);

  return (
    <div className="w-full" style={{ height: "360px" }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={ratings}
          margin={{ top: 10, right: 20, bottom: 10, left: 10 }}
        >
          <CartesianGrid stroke="#f8f3d4" horizontal={true} vertical={false} />

          {/* X axis  */}
          <XAxis
            type="number"
            tick={{ fill: "#555", fontSize: 12 }}
            axisLine={false}
          />

          {/* Y axis  */}
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fill: "#4a4a4a", fontSize: 13, fontWeight: 600 }}
            axisLine={false}
          />

          <Tooltip
            contentStyle={{
              background: "white",
              borderRadius: "10px",
              border: "1px solid #eee",
            }}
          />

          <Legend />

          {/* Bar Chart */}
          <Bar
            dataKey="count"
            barSize={20}
            radius={[10, 10, 10, 10]}
            fill="#FFD54F"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Allcharts;
