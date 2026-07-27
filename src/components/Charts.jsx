import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", sales: 4200 },
  { month: "Feb", sales: 3800 },
  { month: "Mar", sales: 5200 },
  { month: "Apr", sales: 4700 },
  { month: "May", sales: 6500 },
  { month: "Jun", sales: 6100 },
  { month: "Jul", sales: 7200 },
];

function Charts() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid stroke="#f1f1f1" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="sales"
          stroke="#ff7a1a"
          strokeWidth={3}
          fill="#ffe3cf"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default Charts;