import React from 'react'
import { Form } from 'react-bootstrap'

const FilterTrips = ({handleSearch}) => {
    return (
        <div style={{paddingTop: "40px"}}>
        <div className="font">
            <h5>Search for trips..</h5>
        </div>
            <Form.Control type="text" placeholder="Search" onChange={handleSearch}/>
        </div>
    )
}

export default FilterTrips;