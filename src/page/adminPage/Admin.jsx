import {
  BarsOutlined,
  CommentOutlined,
  DashboardOutlined,
  ProductOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Category from "./Category";

function Admin() {
  const [showFull, setShowFull] = useState(false);

  const handleToggle = () => {
    setShowFull(!showFull);
  };

  return (
    <>
      <div className="flex">
        <div
          className={`bg-slate-500 h-[100vh] top-0 transition-all duration-500 ease-in-out ${
            showFull ? "w-56" : "w-28"
          }`}
        >
          <div
            className={`h-20 mx-auto my-4 bg-slate-400 flex justify-center items-center transition-all duration-500 ease-in-out ${
              showFull ? "w-44 rounded-full" : "w-20 rounded-full"
            }`}
          >
            <img
              src="https://th.bing.com/th/id/R.a88bb6c1cbeeafe541d381d6d15d23d1?rik=dCWPKFSkB0CWNA&pid=ImgRaw&r=0"
              alt="Admin Avatar"
              className="object-cover w-[70px] h-[70px] rounded-full"
            />
            {showFull && (
              <span className="mx-2 text-white font-semibold">Admin 123</span>
            )}
          </div>

          <NavLink
            className="block h-12 hover:bg-slate-400 text-center leading-10 text-white focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all duration-300 ease-in-out"
            to="/admin/category"
          >
            <DashboardOutlined className="text-[20px]" />
            {showFull ? " Danh mục" : ""}
          </NavLink>
          <NavLink
            className="block h-12 hover:bg-slate-400 text-center leading-10 text-white focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all duration-300 ease-in-out"
            to="/admin/ct2"
          >
            <CommentOutlined className="text-[20px]" />
            {showFull ? " : this is link 2 title" : ""}
          </NavLink>
          <NavLink
            className="block h-12 hover:bg-slate-400 text-center leading-10 text-white focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all duration-300 ease-in-out"
            to="/admin/ct3"
          >
            <ProductOutlined className="text-[20px]" />
            {showFull ? (
              <span className="opacity-100 transition-all duration-500">
                : this is link 3 title"
              </span>
            ) : (
              <span className="opacity-0"></span>
            )}
          </NavLink>
          <NavLink
            className="block h-12 hover:bg-slate-400 text-center leading-10 text-white focus:outline-none focus:ring-2 focus:ring-slate-400  "
            to="/admin/user"
          >
            <UserOutlined className="text-[20px]" />
            {showFull ? (
              <span className="opacity-100 transition-all duration-500">
                : User"
              </span>
            ) : (
              <span className="opacity-0"></span>
            )}
          </NavLink>
        </div>
        <div className="flex-1 p-4 bg-gray-300 h-[100vh] ">
          <nav className="h-9 flex items-center mb-4 w-full justify-between">
            <button
              className="h-9 w-20 text-center bg-slate-500 text-white rounded-lg cursor-pointer hover:bg-slate-400 focus:outline-2 transition-all duration-300 ease-in-out"
              onClick={handleToggle}
            >
              <BarsOutlined />
            </button>
            <div className="bg-blue-600 p-1 rounded-lg">
              <a href="/">
                <img
                  class="h-auto w-[149px] cursor-pointer"
                  src="https://prod-cdn.pharmacity.io/e-com/images/static-website/20240706161420-0-logo-white-text.svg"
                  alt="Pharmacity Logo"
                />
              </a>
            </div>
          </nav>
          <div className="p-4 bg-white shadow-md rounded-lg h-[90%] transition-all duration-300 ease-in-out overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
