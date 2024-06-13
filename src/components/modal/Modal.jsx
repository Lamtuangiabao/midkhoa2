import React from "react";
import "./modal.css";

const modal = ({ des, id, hinhAnh, ep, name, close }) => {
  return (
    <>
      <div className="c1">
        <div className="one">
          <img src={hinhAnh} alt="" />
        </div>
        <div className="two">
          <div>Id : {id} </div>
          <div>{name} </div>
          <div>{des} </div>
          <div>{ep}</div>
          <button onClick={close}>close</button>
        </div>
      </div>
    </>
  );
};

export default modal;
