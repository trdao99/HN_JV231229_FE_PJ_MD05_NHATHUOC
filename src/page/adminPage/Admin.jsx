import {
  BarsOutlined,
  CommentOutlined,
  DashboardOutlined,
  ExclamationCircleOutlined,
  ProductOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Admin() {
  const [showFull, setShowFull] = useState(false);

  const handleToggle = () => {
    setShowFull(!showFull);
  };
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
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
              // src={userLogin.avatar}
              alt="Admin Avatar"
              className="object-cover w-[70px] h-[70px] rounded-full"
            />
            {showFull && (
              <span className="mx-2 text-white font-semibold">
                {userLogin.username}
              </span>
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
            {showFull ? "  this is link 2 title" : ""}
          </NavLink>
          <NavLink
            className="block h-12 hover:bg-slate-400 text-center leading-10 text-white focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all duration-300 ease-in-out"
            to="/admin/product"
          >
            <ProductOutlined className="text-[20px]" />
            {showFull ? " Sản phẩm " : ""}
          </NavLink>
          <NavLink
            className="block h-12 hover:bg-slate-400 text-center leading-10 text-white focus:outline-none focus:ring-2 focus:ring-slate-400  "
            to="/admin/user"
          >
            <UserOutlined className="text-[20px]" />
            {showFull ? "  User" : ""}
          </NavLink>
          <NavLink
            className="block h-12 hover:bg-slate-400 text-center leading-10 text-white focus:outline-none focus:ring-2 focus:ring-slate-400  "
            to="/admin/banner"
          >
            <ExclamationCircleOutlined className="text-[20px]" />
            {showFull ? "   Banner" : ""}
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
