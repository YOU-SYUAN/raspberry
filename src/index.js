import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import Bar from "./components/Bar";
import Barchart from "./components/Barchart";
import Card from "./components/Card";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chart from "./components/Chart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Bar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Chart" element={<Chart />} />
        <Route path="/Barchart" element={<Barchart />} />
        <Route path="*" element="404 not found" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
