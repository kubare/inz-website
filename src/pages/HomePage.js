import React from 'react'
import Header from '../components/homeComponents/Header';
import HomeTrips from '../components/homeComponents/HomeTrips';

const HomePage = () => {

    return (
        <>
            <div className="float-right">
                <Header />
            </div>

            <div style={{ paddingTop: "35px", paddingBottom: "10px" }} className="text-center">
                <h3 className="font">Hot Destination</h3>
            </div>

            <div className="row">
                <div className="col">
                
                </div>
                <div className="col-6">
                <HomeTrips />
                </div>
                <div className="col">
                </div>
                <div style={{paddingTop: "35px"}}>

                </div>
            </div>
        </>
    )
}

export default HomePage;