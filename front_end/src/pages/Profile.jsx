import { useEffect, useState } from "react";
import api from "../services/axios";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/profile")
      .then(res => {
        setUser(res.data);
      })
      .catch(() => {
        localStorage.removeItem("token");
        window.location.href = "/login";
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>
        <h3 className="mb-3 text-center">My Profile</h3>

        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>

        <button
          className="btn btn-danger w-100 mt-3"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/login";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
