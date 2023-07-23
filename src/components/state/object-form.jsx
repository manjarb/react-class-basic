import { useState } from "react";

export function ObjectForm () {
  const [person, setPerson] = useState({
    firstName: 'Varis',
    lastName: 'Darasirikul',
    email: 'varis.dara@gmail.com'
  })

  function handleFirstNameChange() {
    // setPerson({
    //   ...person,
    //   firstName: 'New name'
    // });

    setPerson(prev => {
      return {
        ...prev,
        firstName: 'New name 2'
      }
    })
  }

  return (
    <div>
      <button onClick={handleFirstNameChange}>Update first name to New name</button>
      <h1>{person.firstName}</h1>
    </div>
  )
}