import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Login from "./Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./Register";
import { Home } from "./Home";
import { Routine } from "./Routine";
import { Activities } from "./Activities";
import { MyRoutines } from "./MyRoutines";
import { SpecificUser } from "./SpecificUser";
import { SpecificActivity } from "./SpecificActivity";

function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [activtyId, setActivityId] = useState(0);
  const [routineId, setRoutineId] = useState(0);
  const [routineActivityId, setRoutineActivityId] = useState(0);
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [count, setCount] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPublic, setIsPublic] = useState(true);
  const [modalCreateR, setModalCreateR] = useState(false);
  const [modalEditR, setModalEditR] = useState(false);
  const [modalCreateA, setModalCreateA] = useState(false);
  const [modalEditA, setModalEditA] = useState(false);
  const [modalEditRA, setModalEditRA] = useState(false);
  const [activityName, setActivityName] = useState("");
  const [activityDescription, setActivityDescription] = useState("");
  const [modalDelete, setModalDelete] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              setUsername={setUsername}
              setPassword={setPassword}
              password={password}
              username={username}
              setLoggedIn={setLoggedIn}
              loggedIn={loggedIn}
            />
          }
        ></Route>
        <Route
          path="/register"
          element={
            <Register
              setUsername={setUsername}
              setPassword={setPassword}
              password={password}
              username={username}
            />
          }
        ></Route>
        <Route
          path="/home"
          element={<Home setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}
        ></Route>
        <Route
          path="/routines"
          element={
            <Routine setUser={setUser} user={user} loggedIn={loggedIn} />
          }
        ></Route>
        <Route
          path="/activities"
          element={
            <Activities
              modalDelete={modalDelete}
              setModalDelete={setModalDelete}
              activityId={activtyId}
              setActivityId={setActivityId}
              activityName={activityName}
              activityDescription={activityDescription}
              modalCreateA={modalCreateA}
              setModalCreateA={setModalCreateA}
              modalEditA={modalEditA}
              setModalEditA={setModalEditA}
              setActivityName={setActivityName}
              setActivityDescription={setActivityDescription}
              setLoggedIn={setLoggedIn}
              loggedIn={loggedIn}
            />
          }
        ></Route>
        <Route
          path="/myroutines"
          element={
            <MyRoutines
              routineActivityId={routineActivityId}
              setRoutineActivityId={setRoutineActivityId}
              modalEditRA={modalEditRA}
              setModalEditRA={setModalEditRA}
              activityId={activtyId}
              setActivityId={setActivityId}
              modalDelete={modalDelete}
              setModalDelete={setModalDelete}
              name={name}
              goal={goal}
              isPublic={isPublic}
              modalCreateR={modalCreateR}
              setModalCreateR={setModalCreateR}
              modalEditR={modalEditR}
              setModalEditR={setModalEditR}
              modalCreateA={modalCreateA}
              setModalCreateA={setModalCreateA}
              modalEditA={modalEditA}
              setModalEditA={setModalEditA}
              setName={setName}
              setGoal={setGoal}
              routineId={routineId}
              setRoutineId={setRoutineId}
              count={count}
              setCount={setCount}
              duration={duration}
              setDuration={setDuration}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
            />
          }
        ></Route>
        <Route
          path="/specificUser"
          element={<SpecificUser user={user} setUser={setUser} />}
        ></Route>
        <Route
          path="/specificactivity"
          element={
            <SpecificActivity activityId={activtyId} loggedIn={loggedIn} />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
