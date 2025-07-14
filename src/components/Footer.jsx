import { FOOTER_LINK_GROUPS } from "../constants/Footer";
import {TEXT} from "../constants/Text";

const Footer = () => {

  const {heading,description} = TEXT.Footer;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#00040f] text-white py-16 px-6">
      <div className="container mx-auto px-4">
        
        <div className="grid md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-bold">{heading}</span>
            </div>
            <p className="text-slate-400">
              {description}
            </p>
          </div>

          
          {FOOTER_LINK_GROUPS.map(({ title, links }) => (
            <div key={title}>
              <h3 className="font-semibold mb-4">{title}</h3>
              <ul className="space-y-2 text-slate-400">
                {links.map((text) => (
                  <li
                    key={text}
                    className="hover:text-white cursor-pointer transition-colors"
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>Copyright{year}MyBank. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


