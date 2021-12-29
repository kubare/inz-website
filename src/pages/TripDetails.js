import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { NameAndImage } from "../components/tripDetailsComponents/NameAndImage";
import { MdPlace } from "react-icons/md";
import { BsCalendarDate } from "react-icons/bs";
import { ImAirplane } from "react-icons/im";
import { MdHotel } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import { Button } from "react-bootstrap";
import PopUpWindow from "./PopUpWindow";

const TripDetails = () => {
  const [data, setData] = useState([]);
  const { _id } = useParams();
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/user/alltrips")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const product = data.find((x) => x._id === _id);
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="container">
        <br />
        <NameAndImage info={product} />
        <br />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Miejscowosc</th>
              <th scope="col">Data</th>
              <th scope="col">Szczegoły</th>
              <th scope="col">Cena</th>
            </tr>
          </thead>
          <tbody className="table-info" style={{ borderTop: "none" }}>
            <tr>
              <td className="border">
                <MdPlace style={{ height: "25px", width: "25px" }} />{" "}
                {product.country}, {product.city}
              </td>
              <td className="border">
                <BsCalendarDate style={{ height: "25px", width: "25px" }} />{" "}
                {product.dateFrom} - {product.dateTo}
              </td>
              <td className="border">
                <ImAirplane /> Transport: {product.transport}
                <br />
                <MdHotel
                  style={{ height: "20px", width: "20px" }}
                /> Hotel: {product.hotelStars} <AiOutlineStar />
              </td>
              <td>
                <Button variant="primary" onClick={() => setModalShow(true)}>
                  {product.price} PLN
                </Button>
              </td>
              <PopUpWindow
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TripDetails;
