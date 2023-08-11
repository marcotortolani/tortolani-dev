import "./app.css";
import Header from "./components/Header";

export function App() {
  return (
    <div className=" w-screen h-screen overflow-x-hidden flex flex-col items-center bg-slate-800">
      <Header />
      <h1 className=" text-3xl text-cyan-600 ">Marco Tortolani</h1>
    </div>
  );
}
