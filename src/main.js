/*
 * @Author: jiayinchu
 * @Date: 2024-04-28 20:42:33
 * @LastEditors: jiayinchu
 * @LastEditTime: 2024-04-28 20:58:14
 * @Description: file content
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
