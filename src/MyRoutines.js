import Navbar from "./Navbar";
import {
  specificRoutine,
  getActivities,
  addActivityToRoutine,
  deleteRoutineActivity,
} from "./allAPICalls";
import styles from "./MyRoutines.module.css";
import React, { useState, useEffect } from "react";
import { Modal } from "./ModalRoutine";
import { ModalDelete } from "./ModalDelete";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import "./ModalRoutine.css";
export function MyRoutines({
  name,
  goal,
  isPublic,
  modalCreateR,
  setModalCreateR,
  modalEditR,
  setModalEditR,
  setName,
  setGoal,
  routineId,
  setRoutineId,
  modalDelete,
  setModalDelete,
  count,
  setCount,
  duration,
  setDuration,
  setActivityId,
  activityId,
  modalEditRA,
  setModalEditRA,
  routineActivityId,
  setRoutineActivityId,
  setLoggedIn,
  loggedIn
}) {
  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [attach, setAttatch] = useState(false);
  const [attachActivity, setAttatchActivity] = useState("");
  function toggleModalCreate() {
    setModalCreateR(!modalCreateR);
  }
  function toggleModalEdit() {
    setModalEditR(!modalEditR);
  }
  function toggleModalDelete() {
    setModalDelete(!modalDelete);
  }
  const toggleModalEditRA = () => {
    setModalEditRA(!modalEditRA);
  };

  function findActivityId(value) {
    let find = activities.map((ele) => {
      if (ele.name === value) {
        setActivityId(ele.id);
      }
    });
  }
  const handleChange = (e) => {
    setAttatchActivity(e.target.value.toString());
  };
  useEffect(() => {
    specificRoutine(user, setRoutines);
    getActivities(setActivities);
  }, []);

  return (
    <>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <button onClick={toggleModalCreate} className={styles.create}>
        Create Routine
      </button>

      {modalCreateR ? (
        <Modal
          name={name}
          goal={goal}
          isPublic={isPublic}
          modalCreateR={modalCreateR}
          setModalCreateR={setModalCreateR}
          modalEditR={modalEditR}
          setModalEditR={setModalEditR}
          setName={setName}
          setGoal={setGoal}
          routineId={routineId}
        />
      ) : modalEditR ? (
        <Modal
          name={name}
          goal={goal}
          isPublic={isPublic}
          modalCreateR={modalCreateR}
          setModalCreateR={setModalCreateR}
          modalEditR={modalEditR}
          setModalEditR={setModalEditR}
          routineId={routineId}
        />
      ) : modalDelete ? (
        <ModalDelete
          modalDelete={modalDelete}
          setModalDelete={setModalDelete}
          name={name}
          routineId={routineId}
        />
      ) : modalEditRA ? (
        <Modal
          name={name}
          goal={goal}
          isPublic={isPublic}
          modalCreateR={modalCreateR}
          setModalCreateR={setModalCreateR}
          modalEditR={modalEditR}
          setModalEditR={setModalEditR}
          setName={setName}
          setGoal={setGoal}
          routineId={routineId}
          modalEditRA={modalEditRA}
          setModalEditRA={setModalEditRA}
          count={count}
          duration={duration}
          setCount={setCount}
          setDuration={setDuration}
          routineActivityId={routineActivityId}
          setRoutineActivityId={setRoutineActivityId}
        />
      ) : null}
      {routines.length < 1 ? (
        <>
          <h1>You have no Routines to Show. Go create one!</h1>
          <br></br>
        </>
      ) : (
        routines.map((ele, Index) => {
          return (
            <div className={styles.container} key={ele.id}>
              <div className={styles.title}>
                <h1>{ele.name}</h1>
              </div>
              <div className={styles.details}>
                <h2>Goal:{ele.goal}</h2>
                <br></br>
                <h1 className={styles.title}>Activities</h1>
                {ele.activities.length < 1 ? <h2>No Activities</h2> : null}
                <div>
                  {ele.activities.map((a, ind) => {
                    return (
                      <div key={a.id}>
                        {a.name ? (
                          <h2>
                            {" "}
                            {ind + 1}: {a.name}
                          </h2>
                        ) : (
                          <h2> {ind + 1}: N/A</h2>
                        )}
                        {a.description ? (
                          <h2>Description:{a.description}</h2>
                        ) : (
                          <h2>Description:N/A</h2>
                        )}
                        <h3>Count: {a.count}</h3>
                        <h3>Duration: {a.duration}</h3>
                        <br></br>
                        <button
                          onClick={() => {
                            deleteRoutineActivity(a.routineActivityId, token);
                          }}
                        >
                          DeleteActivity
                        </button>
                        <button
                          onClick={() => {
                            toggleModalEditRA();
                            setRoutineActivityId(a.routineActivityId);
                            setCount(a.count);
                            setDuration(a.duration);
                          }}
                        >
                          EditActivity
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              <button
                onClick={() => {
                  toggleModalEdit();
                  setName(ele.name);
                  setGoal(ele.goal);
                  setRoutineId(ele.id);
                }}
                className={styles.editdelete}
              >
                EditRoutine
              </button>
              <button
                onClick={() => {
                  toggleModalDelete();
                  setName(ele.name);
                  setRoutineId(ele.id);
                }}
                className={styles.editdelete}
              >
                DeleteRoutine
              </button>
              <button
                onClick={() => {
                  setAttatch(!attach);
                  setRoutineId(ele.id);
                }}
              >
                AttatchActivity
              </button>
              {attach && routineId === ele.id ? (
                <>
                  <Box sx={{ width: 360, margin: 1 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Activity
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        onChange={handleChange}
                        value={attachActivity}
                        onClick={() => {
                          findActivityId(attachActivity);
                        }}
                      >
                        {activities.map((ele, ind) => {
                          return (
                            <MenuItem key={ele.id} value={ele.name}>
                              {ele.name}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                  <input
                    onChange={(e) => {
                      setCount(e.target.value);
                    }}
                    className={styles.inputs}
                    placeholder="Count"
                    type="number"
                  ></input>
                  <br></br>
                  <div className={styles.inputcontainer}>
                    <input
                      onChange={(e) => {
                        setDuration(e.target.value);
                      }}
                      className={styles.inputs}
                      placeholder="Duration"
                      type="number"
                    ></input>
                    <button
                      onClick={() => {
                        addActivityToRoutine(
                          routineId,
                          activityId,
                          count,
                          duration,
                          token
                        );
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </>
              ) : null}
            </div>
          );
        })
      )}
    </>
  );
}
