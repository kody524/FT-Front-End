import Navbar from "./Navbar";
import React, { useState, useEffect } from "react";
import styles from "./Activities.module.css";
import { getActivities } from "./allAPICalls";
import { Link } from "react-router-dom";
import { SpecificActivity } from "./SpecificActivity";
import { ModalActivity } from "./ModalActivity";
import { ModalDelete } from "./ModalDelete";
export function Activities({
  activityName,
  activityDescription,
  modalCreateA,
  setModalCreateA,
  modalEditA,
  setModalEditA,
  setActivityName,
  setActivityDescription,
  activityId,
  setActivityId,
  modalDelete,
  setModalDelete,
  loggedIn,
}) {
  const [activities, setActivities] = useState([]);
  const [specificActivity, setSpecificActivity] = useState(false);
  function toggleModalCreate() {
    setModalCreateA(!modalCreateA);
  }
  function toggleModalEdit() {
    setModalEditA(!modalEditA);
  }

  useEffect(() => {
    getActivities(setActivities);
  }, []);
  return (
    <>
      <Navbar />
      <h1>Activities</h1>
      
        <button onClick={toggleModalCreate} className={styles.create}>
          Create Activity
        </button>
      
      {modalCreateA ? (
        <ModalActivity
          activityName={activityName}
          activityDescription={activityDescription}
          modalCreateA={modalCreateA}
          setModalCreateA={setModalCreateA}
          modalEditA={modalEditA}
          setModalEditA={setModalEditA}
          setActivityName={setActivityName}
          setActivityDescription={setActivityDescription}
        />
      ) : modalEditA ? (
        <ModalActivity
          activityName={activityName}
          activityDescription={activityDescription}
          modalCreateA={modalCreateA}
          setModalCreateA={setModalCreateA}
          modalEditA={modalEditA}
          setModalEditA={setModalEditA}
          setActivityName={setActivityName}
          setActivityDescription={setActivityDescription}
          activityId={activityId}
        />
      ) : modalDelete ? (
        <ModalDelete
          modalDelete={modalDelete}
          setModalDelete={setModalDelete}
          activityId={activityId}
          activityName={activityName}
        />
      ) : null}
      {specificActivity ? (
        <SpecificActivity
          activityId={activityId}
          setSpecificActivity={setSpecificActivity}
        />
      ) : (
        activities.map((ele, ind) => {
          return (
            <div key={ele.id} className={styles.container}>
              <Link
                onClick={() => {
                  setActivityId(ele.id);
                }}
                to="/specificactivity"
                className={styles.title}
              >
                {ele.name}
              </Link>
              <br></br>
              <h2>Description: {ele.description}</h2>
           
                <button
                  onClick={() => {
                    toggleModalEdit();
                    setActivityName(ele.name);
                    setActivityDescription(ele.description);
                    setActivityId(ele.id);
                  }}
                  className={styles.editdeletebtn}
                >
                  Edit
                </button>
              
            </div>
          );
        })
      )}
    </>
  );
}
