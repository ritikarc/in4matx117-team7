import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { auth } from "../../firebase";
import "./AdminPage.css";

const AdminPage = () => {
  const user = useContext(UserContext);
  const {name, email} = user;
  console.log(user);

  return (
    <div className = "admin-page">
      <h2>Welcome, {name}</h2>
      <h2>Email: {email}</h2>
      <button onClick = {() => {auth.signOut()}}>Sign out</button>
    </div>
  )
};

export default AdminPage;