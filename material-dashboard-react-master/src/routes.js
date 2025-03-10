import Dashboard from "@material-ui/icons/Dashboard";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import Company from "views/Company/Company.js"
import SingIn from "views/SingIn/SingIn.js" 
import Cart from "views/Cart/Cart.js" 
import SingUp from "views/SingUp/SingUp.js" 
import HomePage from "views/HomePage/HomePage.js";
import HomeIcon  from '@material-ui/icons/Home';
import Premioum from "views/Premioum/Premioum.js";
import Language from "@material-ui/icons/Language";
import CheckOut from "views/Pagament/Checkout.js";
import Ofertes from "views/Ofertes/Ofertes.js";

//Products
import TancaFusta from "views/Product/TancaFusta.js" 
import Jardinera from "views/Product/Jardinera.js" 
import Cortacesped from "views/Product/Cortacesped.js";

import mesVenuts from "views/MesVenuts/MesVenuts.js";
import nousProductes from "views/NousProductes/NousProductes.js";

const dashboardRoutes = [
  {
    path: "/home",
    name: "Pàgina principal",
    icon: HomeIcon,
    component: HomePage,
    layout: "/page"
  },
  {
    path: "/checkOut",
    name: "checkOut",
    icon: HomeIcon,
    component: CheckOut,
    layout: "/page",
    visible:false
  },
  {
    path: "/premium",
    name: "Prèmium",
    component: Premioum,
    layout: "/page",
    visible:false
  },
  {
    path: "/singIn", // url 
    name: "Log In", // titol
    icon: "", // icono
    component: SingIn, // 
    layout: "/page",
    visible: false
  },
  {
    path: "/singUp",
    name: "SingUp",
    icon: "",
    component: SingUp,
    layout: "/page",
    visible: false
  },
  {
    path: "/products",
    name: "Productes",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/tancafusta", // url
    name: "TancaFusta", // titol
    icon: "", // icono
    component: TancaFusta, // 
    layout: "/admin",
    visible: false
  },
  {
    path: "/jardinera", // url
    name: "Jardinera", // titol
    icon: "", // icono
    component: Jardinera, // 
    layout: "/admin",
    visible: false
  },
  {
    path: "/cortacesped", // url
    name: "Cortacesped", // titol
    icon: "", // icono
    component: Cortacesped, // 
    layout: "/admin",
    visible: false // perque no surti al menú
  },
  
  {
    path: "/cart", // url 
    name: "Els teus Articles", // titol
    icon: "", // icono
    component: Cart, // 
    layout: "/admin",
    visible: false

  },
  {
    path: "/company", // url 
    name: "Sobre nosaltres ", // titol
    icon: Language, // icono
    component: Company, // component
    layout: "/admin",
   
  },
  {
    path: "/ofertes", // url 
    name: "Ofertes ", // titol
    icon: Language, // icono
    component: Ofertes, // component
    layout: "/admin",
    visible: false
  },
  {
    path: "/mesVenuts", // url 
    name: "venuts ", // titol
    icon: Language, // icono
    component: mesVenuts, // component
    layout: "/admin",
    visible: false   
  },
  {
    path: "/nousProductes", // url 
    name: "novetats ", // titol
    icon: Language, // icono
    component: nousProductes, // component
    layout: "/admin",
    visible: false
  },
];

export default dashboardRoutes;
