import { AiOutlineMinus } from "react-icons/ai";

export default function Environment() {
  return (
    <ul className='list-none my-5 font-mono font-medium text-lg tracking-wide antialiased'>
      <li>
        <AiOutlineMinus className='inline' /> Editors &amp; environments:
        <br />
        VsCode, Node.js, PostgreSQL
      </li>
      <li>
        <AiOutlineMinus className='inline' /> Languages:
        <br />
        JavaScript, TypeScript, CSS3
      </li>
      <li>
        <AiOutlineMinus className='inline' /> Libraries &amp; frameworks:
        <br />
        React.js, Express.js, Bootstrap, Tailwind CSS, Mongoose, Jest, Socket.IO
      </li>
      <li>
        <AiOutlineMinus className='inline' /> Platforms &amp; other tools:
        <br />
        Redux, MongoDB, Heroku, Vercel, GitHub
      </li>
      <li>
        <AiOutlineMinus className='inline' /> (Life):
        <br />
        My dog, my family, coffee, writing, walking
      </li>
    </ul>
  );
}
