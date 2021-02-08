import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const items = [
  {
    title: "What is React?",
    content: "React is a front end Javascript framework"
  },
  {
    title: "Why use React?",
    content: "React is a favourite JS library among engineers"
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components"
  }
];

const App = () => {
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
