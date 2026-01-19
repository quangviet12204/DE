import { useState } from "react";
import api from "../services/axios";
import "./style/AuthPage.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (isLogin) {
        // ĐĂNG NHẬP
        const res = await api.post("/login", {
          email: form.email,
          password: form.password,
        });

        localStorage.setItem("token", res.data.token);
        window.location.href = "/profile";
      } else {
        // ĐĂNG KÝ
        await api.post("/register", form);
        alert("Đăng ký thành công, vui lòng đăng nhập");
        setIsLogin(true);
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Có lỗi xảy ra, vui lòng thử lại"
      );
    }
  };

  return (
  <div className="auth-bg d-flex align-items-center justify-content-center">
    <form
      className="auth-card card shadow-lg p-4"
      style={{ width: "380px" }}
      onSubmit={handleSubmit}
    >
      <div className="auth-check mb-2">✓</div>

      <h3 className="text-center mb-4">
        {isLogin ? "Sign In" : "Sign Up"}
      </h3>

      {!isLogin && (
        <div className="mb-3">
          <input
            className="form-control"
            name="name"
            placeholder="Full name"
            onChange={handleChange}
            required
          />
        </div>
      )}

      <div className="mb-3">
        <input
          className="form-control"
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-3">
        <input
          className="form-control"
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
      </div>

      {error && (
        <div className="alert alert-danger py-2">
          {error}
        </div>
      )}

      <button type="submit" className="btn btn-primary w-100 mb-3">
        {isLogin ? "Sign In" : "Sign Up"}
      </button>

      <p className="text-center auth-toggle">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <span onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? " Sign up" : " Sign in"}
        </span>
      </p>
    </form>
  </div>
);
  

}


