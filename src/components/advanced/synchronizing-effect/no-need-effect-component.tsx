import { useEffect, useState } from "react";

export function NoNeedEffectComponent() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");
  // const [fullName, setFullName] = useState('');

  const fullName = firstName + " " + lastName;

  // 🔴 Avoid: redundant state and unnecessary Effect

  // useEffect(() => {
  //   setFullName(`${firstName} ${lastName}`)
  // }, [firstName, lastName])

  return (
    <div>
      {fullName}
    </div>
  )
}