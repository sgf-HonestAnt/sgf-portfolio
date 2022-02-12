import React from "react";
import "./App.css";
import Home from "./pages/home";

function App() {
  const [dark, setDark] = React.useState(false);
  return (
    <div className={`${dark && "dark"}`}>
      <div className='bg-gradient-to-r from-indigo-100 dark:from-indigo-900 min-h-[100vh]'>
        <div className='flex flex-row bg-slate-700 dark:bg-white text-neutral-200 dark:text-slate-800 p-2'>
          <div className='grid justify-items-center basis-full sm:basis-1/4'>
            <button
              className='px-2 py-1 rounded-full bg-gradient-to-r from-neutral-100 to-neutral-200 text-slate-700'
              onClick={(e) => {
                setDark(!dark);
              }}>
              {dark ? "Light mode" : "Dark mode"}
            </button>
          </div>
          <div className='grid justify-items-center basis-full md:basis-1/2'>One</div>
          <div className='grid justify-items-center basis-full md:basis=1/4'>Two</div>
        </div>
        {/* https://tailwindcss.com/docs/customizing-colors */}
        <div className='container py-1'>
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
