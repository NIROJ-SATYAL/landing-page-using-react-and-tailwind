
import { features } from "../constants";

const Features = () => {
  return (
    <div className="container lg:mx-w-7xl mx-auto my-5 px-6  ">
      <div className="relative  mt-20 w-full border-b border-orange-400 min-h-[800px] ">
        <div className="text-center">
          <span className="bg-neutral-600 text-orange-400 text-lg font-large px-2 py-3 rounded-lg">
            Features
          </span>

          <h1 className="text-4xl mt-20 sm:text-6xl lg:text-8xl tracking-wide text-center mt-6">
            Easy Build{" "}
            <span className="bg-gradient-to-r from-orange-300 to-orange-600 text-transparent bg-clip-text">
              {" "}
              Your Code
            </span>
          </h1>
        </div>

        <div className="flex flex-wrap mt-10 lg:mt-15">
          {features.map((feature, index) => {
            return (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 mt-6">
                <div className="flex">
                  <div className="flex mx-6 h-10 p-2 justify-center items-center rounded-full bg-neutral-900 text-orange-800">
                    {feature.icon}
                  </div>

                  <div>
                    <h4 className="text-lg ml-4 mt-1 mb-6">{feature.text}</h4>

                    <p className="ml-4 text-neutral-500 mb-20">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
