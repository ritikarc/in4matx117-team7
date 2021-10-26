import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Admin',
        path: "/admin-page",
        icon: <FaIcons.FaUserTie/>,
        cName: 'nav-text'
    },
    {
        title: "Employees",
        path: "/employee-page",
        icon: <FaIcons.FaUsers/>,
        cName: 'nav-text'
    },
    {
        title: "Expenses",
        path: "/analytics-page",
        icon: <FaIcons.FaFileInvoiceDollar/>,
        cName: "nav-text"
    },
    {
        title: "Analytics",
        path: "/analytics-page",
        icon: <FaIcons.FaChartBar/>,
        cName: "nav-text"
    },
];