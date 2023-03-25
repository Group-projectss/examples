import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth, login } from "./redux/auth";
import { useEffect, useState } from "react";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

function ProtectedRoute({ children }) {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const localAuth = localStorage.getItem("isAuth");
    const localUser = JSON.parse(localStorage.getItem("user"));

    if (localAuth) {
      dispatch(login(localUser));
    }

    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}
