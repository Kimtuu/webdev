import Greeting from "./Greeting";
import "./App.css"; // import the CSS file

function App() {
  return (
    <div className="App">
      <Greeting name="Sara" message="Welcome to the lab!" />
      <Greeting name="Cahlan" message="good morning!" />
      <Greeting name="Edgar" message="what is this?" />
    </div>
  );
}

export default App;