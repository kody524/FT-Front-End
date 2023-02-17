import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import Login from './Login';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from './Register';
import { Home } from './Home';
import { Routine } from './Routine';
import { Activities } from './Activities';
import { MyRoutines } from './MyRoutines';
import { SpecificUser } from './SpecificUser';
import { SpecificActivity } from './SpecificActivity';
import { CreateRoutine } from './CreateRoutine';

function Index(){
  const[username,setUsername]=useState('')
  const[password,setPassword]=useState('')
  const[loggedIn,setLoggedIn]=useState(false)
  const[activtyId,setActivityId]=useState(0)
 const[user,setUser]=useState('')


  return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login setUsername={setUsername} setPassword={setPassword} password={password} username={username} setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>}></Route>
    <Route path="/register" element={<Register setUsername={setUsername} setPassword={setPassword} password={password} username={username} />}></Route>
    <Route path="/home" element={<Home setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>}></Route>
    <Route path='/routines' element={<Routine setUser={setUser} user={user}/>}></Route>
    <Route path='/activities' element={<Activities setActivityId={setActivityId}/>}></Route>
    <Route path="/myroutines" element={<MyRoutines/>}></Route>
    <Route path="/specificUser" element={<SpecificUser user={user} setUser={setUser}/>}></Route>
    <Route path="/specificactivity" element={<SpecificActivity activityId={activtyId}/>}></Route>
    <Route path="/createroutine" element={<CreateRoutine/>}></Route>
  </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Index/>
 );


