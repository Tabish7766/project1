import React from "react";
import { TestTodo } from "./TestTodo";
import { TestCounter } from "./TestCounter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApiFetch } from "./ApiFetch";
import { Top } from "./Top";
import { ProductsApi } from "./ProductsApi";
import MaterialTest from "./Material UI/MaterialTest";
import LoginForm from "./Material UI/LoginForm";
import "./Material UI/Material.css";
export const Home = () => {
  return (
    <React.Fragment>
      <LoginForm />
      {/* <MaterialTest /> */}
      {/* <ProductsApi /> */}
      {/* <Top /> */}
      {/* <h1>THis is home Page</h1> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<ApiFetch />} />
          <Route path="/todo" element={<TestTodo />} />
          <Route path="/counter" element={<TestCounter />} />
        </Routes>
      </BrowserRouter> */}
      {/* <ApiFetch />
      <TestTodo />
      <TestCounter /> */}
    </React.Fragment>
  );
};
