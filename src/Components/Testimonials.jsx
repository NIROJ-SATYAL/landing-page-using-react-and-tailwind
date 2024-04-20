import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <div  className="container lg:mx-w-7xl mx-auto my-5 px-6  ">
        <div className="mt-20">
            <h2  className='text-3xl md:text-5xl lg:text-7xl text-center '>
                What People <span className="bg-gradient-to-r from-orange-400 to-orange-700 text-transparent bg-clip-text">Are Saying</span>
            </h2>


            <div className="flex  flex-wrap mt-8">


                {testimonials.map((testimonial, index) => {
                    return (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                            <div className="p-5 border border-neutral-700 rounded-xl">
                                <p className="text-xl  mb-5 ">
                                    {testimonial.text}
                                </p>
                                <div className="mb-5 flex items-center p-2">
                                    <img  className="h-10 w-10 rounded-full" src={testimonial.image} alt="" />

                                    <div className="ml-4 mt-3">
                                        <h4 className="text-lg md:text-xl lg:text-2xl bg-gradient-to-r from-orange-300 to-orange-600 text-transparent bg-clip-text">
                                            {testimonial.user}
                                        </h4>
                                        <p className="text-neutral-500">
                                            {testimonial.company}
                                        </p>
                                            </div>
                                  
                                </div>
                                <p className="mb-8">
                                    {testimonial.description}
                                </p>
                               
                            </div>
                        </div>
                    );
                })}


            </div>
        </div>


    </div>
  )
}

export default Testimonials