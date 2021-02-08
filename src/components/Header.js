import React from "react";
import Link from "./Link";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link path="/" label="Accordion" />
      <Link path="/search" label="Search" />
      <Link path="/translate" label="Translate" />
    </div>
  );
};

export default Header;
