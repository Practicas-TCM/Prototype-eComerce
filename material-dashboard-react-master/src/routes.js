/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons

import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Product from "views/Product/Product.js" 
import Company from "views/Company/Company.js"
import LogIn from "views/LogIn/LogIn.js" 
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import HomeIcon  from '@material-ui/icons/Home';
import NotificationsPage from "views/Notifications/Notifications.js";

const dashboardRoutes = [
  {
    path: "/table",
    name: "Homepage",
    icon: HomeIcon,
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/products",
    name: "Products",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/product", // url
    name: "Product", // titol
    icon: "", // icono
    component: Product, // 
    layout: "/admin",
    visible: false
  },
  {
    path: "/logIn", // url 
    name: "Log In", // titol
    icon: "", // icono
    component: LogIn, // 
    layout: "/admin",
    visible: false
  },
  {
    path: "/company", // url 
    name: "Company", // titol
    icon: "", // icono
    component: Company, // component
    layout: "/admin",
    visible: false
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  }
];

export default dashboardRoutes;
