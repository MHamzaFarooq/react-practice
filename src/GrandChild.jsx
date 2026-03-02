import React, { useContext } from "react";
import NameContext from "./App";

export default function GrandChild() {
  const { name, setName } = useContext(NameContext);

  return <div>Grand Child: {name}</div>;
}
