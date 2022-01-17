import React, { useState, useEffect } from "react";
import axios from "axios";
import AuthService from "./services/auth-service";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BookedTripsDetails } from "./BookedTripsDetails";

const Profile = () => {
  const [dataBookedTrips, setDataBookedTrips] = useState([]);
  const currentUser = AuthService.getCurrentUser();

  useEffect(() => {
    axios
      .get("http://localhost:8080/trip/book")
      .then((response) => {
        setDataBookedTrips(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="border-bottom" style={{ paddingBottom: "10px" }}>
        <header
          className="jumbotron"
          style={{ fontSize: "30px", color: "#1b406b", paddingTop: "10px" }}
        >
          <BiUserCircle style={{ width: "30px", height: "30px" }} /> Twój profil
        </header>
      </div>
      <div>
        <p style={{ fontSize: "25px", paddingLeft: "10px" }}>
          {currentUser.username}
        </p>
        <p style={{ paddingLeft: "10px" }}>
          <strong>Email:</strong> {currentUser.email}
        </p>
      </div>
      <div className="border-bottom" style={{ paddingBottom: "10px" }}>
        <header
          className="jumbotron"
          style={{ fontSize: "30px", color: "#1b406b", paddingTop: "50px" }}
        >
          <AiOutlineHeart style={{ width: "30px", height: "30px" }} /> Twoje
          rezerwacje
        </header>
      </div>
      <div className="d-flex flex-row">
      {dataBookedTrips.map((bookedTrip) => {
        if(bookedTrip.username === currentUser.username)
        return (
          <div className="w-25 p-3">
          <BookedTripsDetails 
          country={bookedTrip.country}
          cityTrip={bookedTrip.cityTrip}
          dateFrom={bookedTrip.dateFrom}
          dateTo={bookedTrip.dateTo}
          firstName={bookedTrip.firstName} 
          lastName={bookedTrip.lastName}
          numberPhone={bookedTrip.numberPhone}
          idCard={bookedTrip.idCard}
          city={bookedTrip.city}
          street={bookedTrip.street}
          postCode={bookedTrip.postCode}
           />
          </div>
        )
      })}
      </div>
    </div>
  );
};

export default Profile;
