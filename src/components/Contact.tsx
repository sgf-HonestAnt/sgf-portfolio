import { AiOutlineMinus } from "react-icons/ai";

export default function Contact() {
  return (
    <ul className='list-none my-5 font-mono font-medium text-lg tracking-wide antialiased'>
      <li>
        <AiOutlineMinus className='inline' /> GitHub
        <br />
        <a
          href='https://github.com/sgf-HonestAnt'
          target='_blank'
          rel='noreferrer'
          className='hover:underline underline-offset-4 decoration-4 text-blue-600'>
          github.com/sgf-HonestAnt
        </a>
      </li>
      <li>
        <AiOutlineMinus className='inline' /> LinkedIn
        <br />
        <a
          href='https://www.linkedin.com/in/sarah-guinevere-fisher-0073b316b/'
          target='_blank'
          rel='noreferrer'
          className='hover:underline underline-offset-4 decoration-4 text-blue-600'>
          linkedin.com/in/sarah-guinevere-fisher-0073b316b/
        </a>
      </li>
      <li>
        <AiOutlineMinus className='inline' /> Email
        <br />
        <a
          href='mailto:sgfishercardiff@gmail.com'
          target='_blank'
          rel='noreferrer'
          className='hover:underline underline-offset-4 decoration-4 text-blue-600'>
          sgfishercardiff@gmail.com
        </a>
      </li>
    </ul>
  );
}
