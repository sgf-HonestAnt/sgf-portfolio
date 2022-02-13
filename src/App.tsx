import "./App.css";
import React from "react";
import Home from "./pages/Home";
import Nav from "./pages/Nav";

function App() {
  const [dark, setDark] = React.useState(true);
  const [overcode, setOvercode] = React.useState(false);
  // console.log(dark, overcode)
  return (
    <div className={`container-full ${dark && "dark"}`}>
      <div className='relative flex flex-row px-10 md:px-20 dark:bg-slate-900 bg-white dark:text-neutral-100 text-slate-800'>
        <Home setDark={setDark} overcode={overcode} setOvercode={setOvercode} />
        <Nav dark={dark} setDark={setDark} overcode={overcode} />
      </div>
    </div>
  );
}

export default App;
