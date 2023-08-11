export default function HomeScreen() {
  return (
    <section
      id="home"
      className=" w-full h-[100svh] pt-20 flex flex-col justify-center items-center "
    >
      <div className=" w-full h-4/6 relative ">
        <div className=" z-0 w-full h-full absolute top-0 border-gray-600 border-[0.5px] border-solid bg-gray-700 bg-opacity-20 backdrop-blur-3xl drop-shadow-lg rounded-[2.5rem] " />
        <div className=" z-20 w-full h-full p-10 absolute top-0  ">
          <h1 className="text-white  text-2xl font-medium ">Home</h1>

        </div>
      </div>
    </section>
  );
}
