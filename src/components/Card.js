import React from "react";

export default function Card(props) {
    console.log(props) //the "item" property in our props is the object that contains all of our properties
    return (
        <div className="cards">
            <div className="image--container">
                <img src={`../images/${props.item.imageUrl}`} className="card--image" alt="different locations to visit"/>
            </div>
            <div className="card--info">
                <div className="top--info">
                    <div className="pointer--location">
                        <img src="../images/Fill-219.png" className="edit--pin" alt="a pin used to mark a location"/>
                    </div>
                    <p className="location--name">{props.item.location}</p>
                    <a href={props.item.googleMapsUrl} className="url--edit">View on Google Maps</a>
                </div>
                <div className="bottom--info">
                    <p className="bottom--title">{props.item.title}</p>
                    <p className="bottom--dates">{props.item.startDate}-{props.item.endDate}</p>
                    <p className="bottom--description">{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}