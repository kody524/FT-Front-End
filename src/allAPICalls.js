export async function register(username,password){
    try{
      const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: username,
    password: password
  })

    })
const data = await response.json()
console.log(data)
if(data.message==="you're signed up!"){
    alert(data.message)
}else{
    alert(data.message)
}
}catch(e){
console.log(e,"register error")
}
}

export async function login(username,password,setLoggedIn){
    try{
       const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/login', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: username,
    password: password
  })
})
const json = await response.json()
console.log(json)
if(json.message==="Username or password is incorrect"){
    alert(json.message)
}else{
    setLoggedIn(true)
    localStorage.setItem("token", json.token)
    localStorage.setItem("user",json.user.username)
}
    }catch(e){
        console.log(e,"login error")
    }
}
export async function getRoutines(setRoutines){
  try{
   const response= await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
   
 headers: {
    'Content-Type': 'application/json',
  },
})
const data = await response.json()
setRoutines(data)


  }catch(e){
    console.log(e,"routines error")
  }
}
export async function specificRoutine(user,setRoutines){
  try{
    const data = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${user}/routines`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const response = await data.json()
 
    setRoutines(response)
  }catch(e){
    console.log(e,"error grabbing specific routines")
  }
}
export async function getActivities(setActivities){
  try{
   const data =await fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      const response = await data.json()
      setActivities(response)
      
  }catch(e){
    console.log(e,"error getting activities")
  }
}
export async function singleActivity(activityId,setRoutines){
try{
  const data = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/activities/${activityId}/routines`, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const response = await data.json()
  setRoutines(response)
  console.log(response)
}catch(e){
  console.log(e,"error fetching specific activity")
}
}
export async function createRoutine(token,name,goal,isPublic){
  try{
   const data = await fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: name,
        goal: goal,
        isPublic: isPublic
      })
    })
      .catch(console.error);
  }catch(e){
    console.log(e,"error creating routine")
  }
}