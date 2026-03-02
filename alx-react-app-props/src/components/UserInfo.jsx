import UserContext from "./UserContext";
import { useContext } from "react";

function UserInfo() {

 const {userData} = useContext(UserContext)

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserInfo;