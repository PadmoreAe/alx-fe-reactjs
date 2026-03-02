import UserContext from "./UserContext";
import { useContext } from "react";

const UserProfile = () => {

  const { userData } = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
};

export default UserProfile;
