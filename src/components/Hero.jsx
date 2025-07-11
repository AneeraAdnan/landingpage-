import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="bg-[#00040f] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm text-cyan-400 mb-4">20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            The Next <br />
            <span className="text-cyan-400">Generation</span> <br />
            Payment Method
          </h1>
          <p className="mt-6 text-gray-300 text-sm leading-relaxed max-w-md">
            Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
            We examine annual percentage rates, annual fees, and more.
          </p>
          <button className="mt-6 px-6 py-2 bg-cyan-400 text-black rounded-md hover:bg-cyan-300">
            Get Started
          </button>
        </div>

      
        <div className="flex-1">
          <img src={heroImg} alt="Hero" className="w-full max-w-md mx-auto" />
        </div>

      </div>
    </section>
  );
};

export default Hero;