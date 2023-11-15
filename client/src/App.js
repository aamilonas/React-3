import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import Input from "./components/input";
import Angelo from "./components/Angelo";

function App() {
  return (
    <div className="App">
      <Button />
      <Dropdown />
      {/* <Input /> */}
      <Angelo />
    </div>
  );
}

export default App;
