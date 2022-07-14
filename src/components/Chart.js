import React from "react";
import {
  LineChart,
  Bar,
  BarChart,
  ComposedChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "0",
    temp: 40,
    humid: 40,
  },
  {
    name: "1",
    temp: 35,
    humid: 35,
  },
  {
    name: "2",
    temp: 34,
    humid: 50,
  },
  {
    name: "3",
    temp: 38,
    humid: 70,
  },
  {
    name: "4",
    temp: 30,
    humid: 20,
  },
  {
    name: "5",
    temp: 36,
    humid: 30,
  },
  {
    name: "6",
    temp: 25,
    humid: 45,
  },
  {
    name: "7",
    temp: 27,
    humid: 30,
  },
  {
    name: "8",
    temp: 29,
    humid: 60,
  },
  {
    name: "9",
    temp: 35,
    humid: 80,
  },
  {
    name: "10",
    temp: 33,
    humid: 40,
  },
  {
    name: "11",
    temp: 32,
    humid: 20,
  },
  {
    name: "12",
    temp: 40,
    humid: 40,
  },
  {
    name: "13",
    temp: 26,
    humid: 20,
  },
  {
    name: "14",
    temp: 35,
    humid: 35,
  },
  {
    name: "15",
    temp: 27,
    humid: 40,
  },
  {
    name: "16",
    temp: 28,
    humid: 100,
  },
  {
    name: "17",
    temp: 15,
    humid: 55,
  },
  {
    name: "18",
    temp: 18,
    humid: 80,
  },
  {
    name: "19",
    temp: 25,
    humid: 25,
  },
  {
    name: "20",
    temp: 29,
    humid: 30,
  },
  {
    name: "21",
    temp: 32,
    humid: 20,
  },
  {
    name: "22",
    temp: 36,
    humid: 60,
  },
  {
    name: "23",
    temp: 27,
    humid: 80,
  },
];

export default function App() {
  return (
    // <div style={{ width: "1000px", height: "500px" }}>
    //   <BarChart width={1000} height={500} data={humiddata}>
    //     <Bar dataKey="humid" fill="#7A86B6" />
    //     <CartesianGrid stroke="#ccc" />
    //     <XAxis dataKey="name" />
    //     <YAxis />
    //   </BarChart>
    //   <ResponsiveContainer width="100%" height="100%">
    //     <LineChart
    //       width={500}
    //       height={300}
    //       data={data}
    //       margin={{
    //         top: 20,
    //         right: 20,
    //         left: 20,
    //         bottom: 20,
    //       }}
    //     >
    //       <CartesianGrid strokeDasharray="3 3" />
    //       <XAxis dataKey="name" />
    //       <YAxis />
    //       <Tooltip />
    //       <Legend />
    //       <Line type="monotone" dataKey="temp" stroke="#82ca9d" strokeWidth={3} />
    //       <Bar type="monotone" dataKey="l2" stroke="#82ca9d" strokeWidth={3} />
    //     </LineChart>
    //   </ResponsiveContainer>
    // </div>
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="humid" />
        <YAxis dataKey="temp" />
        <Tooltip />
        <Legend />
        <Bar type="monotone" dataKey="humid" strokeWidth={3} fill="#7A86B6" />
        <Line type="monotone" dataKey="temp" stroke="#82ca9d" strokeWidth={3} />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
