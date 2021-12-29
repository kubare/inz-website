import axios from "axios";
import React, { useState, useEffect } from "react";
import { Image } from 'react-bootstrap'
import userService from '../../components/jwtComponents/services/user-service'
import EventBus from '../../components/jwtComponents/EventBus'
import authHeader from '../../components/jwtComponents/services/auth-header'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function AdminListTrips() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    userService.getListTripsBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
       // history.replace("/")
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);
 
    const totalItems = content.length

     const deleteShoes = (tripId) => {
         axios.delete("http://localhost:8080/api/admin/admintrip?index="+tripId, { headers: authHeader() })
         .then(res => {
           if(res.data != null) {
             alert("shoes deleted!")
             setContent(content.filter(trip => trip._id !== tripId))
           }
         })
     } 

  return (
      <div className="pt-2 d-flex justify-content-center">
    <div className="border w-75 p-3">
        <label className="font" style={{ fontWeight: "bold" }}>List of products</label><br />
        <label className="font">List of all available products: {totalItems}</label>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">IMG</th>
            <th scope="col">Kraj</th>
            <th scope="col">Miasto</th>
            <th scope="col">Od</th>
            <th scope="col">Do</th>
            <th scope="col">Transport</th>
            <th scope="col">Hotel gwiazdki</th>
            <th scope="col">Cena</th>
            <th scope="col">Typ</th>
            <th scope="col">Usun</th>
          </tr>
        </thead>
        <tbody>
            {content.map((item) => 
          <tr>
            <th><Image src={item.img} thumbnail width="35" height="35"/></th>
            <td>{item.country}</td>
            <td>{item.city}</td>
            <td>{item.dateFrom}</td>
            <td>{item.dateTo}</td>
            <td>{item.transport}</td>
            <td>{item.hotelStars}</td>
            <td>{item.price}</td>
            <td>{item.type}</td>
            <td><FontAwesomeIcon icon={faTrash} onClick={() => deleteShoes(item._id)} />
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>

  );
}