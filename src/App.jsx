// // exercise 1: div with the class large and the id largeDiv with the text say "Hi"

import { use } from "react";
import { useForm } from "react-hook-form";

// import { useState, useRef, use, useEffect } from "react";
// import useLocalStorage from "./useLocalStorage";

// import { use, useEffect } from "react";
// import useFetch from "./useFetch";

// import { use, useEffect, useState } from "react";
// import Counter from "./Counter";
// import Input from "./Input";
// import UserCard from "./UserCard";
// import TodoList from "./TodoList";
// // import Name from "./Name";
// // import TodoList from "./TodoList";
// // import TodolistItem from "./TodolistItem";

// // function App() {
// //   return (
// //     <>
// //       {/* <h1 style={{ backgroundColor: "red" }}>hello world</h1> // set the
// //       background color to red */}
// //       <div className="large" id="largeDiv">
// //         <label htmlFor="number">Number</label>
// //         <input type="number" id="number" name="number" defaultValue={3} />
// //       </div>
// //     </>
// //   );
// // }

// // export default App;

// // function App() {
// //   // const []
// //   return (
// //     <>
// //       {/* <UserCard
// //         name="Hamza"
// //         phoneNumber="123-456-7890"
// //         age={25}
// //         address="123 Main St"
// //       /> */}
// //       {/* <Counter /> */}

// //       <Input />
// //     </>
// //     // <>
// //     //   <Name />
// //     //   <TodoList />
// //     //   <TodolistItem isComplete={false}>Hamza</TodolistItem>
// //     // </>
// //   );
// // }

// // export default App;

// // function App() {
// //   const initialArray = ["A", "B", "C"];
// //   const [array, setArray] = useState(["A", "B", "C"]);
// //   const [input, setInput] = useState("");

// //   function removeSpecificEl(e) {
// //     const value = e.target.value.toUpperCase();
// //     setArray(() => array.filter((el) => el !== value));
// //   }

// //   return (
// //     <>
// //       <div>{array.join(", ")}</div>
// //       <div>
// //         <button onClick={() => setArray(array.slice(1))}>
// //           remove first element
// //         </button>
// //         <div>
// //           <input type="text" value={input} onChange={removeSpecificEl} />
// //         </div>

// //         <div>
// //           <button onClick={() => setArray(["D", ...array])}>add D</button>
// //         </div>
// //         <div>
// //           <button onClick={() => setArray([])}>clear all</button>
// //         </div>
// //         <div>
// //           <button onClick={() => setArray(initialArray)}>reset</button>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default App;

// // function App() {
// //   const [name, setName] = useState("");
// //   const [age, setAge] = useState(0);

// //   useEffect(() => {
// //     console.log("age changed", age);
// //   }, [age]);
// //   return (
// //     <>
// //       <input value={name} onChange={(e) => setName(e.target.value)} />
// //       <div>
// //         <button onClick={() => setAge(age - 1)}>-</button>
// //         {age}
// //         <button onClick={() => setAge(age + 1)}>+</button>
// //       </div>
// //       <div>
// //         my name is {name} and I am {age} years old
// //       </div>
// //     </>
// //   );
// // }

// // export default App;

// // function App() {
// //   const [show, setShow] = useState(true);
// //   return (
// //     <>
// //       <button onClick={() => setShow((prev) => !prev)}>Toggle</button>
// //       {show && <TodoList />}
// //     </>
// //   );
// // }

// // export default App;

// // import StopWatch from "../StopWatch";

// // function App() {
// //   return (
// //     <>
// //       <StopWatch />
// //     </>
// //   );
// // }

// // export default App;

// // const App = () => {
// //   const [users, setUsers] = useState([]);
// //   const [showUsers, setShowUsers] = useState(false);
// //   useEffect(() => {
// //     async function fetchUsers() {
// //       const response = await fetch(
// //         "https://jsonplaceholder.typicode.com/users",
// //       );
// //       const data = await response.json();
// //       setUsers(data);
// //     }
// //     fetchUsers();
// //   }, [showUsers]);

// //   function handleClick() {
// //     setShowUsers((prev) => !prev);
// //   }
// //   return (
// //     <>
// //       <button onClick={handleClick}>get Users</button>
// //       <ul>
// //         {users.map((user) => (
// //           <li key={user.id}>{user.name}</li>
// //         ))}
// //       </ul>
// //     </>
// //   );
// // };

