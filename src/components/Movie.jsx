import "./movie.css";
import { useState } from "react";
import Modal from "./modal/Modal";
//id unique,requird
// name max length 100,required
// birthyear > curent year ,def 199-
// address max lenght 255
import React from "react";

const movie = ({ des, id, hinhAnh, ep, name }) => {
  //logic
  const [isOpen, setIsOpen] = useState(false);

  const handleopen = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div onClick={handleopen} className="child">
        <img src={hinhAnh} />
        <div id="ep">
          <div>{ep}</div>
          <div id="name">
            <b>{name}</b>
          </div>
        </div>
      </div>
      {isOpen && (
        <Modal
          id={id}
          hinhAnh={hinhAnh}
          ep={ep}
          name={name}
          des={des}
          close={close}
        />
      )}
    </>
  );
};

export default movie;
