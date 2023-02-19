

export async function register(username, password) {
  try {
    const response = await fetch(
      "https://fitnesstrac-kr.herokuapp.com/api/users/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );
    const data = await response.json();

    if (data.message === "you're signed up!") {
      alert(data.message);
    } else {
      alert(data.message);
    }
  } catch (e) {
    console.log(e, "register error");
  }
}

export async function login(username, password, setLoggedIn) {
  try {
    const response = await fetch(
      "https://fitnesstrac-kr.herokuapp.com/api/users/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      }
    );
    const json = await response.json();

    if (json.message === "Username or password is incorrect") {
      alert(json.message);
    } else {
      setLoggedIn(true);
      localStorage.setItem("token", json.token);
      localStorage.setItem("user", json.user.username);
    }
  } catch (e) {
    console.log(e, "login error");
  }
}
export async function getRoutines(setRoutines) {
  try {
    const response = await fetch(
      "https://fitnesstrac-kr.herokuapp.com/api/routines",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setRoutines(data);
  } catch (e) {
    console.log(e, "routines error");
  }
}
export async function specificRoutine(user, setRoutines) {
  try {
    const data = await fetch(
      `https://fitnesstrac-kr.herokuapp.com/api/users/${user}/routines`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await data.json();

    setRoutines(response);
  } catch (e) {
    console.log(e, "error grabbing specific routines");
  }
}
export async function getActivities(setActivities) {
  try {
    const data = await fetch(
      "https://fitnesstrac-kr.herokuapp.com/api/activities",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await data.json();
    setActivities(response);
  } catch (e) {
    console.log(e, "error getting activities");
  }
}
export async function singleActivity(activityId, setRoutines) {
  try {
    const data = await fetch(
      `https://fitnesstrac-kr.herokuapp.com/api/activities/${activityId}/routines`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await data.json();
    setRoutines(response);
  } catch (e) {
    console.log(e, "error fetching specific activity");
  }
}
export async function createRoutine(token, name, goal, isPublic) {
  try {
    const data = await fetch(
      "https://fitnesstrac-kr.herokuapp.com/api/routines",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          goal: goal,
          isPublic: isPublic,
        }),
      }
    );
    const response = await data.json();
    if(!response.message){
alert("Routine Created!")
    }
  } catch (e) {
    console.log(e, "error creating routine");
  }
}
export async function editActivity(
  token,
  activityId,
  activityName,
  activityDescription
) {
  try {
    const data = await fetch(
      `https://fitnesstrac-kr.herokuapp.com/api/activities/${activityId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: activityName,
          description: activityDescription,
        }),
      }
    );
    const response = await data.json();
    if(!response.message){
      alert("Activity Edited")
    }
  } catch (e) {
    console.log(e, "error editing activity");
  }
}
export async function editRoutine(token, routineId, name, goal) {
  try {
    const data = await fetch(
      `https://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: name,
          goal: goal,
        }),
      }
    );
    const response = await data.json();
    if(!response.message){
      alert("Routine Edited")
    }
  } catch (e) {
    console.log(e, "error editing routine");
  }
}
export async function deleteRoutine(routineId, token) {
  try {
    const data = await fetch(
      `https://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const response = await data.json();
    if (response.success) {
      alert("routine deleted");
    }
  } catch (e) {
    console.log(e, "error deleting routine");
  }
}
export async function addActivityToRoutine(
  routineId,
  activityId,
  count,
  duration,
  token
) {
  try {
    const data = await fetch(
      `https://fitnesstrac-kr.herokuapp.com/api/routines/${routineId}/activities`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          activityId: Number(activityId),
          count: Number(count),
          duration: Number(duration),
        }),
      }
    );
    const response = await data.json();
    if (!response.message) {
      alert("Activity Attatched");
    }
  } catch (e) {
    console.log(e, "error attatching activity");
  }
}
export async function deleteRoutineActivity(routine_activityId, token) {
  try {
    const data = await fetch(
      `https://fitnesstrac-kr.herokuapp.com/api/routine_activities/${routine_activityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const response = await data.json();
    if (response.success) {
      alert("Routine Activity Deleted");
    }
  } catch (e) {
    console.log(e, "error deleting activity");
  }
}
export async function editRoutineActivity(
  routineActivityId,
  count,
  duration,
  token
) {
  try {
    const data = await fetch(
      `https://fitnesstrac-kr.herokuapp.com/api/routine_activities/${routineActivityId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          count: Number(count),
          duration: Number(duration),
        }),
      }
    );
    const response = await data.json();
    if(!response.message){
      alert("Activity edited")
    }
  } catch (e) {
    console.log(e);
  }
}
