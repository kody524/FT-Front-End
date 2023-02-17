import Navbar from "./Navbar";
import { specificRoutine } from "./allAPICalls";
import styles from "./MyRoutines.module.css"
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Backdrop } from "@mui/material";
export function MyRoutines() {
    const user = localStorage.getItem("user")
  const [routines, setRoutines] = useState([]);
  useEffect(()=>{
    specificRoutine(user,setRoutines)
  },[])

  return (
    
    <>
      <Navbar />
      <Link to="/creatroutine"><button>Create Routine</button></Link>
      {
      routines.length<1?(<>
      <h1>You have no Routines to Show. Go create one!</h1>
      <br></br>
      </>):
      routines.map((ele, Index) => {
        return (
          <div className={styles.container} key={ele.id}>
            <div className={styles.title}>
              <h1>{ele.name}</h1>
            </div>
            <div className={styles.details}>
              <br></br>
              <h2>Goal:{ele.goal}</h2>
              <br></br>
              <h1 className={styles.title}>Activities</h1>
              {ele.activities.length < 1 ? <h2>No Activities</h2> : null}
              <div>
                {ele.activities.map((a, ind) => {
                  return (
                    <div key={a.id}>
                      <h2>
                        {ind + 1}: {a.name}
                      </h2>
                      <h2>Description: {a.description}</h2>
                      <h3>Count: {a.count}</h3>
                      <h3>Duration: {a.duration}</h3>
                      <br></br>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
