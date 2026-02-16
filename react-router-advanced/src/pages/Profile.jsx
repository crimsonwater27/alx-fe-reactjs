// src/pages/Profile.jsx
import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile</h1>

      <nav>
        <Link to="details">Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* nested routes render here */}
      <Outlet />
    </div>
  );
}

export default Profile;
