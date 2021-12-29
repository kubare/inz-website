import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { MdPlace } from 'react-icons/md';
import { BsCalendarDate } from 'react-icons/bs';

const ProductMiniature = ({
  key,
  img,
  country,
  city,
  dateFrom,
  dateTo,
  price,
  maxPersons,
  transport,
  link,
}) => {
  let convertDateFrom = moment(dateFrom).format("YYYY.MM.DD");
  let convertDateTo = moment(dateTo).format("YYYY.MM.DD");
  return (
    <div className="p-2">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title className="font" style={{ fontWeight: "bold" }}>
            {country}
          </Card.Title>
          <Card.Text style={{ fontSize: "14px" }}>
          <MdPlace style={{height:"25px", width:"25px"}}/>{city}
          </Card.Text>
          <Card.Text style={{ fontSize: "12px" }}>
            <BsCalendarDate style={{height:"15px", width:"15px"}}/> {convertDateFrom} -{" "}
            {convertDateTo} <br />
            <FontAwesomeIcon icon={faUsers} /> Liczba osób: {maxPersons} <br />
            <FontAwesomeIcon icon={faPlane} /> {transport}
          </Card.Text>
          <Link to={link}>
            <Button variant="primary">{price} PLN</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductMiniature;
