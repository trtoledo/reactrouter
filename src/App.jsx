import { Routes, Route, Link } from "react-router-dom";
import Blue from "./components/Blue/Blue";
import Red from "./components/Red/Red";
import Home from "./components/Home/home";


function App() {
  //const [count, setCount] = useState(0)

  return (
    <div id="container">
     
      <div id="navbar">
        <Link to="/home">HOME</Link>
        <Link to="/blue">BLUE</Link>
        <Link to="/red">RED</Link>
        </div>
      <div id="main-section">
      <Routes>
       <Route path="/blue" element={<Blue/>} />
       <Route path="/red" element={<Red/>} />
       <Route path="/home" element={<Home/>} />  
      </Routes>
        </div>
      <Routes></Routes>
    </div>
  )
}

export default App;
