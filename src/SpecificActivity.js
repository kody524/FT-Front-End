import Navbar from "./Navbar";
import styles from "./SpecificActivity.module.css";
import { singleActivity } from "./allAPICalls";
import React, { useEffect, useState } from "react";
export function SpecificActivity({ activityId, setSpecificActivity }) {
  console.log(activityId);
  const [routines, setRoutines] = useState([]);
  useEffect(() => {
    singleActivity(activityId, setRoutines);
  }, []);
  return (
    <>
      <Navbar />
      <h2>Routines that feature that Activity</h2>
      {routines.length < 1 ? (
        <h1>No routines feature that Activity</h1>
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
        })
      )}
    </>
  );
}
