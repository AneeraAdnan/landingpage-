import three from "../assets/three.svg";
import googleplay from "../assets/googleplay.svg";  
import appstore from "../assets/appstore.svg";

const CardDeal = () => {
  return (
    <section className="bg-[#00040f] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
      
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find a better card deal <br />
            in few easy steps.
          </h1>
          <p className="mt-6 text-gray-300 text-sm leading-relaxed max-w-md">
            Arcu tortor, purus in mattis at sed integer faucibus. 
            Aliquet quis aliquet eget mauris tortor. Aliquet ultrices ac, ametau.
          </p>

          
          <div className="flex items-center gap-4 mt-6 justify-center md:justify-start">
            <img src={googleplay} alt="Google Play" className="w-32 cursor-pointer" />
            <img src={appstore} alt="App Store" className="w-32 cursor-pointer" />
          </div>
        </div>

        {/* Image Right */}
        <div className="flex-1">
          <img src={three} alt="Card Deal Graphic" className="w-full max-w-md mx-auto" />
        </div>

      </div>
    </section>
  );
};

export default CardDeal;
