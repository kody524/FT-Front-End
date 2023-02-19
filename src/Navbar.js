import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar({ setLoggedIn, loggedIn }) {
  const user = localStorage.getItem("user");
  return  (
    <div className={styles.navbar}>
      <nav className={styles.nav}>
        <ul>
          <Link
            className={styles.link}
            style={{ textDecoration: "none" }}
            to="/home"
          >
            Home
          </Link>
        </ul>
        <ul>
          <Link
            className={styles.link}
            style={{ textDecoration: "none" }}
            to="/routines"
          >
            Routines
          </Link>
        </ul>
          
            <Link
              className={styles.myroutine}
              style={{ textDecoration: "none" }}
              to="/myroutines"
            >
              My Routines
            </Link>
            <ul>
              <Link
                className={styles.link}
                style={{ textDecoration: "none" }}
                to="/activities"
              >
                Activities
              </Link>
            </ul>
       
        
       
   
            <span className={styles.user}>User:{user}</span>{" "}
            <ul>
              <Link
                className={styles.link}
                style={{ textDecoration: "none" }}
                to="/"
                onClick={() => {
                  setLoggedIn(false);
                  localStorage.clear();
                }}
              >
                Logout
              </Link>
            </ul>
  
      </nav>
    </div>
  
              )}

export default Navbar;
