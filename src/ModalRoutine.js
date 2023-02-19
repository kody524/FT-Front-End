
import "./ModalRoutine.css";
import { createRoutine, editRoutine, editRoutineActivity } from "./allAPICalls";
export function Modal({
  name,
  goal,
  isPublic,
  modalCreateR,
  setModalCreateR,
  modalEditR,
  setModalEditR,
  setName,
  setGoal,
  routineId,
  setModalEditRA,
  modalEditRA,
  setCount,
  count,
  setDuration,
  duration,
  routineActivityId,
}) {
  const token = localStorage.getItem("token");
  const toggleModalCreate = () => {
    setModalCreateR(!modalCreateR);
  };
  const toggleModalEditR = () => {
    setModalEditR(!modalEditR);
  };
  const toggleModalEditRA = () => {
    setModalEditRA(!modalEditRA);
  };
  if (modalCreateR || modalEditR) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return modalEditR ? (
    <div className="modal">
      <div onClick={toggleModalCreate} className="overlay"></div>
      <div className="modal-content">
        <h2>Edit Routine</h2>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="inputs"
          placeholder={name}
          type="text"
        ></input>
        <br></br>
        <input
          onChange={(e) => {
            setGoal(e.target.value);
          }}
          className="inputs"
          placeholder={goal}
          type="text"
        ></input>
        <br></br>

        <button
          className="submit"
          onClick={() => {
            toggleModalCreate();
            editRoutine(token, routineId, name, goal);
          }}
        >
          Submit
        </button>
        <button
          className="close-modal"
          onClick={() => {
            if (modalCreateR) {
              setModalCreateR(false);
            } else if (modalEditR) {
              setModalEditR(false);
            }
          }}
        >
          X
        </button>
      </div>
    </div>
  ) : modalCreateR ? (
    <div className="modal">
      <div onClick={toggleModalCreate} className="overlay"></div>
      <div className="modal-content">
        <h2>Create Routine</h2>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="inputs"
          placeholder="Name"
          type="text"
        ></input>
        <br></br>
        <input
          onChange={(e) => {
            setGoal(e.target.value);
          }}
          className="inputs"
          placeholder="Goal"
          type="text"
        ></input>
        <br></br>

        <button
          className="submit"
          onClick={() => {
            toggleModalCreate();
            createRoutine(token, name, goal, isPublic);
          }}
        >
          Submit
        </button>
        <button
          className="close-modal"
          onClick={() => {
            if (modalCreateR) {
              setModalCreateR(false);
            } else if (modalEditR) {
              setModalEditR(false);
            }
          }}
        >
          X
        </button>
      </div>
    </div>
  ) : (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>Edit Routine Activity</h2>
        <input
          onChange={(e) => {
            setCount(e.target.value);
          }}
          className="inputs"
          placeholder={count}
          type="number"
        ></input>
        <br></br>
        <input
          onChange={(e) => {
            setDuration(e.target.value);
          }}
          className="inputs"
          placeholder={duration}
          type="number"
        ></input>
        <br></br>

        <button
          className="submit"
          onClick={() => {
            toggleModalEditRA();
            editRoutineActivity(routineActivityId, count, duration, token);
          }}
        >
          Submit
        </button>
        <button
          className="close-modal"
          onClick={() => {
            if (modalEditRA) {
              setModalEditRA(false);
            }
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}
