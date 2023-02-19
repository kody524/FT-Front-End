
import "./ModalActivity.css";
import { editActivity } from "./allAPICalls";
export function ModalActivity({
  activityName,
  activityDescription,
  setActivityName,
  setActivityDescription,
  modalCreateA,
  setModalCreateA,
  modalEditA,
  setModalEditA,
  activityId,
}) {
  console.log(modalCreateA,modalEditA)
  const token = localStorage.getItem("token");
  const toggleModalCreateA = () => {
    setModalCreateA(!modalCreateA);
  };
  const toggleModalEditA = () => {
    setModalEditA(!modalEditA);
  };
  if (modalCreateA || modalEditA) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return modalEditA ? (
    <div className="modal">
      <div className="overlay"></div>
      <div className="modal-content">
        <h2>Edit Activity</h2>
        <input
          onChange={(e) => {
            setActivityName(e.target.value);
          }}
          className="inputs"
          placeholder={activityName}
          type="text"
        ></input>
        <br></br>
        <input
          onChange={(e) => {
            setActivityDescription(e.target.value);
          }}
          className="inputs"
          placeholder={activityDescription}
          type="text"
        ></input>
        <br></br>

        <button
          className="submit"
          onClick={() => {
            toggleModalEditA();
            editActivity(token, activityId, activityName, activityDescription);
          }}
        >
          Submit
        </button>
        <button
          className="close-modal"
          onClick={() => {
            if (modalCreateA) {
              setModalCreateA(false);
            } else if (modalEditA) {
              setModalEditA(false);
            }
          }}
        >
          X
        </button>
      </div>
    </div>
  ) : (
    <div className="modal">
      <div onClick={toggleModalCreateA} className="overlay"></div>
      <div className="modal-content">
        <h2>Create Activity</h2>
        <input
          onChange={(e) => {
            setActivityName(e.target.value);
          }}
          className="inputs"
          placeholder="Name"
          type="text"
        ></input>
        <br></br>
        <input
          onChange={(e) => {
            setActivityDescription(e.target.value);
          }}
          className="inputs"
          placeholder="Description"
          type="text"
        ></input>
        <br></br>

        <button
          className="submit"
          onClick={() => {
            toggleModalCreateA();
          }}
        >
          Submit
        </button>
        <button
          className="close-modal"
          onClick={() => {
            if (modalCreateA) {
              setModalCreateA(false);
            } else if (modalEditA) {
              setModalEditA(false);
            }
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}
