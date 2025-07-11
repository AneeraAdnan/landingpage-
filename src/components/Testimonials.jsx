const Testimonials = () => {
  return (
        <section className="bg-[#00040f] text-white py-16 px-6">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">
            What people are
            <br />
            saying about us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
                name: "Herman Jensen",
                title: "Founder & Leader",
                avatar: "HJ",
              },
              {
                quote: "Money makes your life easier. If you're lucky to have it, you're lucky.",
                name: "Steve Mark",
                title: "Founder & Leader",
                avatar: "SM",
              },
              {
                quote:
                  "It is usually people in the money business, finance, and international trade that are really rich.",
                name: "Kenn Gallagher",
                title: "Founder & Leader",
                avatar: "KG",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-800 border border-slate-700 rounded-lg p-6">
                <div className="space-y-4">
                  <div className="text-teal-400 text-6xl font-serif">"</div>
                  <p className="text-slate-300">{testimonial.quote}</p>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-slate-400">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Testimonials;