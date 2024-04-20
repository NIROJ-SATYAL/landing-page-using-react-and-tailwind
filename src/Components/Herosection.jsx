import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Herosection = () => {
  return (
    <div className=" container  lg:max-w-7xl mx-auto px-6 pt-20 ">
      <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-4xl sm:text-6xl lg:text-8xl tracking-wide text-center">
          My Name is{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text">
            Niroj Satyal
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl text-center mt-6 lg:mt-20">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure eius
          delectus fugit minus, ipsa voluptates corporis quasi quidem officia
          fugiat voluptatem ullam, commodi totam! Molestiae facilis amet,
          provident aspernatur rerum harum dolorum repudiandae delectus quis
          error illum doloribus qui eaque perspiciatis, deserunt incidunt
          voluptates voluptate corrupti numquam! Obcaecati, officiis provident.
        </p>

        <div className="flex items-center justify-center lg:max-w-4xl mt-10 lg:mt-14">
          <button className="bg-gradient-to-r from-orange-400 to-orange-700 text-white px-6 py-2 rounded-lg mt-6 lg:mt-20">
            start for free
          </button>
          <button className="bg-gradient-to-r from-orange-400 to-orange-700 text-white px-6 py-2 rounded-lg mt-6 lg:mt-20 ml-6">
            Documentation
          </button>
        </div>

        <div className="flex justify-center   mt-10">
          <video
            src={video1}
            className="rounded-lg w-1/2 border mx-2 my-4 border-orange-300"
            autoPlay
            loop
            muted
          ></video>
          <video
            src={video2}
            className="rounded-lg w-1/2 border mx-2 my-4 border-orange-300"
            autoPlay
            loop
            muted
          ></video>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
