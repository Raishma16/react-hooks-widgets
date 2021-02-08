import React from "react";

const Link = ({ path, label }) => {
  const onClick = (event) => {
    if (event.metaKey || event.ctrlKey) return;

    event.preventDefault();
    window.history.pushState({}, "", path);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };
  return (
    <a className="item" href={path} onClick={onClick}>
      {label}
    </a>
  );
};

export default Link;
