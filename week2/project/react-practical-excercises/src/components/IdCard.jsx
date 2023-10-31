import React from "react";

function IdCard(props) {
  return (
    <div className="IdCard box">
      <img src={props.picture} />
      <div className="IdCard-info">
        <strong>Lastname:</strong> {props.lastName}
        <br/>
        <strong>Firstname:</strong> {props.firstName}
        <br/>
        <strong>Gender:</strong> {props.gender}
        <br/>
        <strong>Height:</strong> {props.height / 100}m
        <br/>
        <strong>Birth date:</strong> {props.birth.toDateString()}
        <br/>
      </div>
    </div>
  );
}

export default IdCard;
