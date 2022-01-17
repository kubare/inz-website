import React, { useState } from "react";
import { Button, Collapse } from "react-bootstrap";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BsCalendarDate } from "react-icons/bs";
import { MdPlace } from 'react-icons/md';


import moment from "moment";

export const BookedTripsDetails = (props) => {
  const [open, setOpen] = useState(false);
  let convertDateFrom = moment(props.dateFrom).format("YYYY.MM.DD");
  let convertDateTo = moment(props.dateTo).format("YYYY.MM.DD");

  return (
    <div >
      <div style={{ paddingLeft: "10px", paddingBottom: "10px" }}>
        <div style={{fontSize: "20px", paddingBottom: "10px"}}><MdPlace style={{height:"25px", width:"25px"}}/>{props.country}</div>
        {props.cityTrip} <br />
        <BsCalendarDate style={{ height: "15px", width: "15px" }} />{" "}
        {convertDateFrom} - {convertDateTo} <br />
      </div>
      <div className="border" style={{ borderRadius: "5px" }}>
      <div className="bg-info" style={{ paddingLeft: "5px", background: "silver"}}>
      <AiOutlineArrowDown
        style={{ height: "16px", width: "16px" }}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      />
      </div>
      <Collapse in={open}>
        <div style={{ fontSize: "14px", paddingLeft: "12px", paddingTop: "12px", paddingBottom: "12px"}} id="example-collapse-text">
        Imie: {props.firstName} <br />
        Nazwisko: {props.lastName} <br />
        Numer telefonu: {props.numberPhone} <br />
        Numer dowodu: {props.idCard} <br />
        <br />
        Miasto: {props.city} <br />
        Ulica: {props.street} <br />
        Kod pocztowy: {props.postCode}
        </div>
      </Collapse>
    </div>
    </div>
  );
};
