import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const UseStatus = () => {
  const { userStatus, setUserStatus, stat } = useContext(AuthContext);

  const handlestatus = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form.status.value);

    if (!form.status.value) {
      setUserStatus(stat);
    } else {
      setUserStatus(form.status.value);
    }
  };
  return (
    <div>
      <h1>{userStatus}</h1>
      <form onSubmit={handlestatus}>
        <input className='border' type='text' name='status' id='' />
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
};

export default UseStatus;
