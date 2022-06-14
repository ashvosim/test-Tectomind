import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import TodoApp from "./pages/Todo/TodoApp";
import ProgressBar from "./pages/Progress/Progress";
import MainLayout from "./layouts/MainLayout/MainLayout";
const root = ReactDOM.createRoot(document.getElementById("root"));

const layoutRoute = (route) => <MainLayout>{route}</MainLayout>;

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={layoutRoute(<App />)} />
      <Route path="/todolist" element={layoutRoute(<TodoApp />)} />
      <Route path="/progressbar" element={layoutRoute(<ProgressBar />)} />
      <Route path="/mindmaps" element={layoutRoute(<h1>Soon</h1>)} />
    </Routes>
  </BrowserRouter>
);
