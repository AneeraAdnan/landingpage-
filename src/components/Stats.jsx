const stats = [
  { value: "3800+", label: "USER ACTIVE" },
  { value: "230+",  label: "TRUSTED BY COMPANY" },
  { value: "$230M+", label: "TRANSACTION" },
];

export default function Stats() {
  return (
    <section className="bg-[#00040f] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
        {stats.map((item, idx) => (
          <div key={item.label} className="flex items-center gap-4">
           
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-none">
              {item.value}
            </h3>

        
            <p className="text-cyan-400 text-xs sm:text-sm font-semibold tracking-wide">
              {item.label}
            </p>

           
            {idx !== stats.length - 1 && (
              <div className="hidden sm:block w-px h-6 bg-white/60 ml-6" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
