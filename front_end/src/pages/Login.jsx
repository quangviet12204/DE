import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import api from "../api";
import "./style/Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/login", { email, password });

      // Lưu token + user trước
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Đăng nhập thành công!");

      // Redirect về trang home
      navigate("/");
    } catch (err) {
      setError("Sai email hoặc mật khẩu");
    }
  };

  return (
    <div className="login-page">
      {/* Title */}
      <div className="text-center mb-5">
        <h1 className="login-title">Đăng Nhập</h1>
        <p className="breadcrumb-text">
          Trang Chủ <span>/</span> Đăng Nhập
        </p>
      </div>

      {/* Login Form */}
      <div className="login-box mx-auto">
        <h3 className="mb-4">Đăng Nhập Tài Khoản</h3>

        <form>
          <div className="mb-3">
            <label className="form-label">Tên Tài Khoản</label>
            <input
              type="text"
              className="form-control login-input"
              placeholder="Nhập tên tài khoản"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Mật Khẩu</label>
            <input
              type="password"
              className="form-control login-input"
              placeholder="Nhập mật khẩu"
            />
          </div>

          <button type="submit" className="btn login-btn w-100 mb-3">
            ĐĂNG NHẬP
          </button>
        </form>

        <p className="text-center mb-2">Bạn Chưa Có Tài Khoản?</p>

        <Link to="/register" className="btn register-btn w-100">
          ĐĂNG KÝ NGAY
        </Link>
      </div>
    </div>
  );
}
