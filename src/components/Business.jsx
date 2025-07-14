      
import { FEATURES,BUSINESS_COPY  } from "../constants/Features";


const Business = () => {
  const  { heading, description, cta } = BUSINESS_COPY;

  return (
    <section className="bg-[#00040f] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Side: Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
           {heading}
          </h1>
          <p className="mt-6 text-gray-300 text-sm leading-relaxed max-w-md">
          {description}
          </p>
          <button className="mt-6 px-6 py-2 bg-cyan-400 text-black rounded-md hover:bg-cyan-300">
            {cta}
          </button>
        </div>

        {/* Right Side: Features List */}
        <div className="flex-1 flex flex-col gap-6">
          {FEATURES.map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4">
              <img src={icon} alt={title} className="w-12 h-12" />
              <div>
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-400 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Business;
