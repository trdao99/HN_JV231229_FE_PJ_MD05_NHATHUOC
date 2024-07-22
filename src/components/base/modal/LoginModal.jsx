import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../services/AuthService";

function LoginModal({ onClose, phoneNumber }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const handleLogin = () => {
    if (!password) {
      setError("Password cannot be blank.");
      return;
    }

    // Proceed with login
    const loginUser = {
      phoneNumber: phoneNumber,
      password: password,
    };
    // console.log(loginUser);
    dispatch(login({ loginUser }));
    onClose();
    // window.location.href = "/";
  };

  const closeModal = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-3xl mx-auto my-6">
        <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-neutral-300">
            <h3 className="text-3xl font-semibold">Login</h3>
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
              {error && <div className="mb-6 text-red-500">{error}</div>}
              <div className="flex items-center justify-between">
                <button
                  className="px-4 py-2 mx-auto font-bold text-black bg-primary-500 rounded hover:bg-primary-700 focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleLogin}
                >
                  Login
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

export default LoginModal;
