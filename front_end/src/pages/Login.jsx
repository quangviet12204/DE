import { useState } from "react";
import api from "../services/axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    Email: "",
    Password: ""
  });
  const [error, setError] = useState("");

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    try {
      const res = await api.post("/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/profile");
    } catch (err) {
      const message = err.response?.data?.message || err.message || "Login failed";
      setError(message);
      console.error(err);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h3 className="text-center mb-4">Login</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <button className="btn btn-primary w-100 mb-3" onClick={() => {
        navigate('/register');
      }}>Go to Register</button>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" name="Email" type="email" placeholder="Email" onChange={handleChange} required />
        <input className="form-control mb-3" name="Password" type="password" placeholder="Password" onChange={handleChange} required />
        <button className="btn btn-success w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;
