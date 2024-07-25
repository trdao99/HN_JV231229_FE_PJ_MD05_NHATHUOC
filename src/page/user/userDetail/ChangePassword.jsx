import React, { useState } from "react";
import Header from "../../../layouts/user/header/Header";
import Footer from "../../../layouts/user/footer/Footer";
import SideBarUser from "./SideBarUser";
import { useDispatch, useSelector } from "react-redux";
import { changePassword } from "../../../services/Userservice";

function ChangePassword() {
  const userLogin = JSON.parse(localStorage.getItem("userLogin"));
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorValidate, setError] = useState("");
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!password || !newPassword || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match");
      return;
    }
    const passWord = {
      phone: userLogin.phone,
      oldPassword: password,
      newPassword: newPassword,
    };
    dispatch(changePassword(passWord));
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 bg-slate-100">
        <div className="ml-6 mt-6 md:ml-24 md:mt-12">
          <SideBarUser userLogin={userLogin} />
        </div>
        <div className="hidden md:block flex-1 my-6 mt-24 ml-4 bg-white p-6 rounded-md shadow-md w-3/4">
          <h2 className="absolute top-64 font-bold text-2xl">Đổi Mật Khẩu</h2>
          <form onSubmit={handleSubmit} className="mt-12 space-y-4 w-3/4">
            {errorValidate && (
              <div className="text-red-500">{errorValidate}</div>
            )}
            {error && <div className="text-red-500">Sai mật khẩu</div>}
            <div>
              <label htmlFor="password" className="block font-medium">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-[2px] border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10"
                required
              />
            </div>
            <div>
              <label htmlFor="newpassword" className="block font-medium">
                New Password:
              </label>
              <input
                type="password"
                id="newpassword"
                name="newpassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-[2px] border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmpassword" className="block font-medium">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border-[2px] border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-10"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <hr className="border-blue-800 border-[5px]" />
      <Footer />
    </div>
  );
}

export default ChangePassword;
