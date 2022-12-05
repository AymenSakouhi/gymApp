import React, { useEffect, useState } from "react";
import data from "./data/data.json";

const today = new Date().toLocaleString().split(",")[0];
let muscle = "biceps"; // eslint-disable-line
const NewComponent = () => {
  const [date, setDate] = useState(today); // eslint-disable-line
  const [exercises, setExercices] = useState([]);

  useEffect(() => {
    getGymDailyTodos();

    if (!exercises.length) {
      console.log("empty");
      setExercices(data);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  //initially a fetch, later on will return it back to as it was.
  const getGymDailyTodos = () => {
    /* const res = await fetch(
      `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
      {
        headers: { "X-Api-Key": "D4xVCVZb7JamDQJUaw6KCA==3IVVUdCDX0K8n3PC" },
        contentType: "application/json",
      }
    ); */

    const result = data;

    // const result = res.json();
    return result;
  };

  return (
    <div>
      <main id="todolist">
        <h1>
          Gym list of todos for {date}
          <span>Get things done, one item at a time.</span>
        </h1>
        <template v-if="todo.length" />
        <p className="emptylist">Your todo list is empty.</p>
        <ul>
          <li className="done">
            <span className="label">Learn Press</span>
            <div className="actions">
              <button
                type="button"
                aria-label="Undone"
                title="Undone"
                className="btn-picto"
              >
                <i aria-hidden="true" className="material-icons">
                  check_box
                </i>
              </button>
              <button
                type="button"
                aria-label="Delete"
                title="Delete"
                className="btn-picto"
              >
                <i aria-hidden="true" className="material-icons">
                  delete
                </i>
              </button>
            </div>
          </li>
          <li style={{}}>
            <span className="label">Torso</span>
            <div className="actions">
              <button
                type="button"
                aria-label="Done"
                title="Done"
                className="btn-picto"
              >
                <i aria-hidden="true" className="material-icons">
                  check_box_outline_blank
                </i>
              </button>
              <button
                type="button"
                aria-label="Delete"
                title="Delete"
                className="btn-picto"
              >
                <i aria-hidden="true" className="material-icons">
                  delete
                </i>
              </button>
            </div>
          </li>
          {exercises.map((item, index) => (
            <li style={{}} key={index}>
              <span className="label">{item.name}</span>
              <div className="actions">
                <button
                  type="button"
                  aria-label="Done"
                  title="Done"
                  className="btn-picto"
                >
                  <i aria-hidden="true" className="material-icons">
                    check_box_outline_blank
                  </i>
                </button>
                <button
                  type="button"
                  aria-label="Delete"
                  title="Delete"
                  className="btn-picto"
                >
                  <i aria-hidden="true" className="material-icons">
                    delete
                  </i>
                </button>
              </div>
            </li>
          ))}
        </ul>
        <div className="togglebutton-wrapper togglebutton-checked">
          <label>
            <span className="togglebutton-label">{"something"}</span>
            <span className="tooglebutton-box" />
          </label>
          <input type="checkbox" v-model="isactive" />
        </div>
        <form name="newform">
          <label htmlFor="newitem">Type the muscle to work out here</label>
          <input type="text" name="newitem" id="newitem" v-model="newitem" />
          <button type="submit">Add item</button>
        </form>
      </main>
    </div>
  );
};

export default NewComponent;