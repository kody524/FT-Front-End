import Navbar from "./Navbar"
import styles from './SpecificUser.module.css'
import { specificRoutine } from "./allAPICalls";
import React, { useState, useEffect } from "react";
export function SpecificUser({setSpecificUser,user,setUser}){
    const [routines, setRoutines] = useState([]);
    
    useEffect(()=>{
   specificRoutine(user,setRoutines)
    },[])
    return(<>
        <Navbar/>
        {routines.map((ele, Index) => {
          return (
            <div className={styles.container} key={ele.id}>
              <div className={styles.title}>
                <h1>{ele.name}</h1>
              </div>
              <div className={styles.details}>
                <h2>User: {user}</h2>
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