// // export default App;

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [singleTodo, setSingleTodo] = useState("");
//   function addTodo(value) {
//     setTodos([...todos, { value, isCompleted: false }]);
//     setSingleTodo("");
//   }

//   function completeTodo(index, isCompleted) {
//     setTodos((prevTodos) =>
//       prevTodos.filter((todo, i) => {
//         if (i === index) {
//           return { ...todo, isCompleted };
//         }
//         return todo;
//       }),
//     );
//   }

//   return (
//     <>
//       {todos.map((todo, index) => (
//         <>
//           <div key={index}>
//             <input
//               onChange={(e) => completeTodo(index, e.target.checked)}
//               type="checkbox"
//               name="todo"
//               id="todo"
//             />
//             <label htmlFor="todo">{todo.value}</label>

//             <button
//               onClick={() => setTodos(todos.filter((curr, i) => i !== index))}
//             >
//               Delete
//             </button>
//           </div>
//         </>
//       ))}

//       <div>
//         <label htmlFor="todo">Write a todo:</label>
//         <input
//           onChange={(e) => setSingleTodo(e.target.value)}
//           type="text"
//           id="todo"
//           name="todo"
//           value={singleTodo}
//         />
//         <button onClick={() => addTodo(singleTodo)}>Add</button>
//       </div>
//     </>
//   );
// }

// export default App;

// function App() {
//   const { data, isLoading, isError } = useFetch(
//     "https://jsonplaceholder.typicode.com/comments",
//   );

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (isError) {
//     return <div>Error fetching data</div>;
//   }

//   return (
//     <div>
//       {data.map((comment) => (
//         <div key={comment.id}>{comment.name}</div>
//       ))}
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import useArray from "./useArray";
// const initialArray = [1, 2, 3, 4, 5];

// function App() {
//   const { array, set, push, filter, remove, clear, reset } =
//     useArray(initialArray);

//   return (
//     <>
//       <div>{array.join(", ")}</div>
//       <button onClick={() => set([4, 5, 6])}>Set to [4, 5, 6]</button>
//       <button onClick={() => push(6)}>Push 6</button>
//       <button onClick={() => filter((x) => x % 2 === 0)}>Filter even</button>
//       <button onClick={() => remove(0)}>Remove first element</button>
//       <button onClick={clear}>Clear</button>
//       <button onClick={reset}>Reset</button>
//     </>
//   );
// }

// export default App;

// export default function App() {
//   const [firstName, setFirstName, lastName, setLastName] = useLocalStorage();

//   return (
//     <>
//       <div>
//         <label htmlFor="firstName">First Name</label>
//         <input
//           type="text"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//           placeholder="First Name"
//         />
//       </div>
//       <div>
//         <label htmlFor="lastName">Last Name</label>
//         <input
//           type="text"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//           placeholder="Last Name"
//         />
//       </div>
//       <button onClick={() => console.log(firstName, lastName)}>Submit</button>
//     </>
//   );
// }

// import React from "react";

// export default function App() {
//   const inputRef = useRef();
//   function handleSubmit(e) {
//     e.preventDefault();
//     if (inputRef.current.value === "") {
//       alert("input is empty");
//       return;
//     }
//     console.log(inputRef.current.value);
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input ref={inputRef} type="text" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// import React from "react";

// export default function App() {
//   const [email, setEmail] = useState("");
//   const [showWarning, setShowWarning] = useState(false);

//   const passwordRef = useRef();

//   useEffect(() => {
//     if (email.endsWith("@webdevsimplified.com")) {
//       setShowWarning(false);
//     } else {
//       setShowWarning(true);
//     }
//   }, [email]);

//   function handleSubmit(e) {
//     const passwordRegex =
//       /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;
//     e.preventDefault();
//     if (passwordRef.current.value.match(passwordRegex)) {
//       alert("Form submitted successfully!");
//     } else {
//       alert("Password does not meet requirements.");
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">Email</label>
//       <input
//         type="email"
//         id="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       {showWarning && (
//         <div className="warning">
//           Please enter a valid webdevsimplified.com email address.
//         </div>
//       )}
//       <label htmlFor="">Password</label>
//       <input id="password" type="password" ref={passwordRef} required />

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

export default function App() {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        gap: "16px",
      }}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <input
        {...register("firstName", {
          required: "First name is required",
          maxLength: 45,
        })}
        placeholder="First Name"
      />
      {errors.firstName?.message}
      <input
        {...register("lastName", { required: "Last name is required" })}
        placeholder="Last Name"
      />
      <input type="submit" value="Submit" />
    </form>
  );
}
