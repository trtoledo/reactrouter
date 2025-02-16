import { Routes, Route } from "react-router-dom";
import Blue from "./components/Blue/Blue";
import Red from "./components/Red/Red";
import Home from "./components/Home/home";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div id="container">
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App;
