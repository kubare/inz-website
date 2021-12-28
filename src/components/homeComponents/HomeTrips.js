import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductMiniature from '../ProductMiniature';

const HomeTrips = () => {
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


  //  let fourProducts = data.products.slice(1, 4)
 //   fourProducts = fourProducts.map(product => (
    let eightProducts = data.slice(1, 9);
     eightProducts = eightProducts.map((product) => (
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
       ))
        

    return (
        <>
        <div style={{justifyContent:"space-around", paddingTop:"20px"}} className="d-flex align-content-center flex-wrap pl-5 pr-5">
        {eightProducts}
        </div>
        </>
    )
}

export default HomeTrips;