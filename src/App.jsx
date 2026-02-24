// exercise 1: div with the class large and the id largeDiv with the text say "Hi"

function App() {
  return (
    <>
      {/* <h1 style={{ backgroundColor: "red" }}>hello world</h1> // set the
      background color to red */}
      <div className="large" id="largeDiv">
        <label htmlFor="number">Number</label>
        <input type="number" id="number" name="number" defaultValue={3} />
      </div>
    </>
  );
}

export default App;
