import { testimonials } from "../constants"

const Testimonials = () => {
  return (
    <div  className="container lg:mx-w-7xl mx-auto my-5 px-6  ">
        <div className="mt-20">
            <h2  className='text-3xl md:text-5xl lg:text-7xl text-center '>
                What People Are Saying
            </h2>


            <div className="flex  flex-wrap mt-8">


                {testimonials.map((testimonial, index) => {
                    return (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                            <div className="p-10 border border-neutral-700 rounded-xl">
                                <p className="text-4xl mb-8">
                                    {testimonial.title}
                                </p>
                                <p className="mb-8">
                                    <span className="text-5xl mt-6 mr-2">{testimonial.name}</span>
                                    <span className="text-neutral-400 tracking-tight">{testimonial.date}</span>
                                </p>
                                <p className="mb-8">
                                    {testimonial.description}
                                </p>
                                <a
                                    href="#"
                                    className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200"
                                >
                                    Read More
                                </a>
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