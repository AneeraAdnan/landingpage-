import pay from "../assets/pay.svg";
import {TEXT} from "../constants/Text";  

const Billing = () => {
  const {heading,description} = TEXT.billing;
return(
    <section className="bg-[#00040f] text-white py-16 px-6">


          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
            
            <div className="flex-1">
              <img src={pay} alt="" className="w-full max-w-md mx-auto" />
            </div>


            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {heading}
              </h1>
              <p className="mt-6 text-gray-300 text-sm leading-relaxed max-w-md">
                {description}
              </p>
              
            </div>
            
    
          </div>
        </section>
)
};
export default Billing;