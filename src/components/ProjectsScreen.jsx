export default function ProjectsScreen() {
  return (
    <section
      id="projects"
      className=" w-full h-[100svh] pt-20 flex flex-col justify-center items-center "
    >
      <div className=" w-full h-5/6 relative ">
        <div className=" z-0 w-full h-full absolute top-0 border-slate-700 border-[0.5px] border-solid bg-slate-800 bg-opacity-20 backdrop-blur-xl drop-shadow-lg rounded-[2.5rem] " />
        <div className=" z-20 w-full h-full p-10 absolute top-0 text-purple-500 ">
          <h1 className=" ">Projects</h1>

        </div>
      </div>
    </section>
  );
}
