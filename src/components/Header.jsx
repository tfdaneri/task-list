import React from "react";

const Header = ({ title, color }) => (
    <header>
        <font color={color}>
            <h1 className="header">{title}</h1>
        </font>
    </header>
);

export default Header;