import {TEXT} from "../constants/Text";  

const CTA = () => {
  const { heading , description } = TEXT.CTA;
  return (
    <section className="bg-[#00040f] text-white py-16 px-6">
        <div className="container mx-auto px-4">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-12 text-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">{heading}</h2>
              <p className="text-slate-400 text-lg max-w-md mx-auto">
                {description}
              </p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
  );
};

export default CTA;


