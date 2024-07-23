import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PrivateRoute({ element }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(null);

  useEffect(() => {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    setIsLogin(userLogin !== null);
  }, []);

  useEffect(() => {
    if (isLogin === false) {
      navigate("/login");
    }
  }, [isLogin, navigate]);

  return isLogin ? element : null;
}
