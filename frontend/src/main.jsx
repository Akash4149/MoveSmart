import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Admin,
  AdminLogin,
  AdminRegister,
  BookTicket,
  BusTrackingMap,
  Driver,
  DriverLogin,
  DriverRegister,
  Issue,
  User,
  UserLogin,
  UserRegister,
} from "./pages/index.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { ToastContainer } from "react-toastify";
import { Userprovider } from "../context/userContext.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/user",
    element: (
      <>
        <User />
      </>
    ),
  },
  {
    path: "/userlogin",
    element: (
      <>
        <UserLogin />
      </>
    ),
  },
  {
    path: "/userregister",
    element: (
      <>
        <UserRegister />
      </>
    ),
  },
  {
    path: "/driverlogin",
    element: <DriverLogin />,
  },
  {
    path: "/driver",
    element: <Driver />,
  },
  {
    path: "/bustracking",
    element: <BusTrackingMap />,
  },
  {
    path:'/bookticket',
    element : <BookTicket/>
  },
  {
    path:"/adminlogin",
    element:<AdminLogin/>
  },
  {
    path:"/adminregister",
    element:<AdminRegister/>
  },
  {
    path:"/admin",
    element:<Admin/>
  },
  {
    path:'/driverRegister',
    element:<DriverRegister/>
  },
  {
    path:'/adminissue',
    element:<Issue/>
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <ToastContainer />
      <Userprovider>
      <RouterProvider router={router} />
      </Userprovider>
  </StrictMode>
);
