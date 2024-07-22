import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { findPhone } from "../../../services/AuthService";
import LoginModal from "./LoginModal";
import SignUp from "./SignUp";

function AuthModal({ onClose }) {
  const [isOpen, setIsOpen] = useState(true); // Modal is open by default
  const [phoneCheck, setPhoneCheck] = useState(null);
  const dispatch = useDispatch();
  const [err, setErr] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    onClose();
  };
  const [phoneNumber, setPhoneNumber] = useState("");

  // Regex pattern for phone number validation
  const phoneRegex = /^([+]84|0)[35789][0-9]{8,9}$/;
  const phoneErrorMessage = "Invalid phone format!";

  const handleLogin = (e) => {
    e.preventDefault();
    const phoneNumber = e.target[0].value.trim();

    if (phoneNumber === "") {
      setErr("Phone can't be null");
      return;
    }

    // Validate phone number using regex
    if (!phoneRegex.test(phoneNumber)) {
      setErr(phoneErrorMessage);
      return;
    }

    dispatch(findPhone(phoneNumber)).then((resp) => {
      setPhoneCheck(resp.payload);
      setErr("");
      setPhoneNumber(phoneNumber);
    });
  };

  useEffect(() => {
    if (phoneCheck !== null) {
      toggleModal();
    }
  }, [phoneCheck]);

  return (
    <>
      {phoneCheck === true ? (
        <LoginModal onClose={onClose} phoneNumber={phoneNumber} />
      ) : (
        ""
      )}
      {phoneCheck === false ? (
        <SignUp onClose={onClose} phoneNumber={phoneNumber} />
      ) : (
        ""
      )}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-neutral-300">
                <h3 className="text-3xl font-semibold">Login</h3>
                <button
                  className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-black bg-transparent border-0 outline-none opacity-5 focus:outline-none"
                  onClick={toggleModal}
                >
                  <span className="block w-6 h-6 text-2xl text-black bg-transparent outline-none opacity-5 focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <form onSubmit={handleLogin}>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm float-start text-neutral-700"
                      htmlFor="phone"
                    >
                      Phone
                    </label>
                    <input
                      className="w-full px-3 py-2 leading-tight text-neutral-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="phone"
                      type="tel"
                      placeholder="Enter your Phone"
                    />
                  </div>
                  {err && <div className="mb-4 text-red-500">{err}</div>}
                  <div className="flex items-center justify-between">
                    <button
                      className="px-4 py-2 mx-auto font-bold text-black bg-primary-500 rounded hover:bg-primary-700 focus:outline-none focus:shadow-outline"
                      type="submit"
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
      )}
    </>
  );
}

export default AuthModal;
