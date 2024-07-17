import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "./page/adminPage/Admin";
import Ct1 from "./page/adminPage/Ct1";
import Ct2 from "./page/adminPage/Ct2";
import Ct3 from "./page/adminPage/Ct3";
import Home from "./page/home/Home";

function RouterTag() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />}>
          <Route path="ct1" element={<Ct1 />} />
          <Route path="ct2" element={<Ct2 />} />
          <Route path="ct3" element={<Ct3 />} />
        </Route>
      </Routes>
    </>
  );
}

export default RouterTag;
