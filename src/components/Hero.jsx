import { HERO } from "../constants/hero";  

const Hero = () => {
  const { discount, titleLines, ctaLabel, description, image } = HERO;

  return (
    <section className="bg-[#00040f] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm text-cyan-400 mb-4">{discount}</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {titleLines[0]} <br />
            <span className="text-cyan-400">{titleLines[1]}</span> <br />
            {titleLines[2]}
          </h1>

          <p className="mt-6 text-gray-300 text-sm leading-relaxed max-w-md">
            {description[0]}
          </p>

          <button className="mt-6 px-6 py-2 bg-cyan-400 text-black rounded-md hover:bg-cyan-300">
            {ctaLabel}
          </button>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img src={image} alt="Hero" className="w-full max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
