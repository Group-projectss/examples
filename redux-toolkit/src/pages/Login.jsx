import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(
      login({
        name: "John Doe",
        email: "johndoe@gmail.com",
      })
    );
    navigate("/");
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <button onClick={handleLogin}>Klik untuk Login</button>
    </div>
  );
}
