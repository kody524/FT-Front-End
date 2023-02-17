import Navbar from "./Navbar"
import React, { useState, useEffect } from "react";
import styles from './Activities.module.css'
import { getActivities } from "./allAPICalls";
import { Link } from "react-router-dom"; 
import { SpecificActivity } from "./SpecificActivity";
export function Activities({activityId,setActivityId}){
    const [activities,setActivities]= useState([])
    const[specificActivity,setSpecificActivity]=useState(false)
    
console.log(activityId)
    useEffect(()=>{
        getActivities(setActivities)
    },[])
    return (<>
        <Navbar/>
        {specificActivity?<SpecificActivity activityId={activityId}setSpecificActivity={setSpecificActivity}/>:
         
            activities.map((ele,ind)=>{
              
              return (
                <div key={ele.id} className={styles.container}>
      <Link onClick={()=>{
        setActivityId(ele.id)
        }} to="/specificactivity" className={styles.title}>{ele.name}</Link>
      <h2>Description: {ele.description}</h2>
                </div>
              )
            })
        }
       
    </>)
}