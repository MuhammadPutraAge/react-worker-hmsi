import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import AddStudent from "./pages/AddStudent/AddStudent";
import EditStudent from "./pages/EditStudent/EditStudent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<App />} />
        <Route path="students/add" element={<AddStudent />} />
        <Route path="students/:studentId" element={<EditStudent />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
