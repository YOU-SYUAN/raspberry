import React, { useEffect } from "react";
//api: http://192.168.113:8080/api/getLast24Hours

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
var apiData;

apiData = [
  {
    hour: 0,
    temp: 40,
    humid: 40,
  },
  {
    hour: 1,
    temp: 35,
    humid: 35,
  },
  {
    hour: 2,
    temp: 34,
    humid: 50,
  },
  {
    hour: 3,
    temp: 38,
    humid: 70,
  },
  {
    hour: 4,
    temp: 30,
    humid: 20,
  },
  {
    hour: 5,
    temp: 36,
    humid: 30,
  },
  {
    hour: 6,
    temp: 25,
    humid: 45,
  },
  {
    hour: 7,
    temp: 27,
    humid: 30,
  },
  {
    hour: 8,
    temp: 29,
    humid: 60,
  },
  {
    hour: 9,
    temp: 35,
    humid: 80,
  },
  {
    hour: 10,
    temp: 33,
    humid: 40,
  },
  {
    hour: 11,
    temp: 32,
    humid: 20,
  },
  {
    hour: 12,
    temp: 40,
    humid: 40,
  },
  {
    hour: 13,
    temp: 26,
    humid: 20,
  },
  {
    hour: 14,
    temp: 35,
    humid: 35,
  },
  {
    hour: 15,
    temp: 27,
    humid: 40,
  },
  {
    hour: 16,
    temp: 28,
    humid: 100,
  },
  {
    hour: 17,
    temp: 15,
    humid: 55,
  },
  {
    hour: 18,
    temp: 18,
    humid: 80,
  },
  {
    hour: 19,
    temp: 25,
    humid: 25,
  },
  {
    hour: 20,
    temp: 29,
    humid: 30,
  },
  {
    hour: 21,
    temp: 32,
    humid: 20,
  },
  {
    hour: 22,
    temp: 36,
    humid: 60,
  },
  {
    hour: 23,
    temp: 27,
    humid: 10,
  },
];

export default function App() {
  const [data, setData] = React.useState([]);
  //data.push({ hour: "23", temp: 28, humid: 30 });
  //連接api 抓資料
  function interval() {
    var dataUrl = "/api/getLast24Hours";
    fetch(dataUrl, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  useEffect(() => {
    interval();
    setInterval(() => {
      interval();
    }, 3600000);
  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={800}
        height={400}
        data={data}
        margin={{
          top: 100,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="hour" />
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
