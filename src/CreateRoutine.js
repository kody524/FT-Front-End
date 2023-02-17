import Navbar from "./Navbar";
import styles from "./CreateRoutine.module.css"
import React,{useEffect,useState} from "react";
export function CreateRoutine(){
    const token = localStorage.getItem("token");
    // return (
       
    //     <div className={styles.main}>
    //   <div className={styles.container}>
    //     <h2 className={styles.title}>Login</h2>
    // <TextField  
    // value={username}
    // required
    // id="outlined-required"
    //  label="Username"
    //  className={styles.input1}
    //  onChange={(e)=>{
    // setUsername(e.target.value)
    //  }}
    //  />
    // <TextField  
    // value={password}
    //  className={styles.input2}
    // required   
    // id="outlined-required"
    // label="Password"
    // onChange={(e)=>{
    //   setPassword(e.target.value)
    // }}
    // />
    // <button onClick={()=>{
    //   login(username,password,setLoggedIn)
    //   setUsername('')
    //   setPassword('')
    // }} className={styles.btn}>Submit</button>
    // <Link
    // to="/register"
    // className={styles.link}
    // style={{ textDecoration: "none" }}
    //  >
    //  Sign Up!
    //  </Link>
    //   </div>
    //   </div>
    //   );
}