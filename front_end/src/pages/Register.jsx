import { useState } from "react";
import api from "../services/axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    UsersName: "",
    Email: "",
    Password: "",
    Phone: "",
    Gender: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await api.post("/register", form);
      localStorage.setItem("token", res.data.token);
      navigate("/profile");
    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 400 }}>
      <h3 className="text-center mb-4">Register</h3>

      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" name="UsersName" placeholder="Full name" onChange={handleChange} required />
        <input className="form-control mb-3" name="Email" type="email" placeholder="Email" onChange={handleChange} required />
        <input className="form-control mb-3" name="Password" type="password" placeholder="Password" onChange={handleChange} required />
        <input className="form-control mb-3" name="Phone" placeholder="Phone" onChange={handleChange} />
        
        <select className="form-control mb-3" name="Gender" onChange={handleChange}>
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <button className="btn btn-primary w-100">Register</button>
    </form>
    </div>
  );
};

export default Register;
