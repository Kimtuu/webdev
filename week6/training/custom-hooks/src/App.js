import useLocalStorage from "./hooks/useLocalStorage";
import useUpdateLogger from "./hooks/useUpdateLogger";

function App() {
  const [name, setName] = useLocalStorage("name", "");
  useUpdateLogger(name);
  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}

export default App;
