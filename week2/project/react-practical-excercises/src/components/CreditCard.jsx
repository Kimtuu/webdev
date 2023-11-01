import React from "react";

function CreditCard(props) {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;
  const formattedNumber = `**** **** **** ${number.slice(-4)}`;

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <div className="type">{type}</div>
      <div className="number">{formattedNumber}</div>
      <div className="expiration">
        <span>
          Expires {expirationMonth.toString().padStart(2, "0")}/{expirationYear.toString()}
        </span>
      </div>
      <div className="bank">{bank}</div>
      <div className="owner">{owner}</div>
    </div>
  );
}

export default CreditCard;
