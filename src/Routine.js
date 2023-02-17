import Navbar from "./Navbar";
import styles from "./Routine.module.css";
import React, { useState, useEffect } from "react";
import { SpecificUser } from "./SpecificUser";
import { getRoutines} from "./allAPICalls";
import { Link } from "react-router-dom";
export function Routine({user,setUser}) {
  const [routines, setRoutines] = useState([]);
const [specificUser,setSpecificUser]=useState(false)

console.log(specificUser)
  useEffect(() => {
    getRoutines(setRoutines);
  }, []);

  return (
    <>
      <Navbar />
      {specificUser?<SpecificUser setSpecificUser={setSpecificUser}/>:
        routines.map((ele, Index) => {
          return (
            <div className={styles.container} key={ele.id}>
              <div className={styles.title}>
                <h1>{ele.name}</h1>
              </div>
              <div className={styles.details}>
                <Link to="/specificUser" onClick={(e)=>{
                 setSpecificUser(true)
                  const user = e.target.innerText.slice(5)
                  setUser(user)
                }} className={styles.creator} style={{ textDecoration: "none" }}>User:{ele.creatorName}</Link>
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
    
      )
}

