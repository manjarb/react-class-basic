import { useState } from "react";

export function Input() {
  const [firstName, setFirstName] = useState("varis");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  const fullName = firstName + " " + lastName;

  // function onChangeInput(e) {
  //   document.getElementsByTagName('input')[0].value = e.target.value;
  //   document.getElementsByClassName('first-name')[0].textContent = e.target.value;
  // }

  // const onInputChange = (event, key) => {
  //   switch (key) {
  //     case 'input1':
  //       setInput1(event.target.value)
  //       break;
    
  //     default:
  //       break;
  //   }
  // }

  return (
    <>
      <h2>Let’s check you in</h2>

      <label>
        First name: <input value={firstName} onChange={handleFirstNameChange}/>
      </label>
      <label>
        Last name: <input value={lastName} onChange={handleLastNameChange} />
      </label>
      <p>
        Your ticket will be issued to: <b className="first-name">{fullName}</b>
      </p>
    </>
  )
}