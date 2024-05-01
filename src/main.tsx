/*
 * @Author: jiayinchu
 * @Date: 2024-04-28 20:42:33
 * @LastEditors: jiayinchu
 * @LastEditTime: 2024-05-01 09:52:05
 * @Description: file content
 */
/*
 * @Author: jiayinchu
 * @Date: 2024-04-28 20:42:33
 * @LastEditors: jiayinchu
 * @LastEditTime: 2024-04-28 20:58:14
 * @Description: file content
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";

const appElement = document.getElementById("app");

if (!appElement) {
    console.error("Cannot find element with id 'app'");
} else {
    const root = ReactDOM.createRoot(appElement);
    root.render(
       <App />
    );
}
