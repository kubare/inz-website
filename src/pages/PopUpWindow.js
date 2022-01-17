import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import authService from "../components/jwtComponents/services/auth-service";
import authHeader from "../components/jwtComponents/services/auth-header";

const BookValues = {
  idTrip: "",
  username: "",
  country: "",
  cityTrip: "",
  dateFrom: "",
  dateTo: "",
  firstName: "",
  lastName: "",
  numberPhone: "",
  idCard: "",
  city: "",
  street: "",
  apratamentName: "",
  postCode: "",
};

function PopUpWindow(props) {
  const currentUser = authService.getCurrentUser();
  const { _id } = useParams();
  const [values, setValues] = useState({
    idTrip: _id,
    username: currentUser.username,
    country: props.country,
    cityTrip: props.city,
    dateFrom: props.dateFrom,
    dateTo: props.dateTo,
    firstName: "",
    lastName: "",
    numberPhone: "",
    idCard: "",
    city: "",
    street: "",
    apratamentName: "",
    postCode: "",
  });

  const handleSetInputs = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  let submitBookTrip = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/trip/book", values, {
        headers: authHeader(),
      })
      .then((response) => {
        if (response.data != null) {
          console.log("ok");
        } else {
          console.log("error");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setValues(BookValues);
  };

  console.log(values);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Wprowadź dane
        </Modal.Title>
      </Modal.Header>
      <form onSubmit={submitBookTrip}>
        <Modal.Body>
          <label>Imię: </label>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                placeholder="imie"
                class="form-control"
                name="firstName"
                value={values.firstName}
                onChange={handleSetInputs}
              />
            </div>
          </div>
          <label style={{ paddingTop: "5px" }}>Nazwisko: </label>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                placeholder="nazwisko"
                class="form-control"
                name="lastName"
                value={values.lastName}
                onChange={handleSetInputs}
              />
            </div>
          </div>
          <label style={{ paddingTop: "5px" }}>Numer telefonu: </label>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                placeholder="numer telefonu"
                class="form-control"
                name="numberPhone"
                value={values.numberPhone}
                onChange={handleSetInputs}
              />
            </div>
          </div>
          <label style={{ paddingTop: "5px" }}>Numer dowodu: </label>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                placeholder="numer dowodu"
                class="form-control"
                name="idCard"
                value={values.idCard}
                onChange={handleSetInputs}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Adres zamieszkania
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Miasto: </label>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                placeholder="miasto"
                class="form-control"
                name="city"
                value={values.city}
                onChange={handleSetInputs}
              />
            </div>
          </div>
          <label style={{ paddingTop: "5px" }}>Ulica: </label>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                placeholder="ulica"
                class="form-control"
                name="street"
                value={values.street}
                onChange={handleSetInputs}
              />
            </div>
          </div>
          <label style={{ paddingTop: "5px" }}>Numer lokalu: </label>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                placeholder="numer lokalu"
                class="form-control"
                name="apratamentName"
                value={values.apratamentName}
                onChange={handleSetInputs}
              />
            </div>
          </div>
          <label style={{ paddingTop: "5px" }}>Kod pocztowy: </label>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                placeholder="kod pocztowy"
                class="form-control"
                name="postCode"
                value={values.postCode}
                onChange={handleSetInputs}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" onSubmit={submitBookTrip}>
            Zapłać
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default PopUpWindow;
