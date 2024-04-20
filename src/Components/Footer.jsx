import { resourcesLinks } from "../constants"
import { platformLinks } from "../constants";
import { communityLinks } from "../constants";

const Footer = () => {
  return (
   <div className='container  lg:max-w-7xl mx-auto px-6 pt-20 '>


    <div className='border-t   p-5 border-orange-400 bg-black'>


        <div className='  grid grid-cols-2 lg:grid-cols-3 gap-4'>

        

                <div className="pt-3">

                <h4 className='text-2xl text-orange-400'>Resources</h4>



                {resourcesLinks.map((link, index) => {
                    return (
                        <div key={index} className="flex  mb-1 lg:mb-2">
                            <a href={link.url} className="text-lg  mt-1 ">{link.text}</a>
                        </div>
                    );

                }
                )}


                    

                </div>

                <div className="pt-3">

<h4 className='text-2xl text-orange-400'>Platform</h4>



{platformLinks.map((link, index) => {
    return (
        <div key={index} className="flex  mb-1 lg:mb-2">
            <a href={link.url} className="text-lg  mt-1 ">{link.text}</a>
        </div>
    );

}
)}


    

</div>

<div className="pt-3">

<h4 className='text-2xl text-orange-400'>Community</h4>



{communityLinks.map((link, index) => {
    return (
        <div key={index} className="flex  mb-1 lg:mb-2">
            <a href={link.url} className="text-lg  mt-1 ">{link.text}</a>
        </div>
    );

}
)}


    

</div>
               

                </div>

   

  

    </div>


   </div>
  )
}

export default Footer