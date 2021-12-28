import React, { useState, useEffect } from "react";
import {useLocation, Link } from "react-router-dom";
import axios from "axios";
import ProductMiniature from "../components/ProductMiniature";
import FilterTrips from "../components/FilterTrips";

const ListTrips = (props) => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const {type} = useLocation();

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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredProducts = data.filter((product) => {
    return product.country.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <FilterTrips handleSearch={handleSearch} />
          </div>
          <div className="col-sm-10">
            <div
              style={{ justifyContent: "space-around", paddingTop: "20px" }}
              className="d-flex align-content-center flex-wrap"
            >
              {filteredProducts.map((product) => {
                if (product.type === window.location.pathname)
                  return (
                    <ProductMiniature
                      key={product._id}
                      link={`/trip/${product._id}`}
                      img={product.img}
                      country={product.country}
                      city={product.city}
                      dateFrom={product.dateFrom}
                      dateTo={product.dateTo}
                      price={product.price}
                      maxPersons={product.maxPersons}
                      transport={product.transport}
                    />
                  );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListTrips;
