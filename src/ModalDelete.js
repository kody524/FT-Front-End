import React, { useEffect, useState } from "react";
import "./ModalDelete.css";
import { deleteRoutine } from "./allAPICalls";
export function ModalDelete({
  setModalDelete,
  modalDelete,
  activityName,
  name,
  activityId,
  routineId,
}) {
  const token = localStorage.getItem("token");
  const toggleModalDelete = () => {
    setModalDelete(!modalDelete);
  };
  if (modalDelete) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return name ? (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>Delete {name}</h2>
        <p>Are you sure you want to delete this routine?</p>
        <button
          className="btns"
          onClick={() => {
            toggleModalDelete();
            deleteRoutine(routineId, token);
          }}
        >
          Yes
        </button>
        <button className="btns" onClick={toggleModalDelete}>
          No
        </button>
        <button className="close-modal" onClick={toggleModalDelete}>
          X
        </button>
      </div>
    </div>
  ) : (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <p>Which Activity do you want to attach to?</p>

        <button
          className="btns"
          onClick={() => {
            toggleModalDelete();
          }}
        >
          Submit
        </button>

        <button className="close-modal" onClick={toggleModalDelete}>
          X
        </button>
      </div>
    </div>
  );
}
