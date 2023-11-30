import "./App.css";
import SingleCounter from "./components/SingleCounter";
import PersonInfo from "./components/PersonInfo"
function App() {
  return (
    <div className="app-container">
      <SingleCounter/>
      <SingleCounter/>
      <SingleCounter/>
      <PersonInfo/>

    </div>
  );
}

export default App;
