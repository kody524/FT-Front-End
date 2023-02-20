import Navbar from "./Navbar";
import styles from "./Home.module.css";
export function Home({ setLoggedIn, loggedIn }) {
  const user = localStorage.getItem("user");
  return (
    <>
      <Navbar setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
      <div className={styles.title}>
        <h1>Welcome {user} to FitnessTrckr!</h1>
        <h3>
          Go checkout Rouines and Activities! If you dont see any that you like
          go make some!
        </h3>
      </div>
    </>
  );
}
