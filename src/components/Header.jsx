export default function Header() {
  return (
    <header className="z-50 w-full max-w-4xl h-14 mt-6 fixed">
      <div className=" z-0 w-full h-full absolute top-0 border-slate-700 border-[0.5px] border-solid bg-slate-800 bg-opacity-30 backdrop-blur-lg drop-shadow-lg rounded-full " />
      <div className=" z-10 w-full h-full px-10 relative flex justify-between items-center text-white">
        <div>
          <p>Tortolani</p>
        </div>
        <nav className=" w-3/6 max-w-sm min-w-fit ">
          <ul className=" flex justify-between items-center">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
