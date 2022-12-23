import React, { useContext, useEffect, useState } from "react";
import BackgroundContext from "./contexts/BackgroundContext";
import ColorContext from "./contexts/ColorContext";
import btnContext from "./contexts/BtnContext";
import useExercicesList from "./customhooks/useExercicesList";
import { check } from "prettier";

const today = new Date().toLocaleString().split(",")[0];
const NewComponent = () => {
  const [date, setDate] = useState(today); // eslint-disable-line
  const [muscle, setMuscle] = useState("biceps"); //to change later to any kind of random muscle
  const [changedMuscle, setChangedMuscle] = useState();
  const [background, setBackground] = useContext(BackgroundContext); // eslint-disable-line no-unused-vars
  const [color, setColor] = useContext(ColorContext); // eslint-disable-line no-unused-vars
  const [btnColor, setbtnColor] = useContext(btnContext); // eslint-disable-line no-unused-vars
  const [excercicesList, setExercicesList, status] = useExercicesList(muscle); //eslint-disable-line no-unused-vars

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChangedMuscle(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setMuscle(changedMuscle);
    console.log(muscle);
  };

  const handleChangeCheckBox = (item) => {
    const newArray = [...excercicesList];
    const index = newArray.indexOf(item);
    newArray[index].done = !item.done;
    setExercicesList(newArray);
  };

  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1 style={{ color: color }} id="title">
        Welcome to the best gym companion app
      </h1>
      <main id="todolist" style={{ background: background }}>
        <h1>
          Gym list of todos for {date}
          <span>Get things done, one item at a time.</span>
        </h1>
        <template v-if="todo.length" />
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
          {excercicesList?.map((item, index) => (
            <li
              style={{}}
              key={index}
              className={item.done ? "done" : "undone"}
            >
              <span className="label">{item.name}</span>
              <div className="actions">
                <button
                  type="button"
                  aria-label="Done"
                  title="Done"
                  className="btn-picto"
                >
                  <i
                    aria-hidden="true"
                    className="material-icons"
                    onClick={() => {
                      handleChangeCheckBox(item);
                    }}
                  >
                    {item.done ? "check_box" : "check_box_outline_blank"}
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
          <input
            type="text"
            name="newitem"
            id="newitem"
            v-model="newitem"
            onChange={handleChange}
          />
          <button onClick={handleClick} style={{ color: btnColor }}>
            Change
          </button>
        </form>
      </main>
    </div>
  );
};

export default NewComponent;
