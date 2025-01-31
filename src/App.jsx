import { Route, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container">
      <h1>Hello React Router!</h1>
      <div id="navbar">{/* navigation here */}</div>
      <div id="main-section">{/* routes here */}</div>
      <Routes></Routes>
    </div>
  );
}

export default App
