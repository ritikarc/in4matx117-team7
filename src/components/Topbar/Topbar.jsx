import './Topbar.css';
import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../../providers/UserProvider';
import { auth } from '../../firebase';
import firebase from '../../firebase';

function Topbar() {
  const user = useContext(UserContext);
  const { name, email, uid } = user;

  return (
    <div id="topbar">
      <h2 className="admin-title">{name}</h2>
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
