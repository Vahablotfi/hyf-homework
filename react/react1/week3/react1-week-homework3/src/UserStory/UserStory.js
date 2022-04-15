/*
This file is for the react week3 exercise  time registration user-story project 
link : https://github.com/HackYourFuture-CPH/React/blob/main/react1/week3/lesson-plan.md#mockups
 I divided the project into two parent components one of them is SubmitForms.js  for adding
 names and start/end shifts.The other one is ShiftOverview.js, which has the task of
 showing a list of employees and their shifts ,and also a search field for searching names
we had to fetch a list of 3 and set it as default list. I used a state hook called
shifts and fetchShifts and useEffect hook to get the default data and initiate it with 
the shifts state which will be passed as props to the ShiftOverview component.
Add shifts function would be passed as props to SubmitForms component and has the task
of adding new shift (Object) to the shifts array. 
Each of this two components are child of another parent component called popup. popup children component
will be displayed whenever we change the value of employeeButton and EmployerButton
for that purpose I made two buttons one called employee (to display the submitFormS). and the other one called 
employer (to show the ShiftOverview). Each button has a state with same name with the default value 
of false and we can change the value by clicking on the button and the value could be set to 
false again with clicking on close button inside the popup component.

there will be more explanation inside each component file.

*/
import React from "react";
import "./UserStory.css";
import { useEffect, useState } from "react";
import SubmitForms from "./SubmitForms";
import ShiftOverview from "./ShiftOverview";
import Popup from "./Popup";

function UserStory() {
  const [shifts, setShifts] = useState([]);
  const [employeeButton, setEmployeeButton] = useState(false);
  const [employerButton, setEmployerButton] = useState(false);

  useEffect(() => {
    const getShifts = async () => {
      const savedShifts = await fetchShifts();
      setShifts(savedShifts);
    };
    getShifts();
  }, []);

  const fetchShifts = async () => {
    const res = await fetch(
      " https://gist.githubusercontent.com/benna100/5fd674171ea528d7cd1d504e9bb0ca6f/raw"
    );
    const data = await res.json();
    return data;
  };

  const addShifts = (shift) => {
    setShifts([...shifts, shift]);
  };

  return (
    <div>
      <div className="emp-btn">
        <button className="popup-btn" onClick={() => setEmployeeButton(true)}>
          Employee
        </button>
        <button className="popup-btn" onClick={() => setEmployerButton(true)}>
          Employer
        </button>
      </div>

      <Popup trigger={employeeButton} setTrigger={setEmployeeButton}>
        <div className="submitContainer">
          <SubmitForms onAdd={addShifts}></SubmitForms>
        </div>
      </Popup>
      <Popup trigger={employerButton} setTrigger={setEmployerButton}>
        <div className="shift-Overview container">
          <ShiftOverview shifts={shifts}></ShiftOverview>
        </div>
      </Popup>
    </div>
  );
}

export default UserStory;
