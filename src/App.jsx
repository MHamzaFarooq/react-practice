// exercise 1: div with the class large and the id largeDiv with the text say "Hi"

import { useEffect, useState } from "react";
import Counter from "./Counter";
import Input from "./Input";
import UserCard from "./UserCard";
import TodoList from "./TodoList";
// import Name from "./Name";
// import TodoList from "./TodoList";
// import TodolistItem from "./TodolistItem";

// function App() {
//   return (
//     <>
//       {/* <h1 style={{ backgroundColor: "red" }}>hello world</h1> // set the
//       background color to red */}
//       <div className="large" id="largeDiv">
//         <label htmlFor="number">Number</label>
//         <input type="number" id="number" name="number" defaultValue={3} />
//       </div>
//     </>
//   );
// }

// export default App;

// function App() {
//   // const []
//   return (
//     <>
//       {/* <UserCard
//         name="Hamza"
//         phoneNumber="123-456-7890"
//         age={25}
//         address="123 Main St"
//       /> */}
//       {/* <Counter /> */}

//       <Input />
//     </>
//     // <>
//     //   <Name />
//     //   <TodoList />
//     //   <TodolistItem isComplete={false}>Hamza</TodolistItem>
//     // </>
//   );
// }

// export default App;

// function App() {
//   const initialArray = ["A", "B", "C"];
//   const [array, setArray] = useState(["A", "B", "C"]);
//   const [input, setInput] = useState("");

//   function removeSpecificEl(e) {
//     const value = e.target.value.toUpperCase();
//     setArray(() => array.filter((el) => el !== value));
//   }

//   return (
//     <>
//       <div>{array.join(", ")}</div>
//       <div>
//         <button onClick={() => setArray(array.slice(1))}>
//           remove first element
//         </button>
//         <div>
//           <input type="text" value={input} onChange={removeSpecificEl} />
//         </div>

//         <div>
//           <button onClick={() => setArray(["D", ...array])}>add D</button>
//         </div>
//         <div>
//           <button onClick={() => setArray([])}>clear all</button>
//         </div>
//         <div>
//           <button onClick={() => setArray(initialArray)}>reset</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

// function App() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState(0);

//   useEffect(() => {
//     console.log("age changed", age);
//   }, [age]);
//   return (
//     <>
//       <input value={name} onChange={(e) => setName(e.target.value)} />
//       <div>
//         <button onClick={() => setAge(age - 1)}>-</button>
//         {age}
//         <button onClick={() => setAge(age + 1)}>+</button>
//       </div>
//       <div>
//         my name is {name} and I am {age} years old
//       </div>
//     </>
//   );
// }

// export default App;

// function App() {
//   const [show, setShow] = useState(true);
//   return (
//     <>
//       <button onClick={() => setShow((prev) => !prev)}>Toggle</button>
//       {show && <TodoList />}
//     </>
//   );
// }

// export default App;

import StopWatch from "../StopWatch";

function App() {
  return (
    <>
      <StopWatch />
    </>
  );
}

export default App;
