import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Header
      style={{
        background: "#333",
        color: "#fff",
        textAlign: "centre",
        padding: "10px"
      }}
    >
      <h1>TO DO LIST</h1>
      <Link style={linkStyle} to="/">
        HOME
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        ABOUT
      </Link>
    </Header>
  );
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none"
};

export default Header;
