import React from 'react';
import { Link } from 'react-router-dom';
import "./LeftBar.css";

const LeftBar = () => {
    return (
        <div className="left-bar">
            <Link to="/">Dynamic forms</Link>
        </div>
    );
};

export default LeftBar;