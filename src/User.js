import { useContext } from "react";
import UserContext from "./UserContext";

function User() {

  const name = useContext(UserContext);

  return (
    <>
      <h2>User Component</h2>
      <h3>{name}</h3>
    </>
  );
}

export default User;