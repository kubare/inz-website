import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarTop from "./NavbarTop";
import HomePage from "../pages/HomePage";
import TripDetails from "../pages/TripDetails"
import ListTrips from "../pages/ListTrips"
import AdminListTrips from "../pages/adminPages/AdminListTrips"
import AdminListUsers from "../pages/adminPages/AdminListUsers"
import Profile from "../components/jwtComponents/Profile"
import Login from "../components/jwtComponents/Login"
import Register from "../components/jwtComponents/Register"
import AdminAddTrips from '../pages/adminPages/AdminAddTrips'

const App = () => {
  return (
    <Router>
      <NavbarTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trip/:_id" element={<TripDetails />} />
        <Route path="/sylwester" element={<ListTrips />} />
        <Route path="/ferie" element={<ListTrips />} />
        <Route path="/majowka" element={<ListTrips />} />
        <Route path="/wakacje" element={<ListTrips />} />
        <Route path="/alltrips" element={<AdminListTrips />} />
        <Route path="/allusers" element={<AdminListUsers />} />
        <Route path="/addtrips" element={<AdminAddTrips />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
