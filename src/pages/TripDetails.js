import React, {useState, useEffect} from "react";
import {useParams, Link } from "react-router-dom";
import axios from 'axios'
import { NameAndImage } from "../components/tripDetailsComponents/NameAndImage";
import { DetailsInformation } from "../components/tripDetailsComponents/DetailsInformation";

const TripDetails = () => {

  const [data, setData] = useState([]);
  const {_id} = useParams();
  
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

  const product = data.find(x => x._id === _id)
    if(!product) {
        return <div>Product not found</div>
    }


  return (
    <>
    <div class="container">
        <div class="row">

            <div class="col-14">
                <NameAndImage info={product} /> 
            </div>
            <div class="w-100"></div>
            <div class="col-14">
                <DetailsInformation />
            </div>
        </div>
    </div>    


      <Link to="/">Back</Link>
    </>
  );
}

export default TripDetails;