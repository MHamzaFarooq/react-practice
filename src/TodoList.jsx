import { useEffect } from "react";

function TodoList() {
  useEffect(() => {
    console.log("TodoList component mounted");
    return () => {
      console.log("useeffect return");
    };
  }, []);
  return (
    <ul>
      <li>item: 1</li>
      <li>item: 2</li>
      <li>item: 3</li>
    </ul>
  );
}

export default TodoList;
