import React from 'react'

export const NameAndImage = (props) => {
    return (
        <div style={{display:"flex", justifyContent:"center"}}>
           <img src={props.info.img} class="img-fluid" alt="Responsive image" />          
        </div>
    )
}
