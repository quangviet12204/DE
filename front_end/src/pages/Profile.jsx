import { useEffect, useState } from "react";
import api from "../services/axios";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    api.get("/me").then(res => setUser(res.data));
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="container mt-5">
      <h3>Welcome {user.UsersName}</h3>
      <p>Email: {user.Email}</p>
    </div>
  );
};

export default Profile;
