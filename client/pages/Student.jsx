import { useContext } from "react";
import UserContext from "../context/UserContext";

function Student() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Name: {user.Name}</h1>
      <h2>Roll No: {user.Rollno}</h2>
    </div>
  );
}

export default Student;