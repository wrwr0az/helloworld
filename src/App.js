import logo from "./logo.svg";
import "./App.css";
import Wrwr from "./Wrwr.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      {[...Array(10).keys()].map((element) => (
        <Wrwr />
      ))}
    </div>
  );
}

export default App;
