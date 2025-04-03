import { Link } from 'react-router-dom';

const Nav = () => {
    return ( 
        <div id="navbar">
            <nav style={{ display: "flex", gap: "25px" }}>
                <Link to="/">Home</Link>
                <Link to="/blue">Blue</Link>
                <Link to="/red">Red</Link>
                <Link to="/purple">Purple</Link>
                <Link to="/green">Green</Link>
            </nav>
      </div>
     );
};
export default Nav;