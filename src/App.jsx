// exercise 1: div with the class large and the id largeDiv with the text say "Hi"

import Counter from "./Counter";
import Input from "./Input";
import UserCard from "./UserCard";
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

function App() {
  // const []
  return (
    <>
      {/* <UserCard
        name="Hamza"
        phoneNumber="123-456-7890"
        age={25}
        address="123 Main St"
      /> */}
      {/* <Counter /> */}

      <Input />
    </>
    // <>
    //   <Name />
    //   <TodoList />
    //   <TodolistItem isComplete={false}>Hamza</TodolistItem>
    // </>
  );
}

export default App;
