import React, { useEffect, useState } from "react";
import Footer from "../../../layouts/user/footer/Footer";
import Header from "../../../layouts/user/header/Header";
import SideBarUser from "./SideBarUser";
import {
  ArrowRightOutlined,
  LoadingOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../../services/Userservice";
import { Alert, notification, Spin } from "antd";
import { NavLink } from "react-router-dom";

function UserDetail() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const [user, setUser] = useState(userLogin);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.user);

  const handleChangeUser = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userChanger = {
      username: formData.get("username"),
      birthDate: formData.get("birthDate"),
      gender: formData.get("gender"),
      email: formData.get("email"),
    };

    const newObject = { ...user, ...userChanger };
    delete newObject["roles"];
    console.log(newObject);
    setUser(newObject);
    dispatch(updateUser({ user }));
    localStorage.setItem("userLogin", JSON.stringify(user));
  };

  return (
    <>
      <Header />
      <div className="flex gap-5 bg-slate-100">
        <div className="ml-24 mt-5">
          <SideBarUser userLogin={userLogin} />
        </div>
        <div className="hidden md:block my-4 mt-14 bg-white p-4 rounded-md shadow-md">
          <div className="absolute bottom-[64%] font-bold text-[20px]">
            Thông tin cá nhân
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="flex-shrink-0">
              <span className="text-sm font-medium">Ảnh đại diện</span>
              <img className="w-20 h-20 rounded-full object-cover" />
            </div>
            <div className="flex-1">
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-xl">
                Cập nhật ảnh mới
              </button>
              <p className="text-sm text-gray-600">
                Dung lượng file tối đa 5 MB. <br />
                Định dạng: .JPEG, .PNG
              </p>
            </div>
          </div>
          <div className="mt-4 flex">
            <form className="border-r mr-4 pr-4" onSubmit={handleChangeUser}>
              <div className="flex flex-wrap gap-4 mb-4">
                <label className="text-sm font-medium">Họ và tên</label>
                <input
                  type="text"
                  name="username"
                  className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md"
                  defaultValue={userLogin.username}
                />
              </div>
              <div className="flex flex-wrap gap-4 mb-4">
                <label className="text-sm font-medium">Ngày sinh</label>
                <input
                  type="date"
                  name="birthDate"
                  className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md"
                  defaultValue={userLogin.birthDate}
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email </label>
                <input
                  name="email"
                  type="text"
                  className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md"
                  defaultValue={userLogin.email}
                ></input>
              </div>
              <div className="flex flex-wrap gap-4 mb-4">
                <label className="text-sm font-medium">Giới tính</label>
                <select
                  name="gender"
                  className="w-full p-2 pl-10 text-sm text-gray-700 border border-gray-300 rounded-md"
                  defaultValue={userLogin.gender}
                >
                  <option value="1">Nam</option>
                  <option value="0">Nữ</option>
                  <option value="2">Khác</option>
                </select>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md m-2">
                Lưu thay đổi
              </button>
              {(() => {
                switch (loading) {
                  case "pending":
                    return (
                      <>
                        <Spin tip="Loading...">
                          <Alert
                            description="Đang cập nhật thông tin."
                            type="info"
                          />
                        </Spin>
                      </>
                    );
                  case "success":
                    return notification.success({
                      message: "Success",
                      description: "Change success.",
                      icon: <SmileOutlined style={{ color: "#108ee9" }} />,
                    });
                  default:
                    return null;
                }
              })()}
            </form>
            <div className="w-96 grid grid-cols-2 gap-4">
              <p className="text-sm font-medium ">Số điện thoại :</p>
              <span className="text-sm">{userLogin.phone}</span>
              <p className="text-sm font-medium">Mật khẩu </p>
              <span className="text-sm">
                <a className=" text-blue-500" href="/changePass">
                  Cập nhật <ArrowRightOutlined />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-blue-800 border-[5px]"></hr>
      <Footer />
    </>
  );
}

export default UserDetail;
