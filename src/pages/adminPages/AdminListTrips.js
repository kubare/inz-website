import axios from "axios";
import React, { useState, useEffect } from "react";
import { Image } from 'react-bootstrap'

export default function AdminListTrips() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/user/alltrips')
    .then(res => {
      console.log(res)
      setData(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }, []); 


    const totalItems = data.length

     const deleteShoes = (shoesId) => {
         axios.delete("http://localhost:8080/api/admin/admintrip?index="+shoesId)
         .then(res => {
           if(res.data != null) {
             alert("shoes deleted!")
             setData(data.filter(shoes => shoes.id !== shoesId))
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
          </tr>
        </thead>
        <tbody>
            {data.map((item) => 
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
            <td><button onClick={() => deleteShoes(item.id)}>DEL</button>
              <button>UPD</button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
    </div>

  );
}