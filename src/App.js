import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from "./components/LoginPage/LoginPage";
import Sidebar from "./components/Sidebar/Sidebar";
import AdminPage from "./components/AdminPage/AdminPage";
import AnalyticsPage from "./components/AnalyticsPage/AnalyticsPage";
import EmployeePage from "./components/EmployeePage/EmployeePage";
import ExpensesPage from "./components/ExpensesPage/ExpensesPage";
import Application from "./components/Application/Application";
import UserProvider from "./providers/UserProvider";
import { UserContext } from "./providers/UserProvider";
function App() {
  
  return (
    <UserProvider>
      <Application />
    </UserProvider>
  );
}

export default App;