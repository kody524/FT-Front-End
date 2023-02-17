import styles from "./Register.module.css";
import { Link } from 'react-router-dom';
import { register } from "./allAPICalls";
import { TextField } from "@mui/material";
export function Register({
  setUsername,
  setPassword,
  username,
  password,
  setLoggedIn,
}) {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h2 className={styles.title}>Register</h2>
        <TextField
          value={username}
          required
          id="outlined-required"
          label="Username"
          className={styles.input1}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          value={password}
          className={styles.input2}
          required
          id="outlined-required"
          label="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            register(username, password, setLoggedIn);
          }}
          className={styles.btn}
        >
          Submit
        </button>
        <Link to="/" className={styles.link} style={{ textDecoration: "none" }}>
          Go Login!
        </Link>
      </div>
    </div>
  );
}
