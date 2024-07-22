import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../services/AuthService";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
function SignUp({ onClose, phoneNumber }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSignUp = () => {
    // Validate username and password
    if (!username.trim()) {
      setError("Username cannot be blank.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Proceed with sign up
    const registerUser = {
      phoneNumber: phoneNumber,
      username: username,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log(registerUser);
    dispatch(register({ registerUser })).then(() => {
      notification.success({
        message: "Success Notification",
        description: "Register success.",
        icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      });
    });
    onClose();
  };

  const closeModal = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-neutral-300">
            <h3 className="text-3xl font-semibold">Sign Up</h3>
            <button
              className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
              onClick={closeModal}
            >
              <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                ×
              </span>
            </button>
          </div>
          <div className="relative p-6 flex-auto">
            <form>
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-bold text-neutral-700"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-bold text-neutral-700"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-6">
                <label
                  className="block mb-2 text-sm font-bold text-neutral-700"
                  htmlFor="confirmPassword"
                >
                  Confirm Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {error && <div className="mb-6 text-red-500">{error}</div>}
              <div className="flex items-center justify-between">
                <button
                  className="px-4 py-2 mx-auto font-bold text-black bg-primary-500 rounded hover:bg-primary-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-neutral-300">
            <button
              className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear bg-transparent border border-solid rounded outline-none active:underline focus:outline-none"
              type="button"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
