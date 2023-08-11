import "./app.css";
import ContactScreen from "./components/ContactScreen";
import ExperienceScreen from "./components/ExperienceScreen";
import Header from "./components/Header";
import HomeScreen from "./components/HomeScreen";
import ProjectsScreen from "./components/ProjectsScreen";

import svg01 from "./assets/cool-background-01.svg";
import svg02 from "./assets/cool-background-02.svg";
import waves from "./assets/footer-bg-waves.svg";

export function App() {
  return (
    <div className=" -z-20 w-full min-h-full pb-10 absolute top-0 flex flex-col gap-16 justify-between items-center bg-black">
      <div className=" z-0 w-full h-full absolute top-0 bg-slate-800 bg-opacity-40 backdrop-blur-2xl drop-shadow-lg" />

      <Header />
      <div className=" bubble-01 -z-10 scale-125 absolute top-[25%] -left-40 opacity-60 " />
      <div className=" bubble-02 -z-10 absolute top-[20%] right-[15%] opacity-30" />
      <div className=" bubble-01 -z-10 scale-150 absolute top-[60%] right-20 rotate-90 opacity-70" />
      <div className=" bubble-02 -z-10 absolute top-[60%] left-[0%] opacity-50" />

      <img
        className=" -z-30 w-[100vw] absolute right-0 opacity-70"
        src={svg01}
        alt=""
      />

      {/* <img
        className=" -z-30 w-[100vw] h-[60vh] absolute top-[50%] -left-24 rotate-180 opacity-70"
        src={svg02}
        alt=""
      /> */}

      <img
        className=" -z-30 w-[100vw] absolute bottom-0 opacity-70"
        src={waves}
        alt=""
      />

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
            <p className=" text-white font-medium text-lg italic tracking-widest">
              "Lo importante no es saberlo todo, sino poder aprender de todo."
            </p>
          </div>
        </section>

        <ProjectsScreen />

        <ExperienceScreen />

        <ContactScreen />
      </main>
    </div>
  );
}
