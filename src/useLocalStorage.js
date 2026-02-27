import React, { useEffect, useState } from "react";

export default function useLocalStorage() {
  const [firstName, setFirstName] = useState(() => {
    const storedFirstName = localStorage.getItem("firstName");
    return storedFirstName ? storedFirstName : "";
  });
  const [lastName, setLastName] = useState(() => {
    const storedLastName = localStorage.getItem("lastName");
    return storedLastName ? storedLastName : "";
  });

  useEffect(() => {
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("lastName", lastName);
  }, [firstName, lastName]);

  return [firstName, setFirstName, lastName, setLastName];
}
