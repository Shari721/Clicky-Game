import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

const Nav = props => (
    <nav className="navbar navbar-default" >
        <ul>
            <li className="brand">Clicky Game</li>
            <li>Click on an image to begin!</li>
            <li>Current Score: {props.score} | Highest Score: {props.highScore}  </li>
        </ul>
    </nav>
);

export default Navbar;
