import { useContext } from 'react';
import UserContext from './UserContext.js';
import UserProfile from '../../alx-react-app-new/src/components/UserProfile.jsx';

function UserDetails() {
  const userData = useContext(UserContext); // Access the user data from context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
