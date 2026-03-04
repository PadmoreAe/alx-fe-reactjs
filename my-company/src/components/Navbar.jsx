import { Link } from "react-router-dom";

const Navbar =()=>{

    return (
      <nav
        style={{
          backgroundColor: "black",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    );
}

export default Navbar