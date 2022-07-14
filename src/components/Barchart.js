import React from "react";
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from "recharts";

const App = () => {
  // Sample data
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

  return (
    <BarChart width={1000} height={500} data={humiddata}>
      <Bar dataKey="humid" fill="#7A86B6" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
    </BarChart>
  );
};

export default App;
