import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../ScrollBehavior";
import Home from "../views/Home";

const routes = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default routes;
