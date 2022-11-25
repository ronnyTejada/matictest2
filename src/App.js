import "./App.css";
import Exercise2 from "./exercies/exercise2";
import { Routes, Route } from "react-router";
import Exercise3 from "./exercies/exercise3";
import { Link } from "react-router-dom";
import Fibonacci from "./exercies/exercise1";

const Nav = () => {
  return (
    <ul className="nav">
      <Link to={"/"}>Home</Link>
      <Link to={"/exercise1"}>Fibonacci</Link>
      <Link to={"/exercise2"}>Contar Palabras</Link>
      <Link to={"/exercise3"}>Fizz Buzz</Link>
    </ul>
  );
};

const Home =()=>{
  return(
    <h1>Frontend Developer Technical <br/> MATIC.IO</h1>
  )
}

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/exercise1" element={<Fibonacci />} />
        <Route path="/exercise2" element={<Exercise2 />} />
        <Route path="/exercise3" element={<Exercise3 />} />
      </Routes>
    </div>
  );
}

export default App;
