import React from "react";
import Contact from "../components/Contact";
import Environment from "../components/Environment";
import Activity from "../components/Activity";
import { ImHeart } from "react-icons/im";
import { FcElectricalSensor, FcMindMap, FcTimeline } from "react-icons/fc";

export default function Home(props: {
  setDark: any;
  overcode: boolean;
  setOvercode: any;
}) {
  const [greeting, setGreeting] = React.useState("{Hi}");
  const [pulse, setPulse] = React.useState(false);
  // const [bounce, setBounce] = React.useState(false);
  props.overcode && console.log("HI, YOU!");
  console.log(greeting);
  return (
    <div className='basis-2/3 mt-20 pr-20'>
      {/* sm:columns-2 xl:columns-3 2xl:columns-4 */}
      <div>
        <img
          alt='SG Fisher'
          className='my-5 rounded-lg w-28 aspect-square object-cover'
          src={
            props.overcode
              ? "https://res.cloudinary.com/dowvu52wz/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1644682279/schrutefarms/10450077_486252694853282_2481196248747321059_o_ohqaev.jpg"
              : "https://res.cloudinary.com/dowvu52wz/image/upload/v1644682279/schrutefarms/10450077_486252694853282_2481196248747321059_o_ohqaev.jpg"
          }
        />
        <div className='my-5 font-mono font-medium text-xl tracking-wide antialiased'>
          <p>
            <span
              className={`text-2xl ${
                greeting === "Hi"
                  ? "text-blue-200 dark:text-blue-200"
                  : greeting === "Helo"
                  ? "text-green-300 dark:text-green-300"
                  : greeting === "Hej"
                  ? "text-red-300 dark:text-red-300"
                  : "text-neutral-300 dark:text-neutral-300"
              } dark:text-slate-400`}>
              {greeting},
            </span>{" "}
            I'm Sarah Fisher,
          </p>
          <p>
            Born in{" "}
            <button
              onMouseOver={(e) => setGreeting("Hi")}
              className='text-blue-200 hover:text-blue-400 rounded border-4 border-white dark:border-slate-900 dark:hover:border-slate-800'>
              {"{Oregon}"}
            </button>
            , raised in{" "}
            <button
              onMouseOver={(e) => setGreeting("Helo")}
              className='text-green-300 hover:text-green-500 rounded border-4 border-white dark:border-slate-900 dark:hover:border-slate-800'>
              {"{Wales}"}
            </button>
            , &amp; lived in{" "}
            <button
              onMouseOver={(e) => setGreeting("Hej")}
              className='text-red-300 hover:text-red-500 rounded border-4 border-white dark:border-slate-900 dark:hover:border-slate-800'>
              {"{Denmark}"}
            </button>
            .
          </p>
        </div>
        {/* <img
          onMouseOver={(e) => setBounce(true)}
          onMouseLeave={(e) => setBounce(false)}
          alt='Coffee pot'
          src='https://res.cloudinary.com/dowvu52wz/image/upload/v1644761561/schrutefarms/icons/42_zzkwby.png'
          className={`invisible h-32 float-right pl-2 ${
            bounce && "animate-bounce"
          }`}
        /> */}
        <div className='py-8'>
          <p className='font-mono font-medium text-3xl tracking-wide antialiased'>
            I am a{" "}
            <button
              onMouseOver={(e) => {
                props.setOvercode(true);
              }}
              onMouseLeave={(e) => {
                props.setOvercode(false);
              }}
              className='font-medium rounded border-4 border-white px-1 dark:border-slate-900 dark:hover:border-slate-800'>
              {"{fullstack developer}"}
            </button>
          </p>
          <p className='font-mono font-medium text-xl tracking-wide antialiased'>
            driven by coffee, a love for patterns &amp; technology. I{" "}
            <ImHeart
              onMouseOver={(e) => setPulse(true)}
              onMouseLeave={(e) => setPulse(false)}
              className={`text-red-300 dark:text-red-500 inline ${
                pulse && "animate-ping"
              }`}
            />{" "}
            my job &amp; would like to{" "}
            <a href='#contact'>
              <button className='font-medium px-1 rounded border-4 border-white dark:border-slate-900 hover:underline underline-offset-4 decoration-4 text-blue-600'>
                {"{make connections}"}
              </button>
              .
            </a>
          </p>
        </div>
        <div className='py-8'>
          <p className='my-5 font-mono font-medium text-xl tracking-wide antialiased'>
            <FcMindMap className='inline mr-2 text-5xl' />
            What makes my work possible?
          </p>
          <Environment />
        </div>
        <div className='py-8' id='contact'>
          <p className='my-5 font-mono font-medium text-xl tracking-wide antialiased'>
            <FcTimeline className='inline mr-2 text-5xl' />
            Let's be online friends!
          </p>
          <Contact />
        </div>
        <div className='py-8'>
          <p className='my-5 font-mono font-medium text-xl tracking-wide antialiased'>
            <FcElectricalSensor className='inline mr-2 text-5xl' />
            What have I been up to recently?
          </p>
          <Activity />
        </div>
      </div>
    </div>
  );
}
