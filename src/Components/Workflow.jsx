import { CheckCircle2 } from "lucide-react";
import codeImage from "../assets/code.jpg";
import { checklistItems } from "../constants";
const Workflow = () => {
  return (
    <div>
      <div className="container lg:mx-w-7xl mx-auto my-5 px-6  ">
        <div className="mt-20 pt-12 ">
          <h1 className="text-2xl text-center md:text-4xl lg:text-6xl">
            Accelerate your{" "}
            <span className="bg-gradient-to-r from-orange-300 to-orange-600 text-transparent bg-clip-text">
              Coding Workflow
            </span>
          </h1>

          <div className=" flex flex-wrap  justify-center">
            <div className=" p-2 w-full lg:w-1/2">
            <img src={codeImage} alt="" />

            </div> 
            

          <div className="pt-12 w-full lg:w-1/2">

            {checklistItems.map((item, index) => {
                return (
                    <div key={index} className="flex  mb-1 lg:mb-1">
                    
                
                  <div className="flex mx-2 h-10 w-10 p-2 justify-center items-center rounded-full bg-neutral-900 text-orange-800">
                    <CheckCircle2 size={24} />
                  </div>

                  <div>
                    <h4 className="text-lg ml-4 mt-1 ">{item.title}</h4>

                    <p className="ml-4 text-neutral-500 mb-20">{item.description}</p>
                  </div>
                </div>
             
                );
                })}

          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
