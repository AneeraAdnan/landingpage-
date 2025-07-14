import { STATS } from "../constants/Stats";

function Stats() {
  return (
    <section className="bg-[#00040f] text-white py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6">
        {STATS.map(({ value, label }, idx) => (
          <div key={label} className="flex items-center gap-4">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">{value}</h3>
            <p className="text-cyan-400 text-xs sm:text-sm font-semibold">{label}</p>
            {idx !== STATS.length - 1 && <div className="hidden sm:block w-px h-6 bg-white/60 ml-6" />}
          </div>
        ))}
      </div>
    </section>
  );
}
export default Stats;

