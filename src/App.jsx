import { Routes, Route } from "react-router-dom";
import Blue from "./components/Blue/Blue";
import Red from "./components/Red/Red";
import Home from "./components/Home/home";
import Nav from "./components/Nav/Nav";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div id="container">
      <Nav/>
     
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
