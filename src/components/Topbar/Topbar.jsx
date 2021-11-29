import './Topbar.css';
import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { auth } from '../../firebase';
import firebase from '../../firebase';
import mainLogo from '../../assets/PhoneTaxxIcon.png';
import Avatar from 'react-avatar';

function Topbar() {
  const user = useContext(UserContext);
  const { name, email, uid } = user;

  return (
    <div id="topbar">
      <img src = {mainLogo} alt = "PhoneTaxx Logo" />
      <h2 className="admin-title">{name}</h2>
      <Avatar name = {name} size = "50" /> 
      <h2>Email: {email}</h2>
      <button
        className="signout-btn"
        onClick={() => {
          auth.signOut();
        }}
      >
        Sign out
      </button>
    </div>
  );
}

export default Topbar;
