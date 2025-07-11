import star from "../assets/star.svg";
import protect from "../assets/protect.svg";
import transfer from "../assets/transfer.svg";

const Business = () => {
  return (
    <section className="bg-[#00040f] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          You Do The Bussiness,
          <br></br>
           We'll Handle The Money
          </h1>
          <p className="mt-6 text-gray-300 text-sm leading-relaxed max-w-md">
             With the right credit card, you can improve your financial life by building credit, 
             earning rewards and saving money. 
             But with hundreds of credit cards on the market.
          </p>
          <button className="mt-6 px-6 py-2 bg-cyan-400 text-black rounded-md hover:bg-cyan-300">
            Get Started
          </button>
        </div>

      
        <div className="flex-1">
        <div>
            <img src={star} />
            <h3>REWARDS</h3>
            <p>The best credit cards offer some tantalizing combinations of promotions and prizes</p>
            
        </div>

        <div>
           <img src={protect}/> 
           <h3> 100% Secured </h3>
           <p>We take proactive steps make sure your information and transactions are secure.</p>
        </div>

        <div>
            <img src={transfer} />
            <h3> Balance Transfer</h3>
            <p>A balance transfer credit card can save you a lot of money in interest charges.</p>
        </div>

        </div>

      </div>
    </section>
  );
};
export default Business;