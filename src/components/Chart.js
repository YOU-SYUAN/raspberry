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
    l1: 40,
    humid: 40,
    amt: 2400,
  },
  {
    name: "1",
    l1: 35,
    humid: 35,
    amt: 2210,
  },
  {
    name: "2",
    l1: 34,
    humid: 50,
    amt: 2290,
  },
  {
    name: "3",
    l1: 38,
    humid: 70,
    amt: 2000,
  },
  {
    name: "4",
    l1: 30,
    humid: 20,
    amt: 2000,
  },
  {
    name: "5",
    l1: 36,
    humid: 30,
    amt: 2000,
  },
  {
    name: "6",
    l1: 25,
    humid: 45,
    amt: 2000,
  },
  {
    name: "7",
    l1: 27,
    humid: 30,
    amt: 2000,
  },
  {
    name: "8",
    l1: 29,
    humid: 60,
    amt: 2000,
  },
  {
    name: "9",
    l1: 35,
    humid: 80,
    amt: 2000,
  },
  {
    name: "10",
    l1: 33,
    humid: 40,
    amt: 2000,
  },
  {
    name: "11",
    l1: 32,
    humid: 20,
    amt: 2000,
  },
  {
    name: "12",
    l1: 40,
    humid: 40,
    amt: 2000,
  },
  {
    name: "13",
    l1: 26,
    humid: 20,
    amt: 2000,
  },
  {
    name: "14",
    l1: 35,
    humid: 35,
    amt: 2000,
  },
  {
    name: "15",
    l1: 27,
    humid: 40,
    amt: 2000,
  },
  {
    name: "16",
    l1: 28,
    humid: 100,
    amt: 2000,
  },
  {
    name: "17",
    l1: 15,
    humid: 55,
    amt: 2000,
  },
  {
    name: "18",
    l1: 18,
    humid: 80,
    amt: 2000,
  },
  {
    name: "19",
    l1: 25,
    humid: 25,
    amt: 2000,
  },
  {
    name: "20",
    l1: 29,
    humid: 30,
    amt: 2000,
  },
  {
    name: "21",
    l1: 32,
    humid: 20,
    amt: 2000,
  },
  {
    name: "22",
    l1: 36,
    humid: 60,
    amt: 2000,
  },
  {
    name: "23",
    l1: 27,
    humid: 80,
    amt: 2000,
  },
];

const humiddata = [
  { name: "0", humid: 80 },
  { name: "1", humid: 60 },
  { name: "2", humid: 30 },
  { name: "3", humid: 75 },
  { name: "4", humid: 20 },
  { name: "5", humid: 35 },
  { name: "6", humid: 90 },
  { name: "7", humid: 70 },
  { name: "8", humid: 60 },
  { name: "9", humid: 10 },
  { name: "10", humid: 20 },
  { name: "11", humid: 35 },
  { name: "12", humid: 10 },
  { name: "13", humid: 40 },
  { name: "14", humid: 85 },
  { name: "15", humid: 70 },
  { name: "16", humid: 100 },
  { name: "17", humid: 50 },
  { name: "18", humid: 10 },
  { name: "19", humid: 10 },
  { name: "20", humid: 40 },
  { name: "21", humid: 55 },
  { name: "22", humid: 60 },
  { name: "23", humid: 25 },
];

export default function App() {
  return (
    <div style={{ width: "1000px", height: "500px" }}>
      <BarChart width={1000} height={500} data={humiddata}>
        <Bar dataKey="humid" fill="#7A86B6" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
      </BarChart>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="l1" stroke="#82ca9d" strokeWidth={3} />
          <Bar type="monotone" dataKey="l2" stroke="#82ca9d" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
    // <ResponsiveContainer width="100%" height="100%">
    //   <ComposedChart
    //     width={500}
    //     height={400}
    //     data={data}
    //     margin={{
    //       top: 20,
    //       right: 20,
    //       bottom: 20,
    //       left: 20,
    //     }}
    //   >
    //     <CartesianGrid stroke="#f5f5f5" />
    //     <XAxis dataKey="name" />
    //     <YAxis />
    //     <Tooltip />
    //     <Legend />
    //     <Bar type="monotone" dataKey="humid" stroke="#82ca9d" strokeWidth={3} />
    //     <Line type="monotone" dataKey="l1" stroke="#82ca9d" strokeWidth={3} />
    //   </ComposedChart>
    // </ResponsiveContainer>
  );
}
