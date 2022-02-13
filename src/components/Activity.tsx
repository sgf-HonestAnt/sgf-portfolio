import { AiOutlineMinus } from "react-icons/ai";

export default function Activity() {
  return (
    <ul className='list-none my-5 font-mono font-medium text-lg tracking-wide antialiased'>
      <li>
        <AiOutlineMinus className='inline' /> Bamboo App 21-22:
        <br />
        <img
          src='https://bamboo-fe.vercel.app/static/media/Bamboo1.db9b6e72e71f07451c56681d65aa0191.svg'
          alt='Bamboo'
          className='m-2 float-left w-10'
        />
        <a
          href='https://bamboo-fe.vercel.app/'
          target='_blank'
          rel='noreferrer'
          className='hover:underline underline-offset-4 decoration-4 text-blue-600'>
          bamboo-fe.vercel.app/
        </a>
        <br />
        For my final solo capstone project{" "}
        <a
          href='https://strive.school/'
          target='_blank'
          rel='noreferrer'
          className='hover:underline underline-offset-4 decoration-4 text-blue-600'>
          @Strive
        </a>
        , I built a fully functional task management app with a front-end
        written in TypeScript and a back-end powered by MongoDB.
      </li>
      <li>
        <AiOutlineMinus className='inline' /> Tutor 21-22:
        <br />
        <img
          src='https://res.cloudinary.com/dowvu52wz/image/upload/v1644768344/schrutefarms/icons/download_sabzt6.png'
          alt='Strive School'
          className='m-2 float-left w-10'
        />
        I was a volunteer full-stack tutor{" "}
        <a
          href='https://strive.school/'
          target='_blank'
          rel='noreferrer'
          className='hover:underline underline-offset-4 decoration-4 text-blue-600'>
          @Strive
        </a>
        , helping the next batch learn and chase solutions. We can never
        underestimate the value of console.log!
      </li>
      <li>
        <AiOutlineMinus className='inline' /> Student 21-22:
        <br />
        <img
          src='https://res.cloudinary.com/dowvu52wz/image/upload/v1644768344/schrutefarms/icons/download_sabzt6.png'
          alt='Strive School'
          className='m-2 float-left w-10'
        />
        I was a full-time full-stack student{" "}
        <a
          href='https://strive.school/'
          target='_blank'
          rel='noreferrer'
          className='hover:underline underline-offset-4 decoration-4 text-blue-600'>
          @Strive
        </a>
        , obtaining the highest results in several modules. See certification at
        LinkedIn.
      </li>
    </ul>
  );
}
