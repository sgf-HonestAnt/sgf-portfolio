import { FiFileText, FiGithub, FiMail, FiLinkedin } from "react-icons/fi";

export default function Nav(props: {
  dark: boolean;
  setDark: any;
  overcode: boolean;
}) {
  return (
    <div
      className={`hidden lg:inline basis-1/3 relative mt-20 p-5 ${
        props.overcode &&
        "bg-[url('https://res.cloudinary.com/dowvu52wz/image/upload/v1644771238/schrutefarms/bg/photo-1533709752211-118fcaf03312_smymtd.jpg')] bg-auto bg-no-repeat"
      }`}>
      <div className='bg-slate-700 dark:bg-white text-neutral-200 dark:text-slate-800'>
        {/* <div className='bg-white float-right m-5 p-3'>
          <img
            onClick={(e) => {
              props.setDark(!props.dark);
            }}
            alt='Coffee pot'
            src='https://res.cloudinary.com/dowvu52wz/image/upload/v1644765180/schrutefarms/icons/10_nmfmx3.png'
            className='h-32'
          />
          <button
            className='px-2 py-1 bg-gradient-to-r from-neutral-100 to-neutral-200 text-slate-700'
            onClick={(e) => {
              props.setDark(!props.dark);
            }}>
            {props.dark ? "Light mode" : "Dark mode"}
          </button>
        </div> */}
        <p className='px-5 pt-5 font-mono font-medium text-xl tracking-wide antialiased'>
          Sarah Fisher, LL.B (Hons), M.A.
        </p>
        <p className='px-5 pt-5 font-mono font-normal text-xl tracking-wide antialiased'>
          <a
            href='https://portfolio-sgf-honestant.vercel.app/media/SarahFisherCVMarch2020.pdf'
            download>
            <FiFileText className="inline" />{" "}
            View my latest CV
          </a>
        </p>
        <p className='px-5 pt-5 font-mono font-normal text-xl tracking-wide antialiased'>
          <a href='mailto:sgfishercardiff@gmail.com'>
            <FiMail className="inline" />{" "}
            Email me
          </a>
        </p>
        <p className='px-5 pt-5 font-mono font-normal text-xl tracking-wide antialiased'>
          Or find me:
        </p>
        <p className='px-5 font-mono font-normal text-xl tracking-wide antialiased'>
          <a
            href='https://github.com/sgf-HonestAnt'
            target='_blank'
            rel='noreferrer'>
            <FiGithub className="inline" />{" "}
            github
          </a>
        </p>
        <p className='px-5 pb-5 font-mono font-normal text-xl tracking-wide antialiased'>
          <a
            href='https://www.linkedin.com/in/sarah-guinevere-fisher-0073b316b/'
            target='_blank'
            rel='noreferrer'>
            <FiLinkedin className="inline"/>{" "}
            linkedin
          </a>
        </p>
      </div>
    </div>
  );
}
