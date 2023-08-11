import "./app.css";
import ContactScreen from "./components/ContactScreen";
import ExperienceScreen from "./components/ExperienceScreen";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import ProjectsScreen from "./components/ProjectsScreen";

export function App() {
  return (
    <div className=" -z-20 w-full min-h-full pb-10 absolute top-0 flex flex-col gap-16 justify-between items-center bg-gradient-to-r from-blue-900 to-purple-900">
      <div className=" z-0 w-full h-full absolute top-0 bg-slate-800 bg-opacity-40 backdrop-blur-lg drop-shadow-lg" />

      <Header />
      <div className=" bubble-01 -z-10 absolute top-[10%] left-[5%] opacity-50 " />
      <div className=" bubble-02 -z-10 absolute top-[20%] right-[15%] opacity-50" />
      <div className=" bubble-01 -z-10 absolute top-[80%] left-[15%] opacity-60" />
      <div className=" bubble-02 -z-10 absolute top-[60%] right-[10%] opacity-50" />

      <main className=" z-20 w-10/12 overflow-x-hidden flex flex-col gap-10 justify-between items-center ">
        <HomeScreen />

        {/* <section className="">
          <p>
            "Lo importante no es saberlo todo, sino poder aprender de todo."
          </p>
        </section> */}

        <section className="z-0 w-full h-14 mt-6 relative ">
          <div className=" -z-10 w-full h-full absolute top-0 border-slate-800 border-[0.5px] border-solid bg-black bg-opacity-50 backdrop-blur-xl drop-shadow-lg rounded-2xl  " />
          <div className=" z-10 w-full h-full px-10 relative flex justify-center items-center">
            <p className=" text-white font-medium text-lg italic tracking-widest">"Lo importante no es saberlo todo, sino poder aprender de todo."</p>
          </div>
        </section>

        <ProjectsScreen />

        <ExperienceScreen />

        <ContactScreen />
      </main>
    </div>
  );
}
