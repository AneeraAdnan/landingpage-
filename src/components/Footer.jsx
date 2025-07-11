const Footer = () => {
  return (
     <footer className="bg-[#00040f] text-white py-16 px-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <span className="text-xl font-bold">MyBank</span>
              </div>
              <p className="text-slate-400">A new way to make the payments easy, reliable and secure.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Useful Links</h3>
              <div className="space-y-2 text-slate-400">
                <div className="hover:text-white cursor-pointer transition-colors">Content</div>
                <div className="hover:text-white cursor-pointer transition-colors">How it Works</div>
                <div className="hover:text-white cursor-pointer transition-colors">Create</div>
                <div className="hover:text-white cursor-pointer transition-colors">Explore</div>
                <div className="hover:text-white cursor-pointer transition-colors">Terms & Services</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <div className="space-y-2 text-slate-400">
                <div className="hover:text-white cursor-pointer transition-colors">Help Center</div>
                <div className="hover:text-white cursor-pointer transition-colors">Partners</div>
                <div className="hover:text-white cursor-pointer transition-colors">Suggestions</div>
                <div className="hover:text-white cursor-pointer transition-colors">Blog</div>
                <div className="hover:text-white cursor-pointer transition-colors">Newsletters</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Partner</h3>
              <div className="space-y-2 text-slate-400">
                <div className="hover:text-white cursor-pointer transition-colors">Our Partner</div>
                <div className="hover:text-white cursor-pointer transition-colors">Become a Partner</div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>Copyright Ⓒ 2021 MyBank. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;