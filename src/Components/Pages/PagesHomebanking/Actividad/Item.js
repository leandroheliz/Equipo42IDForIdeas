import React from "react";

const Item = () => {
  return (
    <div className="container-fluid">
      <div className="item-exchange">
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum.
          </p>
        </div>
        <div className="exchange">
          <p>$##########</p>
          <p>Fecha</p>
        </div>
        <i class="fas fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default Item;
