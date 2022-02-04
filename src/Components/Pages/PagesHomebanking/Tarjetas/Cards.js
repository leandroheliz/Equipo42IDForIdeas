import React from "react";

const Cards = () => {
  return (
    <div className="card-container mt-3">
      <div className="card-header-title">Plus Bank</div>
      <div className="card-number">
        <span>1321</span>
        <span>****</span>
        <span>****</span>
        <span>1321</span>
      </div>
      <div className="card-info">
        <div className="card-name">
          <div>Name</div>
          <div>John Doe</div>
        </div>
        <div className="card-date">
          <div>Hasta/Thru</div>
          <div>06/23</div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
