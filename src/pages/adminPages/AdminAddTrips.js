import React, { useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import authHeader from "../../components/jwtComponents/services/auth-header";

const initialValues = {
  country: "",
  city: "",
  dateFrom: "",
  dateTo: "",
  transport: "",
  hotelStars: "",
  price: "",
  type: "",
  img: "",
};

export default function AddShoes() {
  const [values, setValues] = useState({
    country: "",
    city: "",
    dateFrom: "",
    dateTo: "",
    transport: "",
    hotelStars: "",
    price: "",
    type: "",
    img: "",
  });
  const [show, setShow] = useState(false);
  const [emptyText, setEmptyText] = useState(true);
  const navigation = useLocation();

  const handleSetInputs = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(emptyText)

  let submitTrips = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/api/admin", values, {
        headers: authHeader(),
      })
      .then((response) => {
        if (response.data != null) {
          setShow(true);
          setTimeout(() => setShow(false), 3000);
        } else {
          setShow(false);
        }
      })
      .catch((err) => {
        navigation("/")
        console.log(err);
      });
    setValues(initialValues);
  };

  const handleSetSeletcs = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="d-flex justify-content-center pt-5">
        <div className="border w-50 p-3">
          {show ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div class="alert alert-success w-25 p-3" role="alert">
                Dodano wycieczke!
              </div>
            </div>
          ) : null}
          <label for="formGroupExampleInput">Add Trip</label>
          <form onSubmit={submitTrips}>
            <div class="row">
              <div class="col">
                <div class="form-outline">
                  <input
                    type="text"
                    name="country"
                    value={values.country}
                    onChange={handleSetInputs}
                    placeholder="Kraj"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input
                    type="text"
                    value={values.city}
                    name="city"
                    onChange={handleSetInputs}
                    placeholder="Miasto"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input
                    type="date"
                    value={values.dateFrom}
                    name="dateFrom"
                    onChange={handleSetInputs}
                    placeholder="Od"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input
                    type="date"
                    value={values.dateTo}
                    name="dateTo"
                    onChange={handleSetInputs}
                    placeholder="Do"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <br />
            <div class="row">
              <div class="col">
                <div class="form-outline">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    name="transport"
                    onChange={handleSetSeletcs}
                  >
                    <option>Transport</option>
                    <option value="Samolot">Samolot</option>
                    <option value="Autokar">Autokar</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                <select
                    className="form-select"
                    aria-label="Default select example"
                    name="hotelStars"
                    onChange={handleSetSeletcs}
                  >
                    <option>Gwiazdki</option>
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <input
                    type="text"
                    value={values.price}
                    name="price"
                    onChange={handleSetInputs}
                    placeholder="Cena"
                    class="form-control"
                  />
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                <select
                    className="form-select"
                    aria-label="Default select example"
                    name="type"
                    onChange={handleSetSeletcs}
                  >
                    <option>Typ</option>
                    <option value="/sylwester">Sylwester</option>
                    <option value="/ferie">Ferie</option>
                    <option value="/majowka">Majowka</option>
                    <option value="/wakacje">Wakacje</option>
                  </select>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input
                    type="text"
                    value={values.img}
                    name="img"
                    onChange={handleSetInputs}
                    placeholder="Zdjecie"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-end">
              <button
                style={{ marginRight: "5px" }}
                type="submit"
                onSubmit={submitTrips}
                class="btn btn-primary"
              >
                Add
              </button>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
