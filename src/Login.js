import './Login.module.css';
import TextField from "@mui/material/TextField";
import styles from './Login.module.css'
import { login } from './allAPICalls';
import { Register } from './Register';
import { Button } from '@mui/material';
import { Link, Navigate } from 'react-router-dom';
function Login({setUsername,setPassword,username,password,setLoggedIn,loggedIn}) {
  return (
    loggedIn?<Navigate to="/home"></Navigate>:
    <div className={styles.main}>
  <div className={styles.container}>
    <h2 className={styles.title}>Login</h2>
<TextField  
value={username}
required
id="outlined-required"
 label="Username"
 className={styles.input1}
 onChange={(e)=>{
setUsername(e.target.value)
 }}
 />
<TextField  
value={password}
 className={styles.input2}
required   
id="outlined-required"
label="Password"
onChange={(e)=>{
  setPassword(e.target.value)
}}
/>
<button onClick={()=>{
  login(username,password,setLoggedIn)
  setUsername('')
  setPassword('')
}} className={styles.btn}>Submit</button>
<Link
to="/register"
className={styles.link}
style={{ textDecoration: "none" }}
 >
 Sign Up!
 </Link>
  </div>
  </div>
  );
}

export default Login;
