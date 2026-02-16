import React from 'react';

const Header = () => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-8 sticky top-0 z-10">
      <div className="flex items-center md:hidden">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white mr-2">
          <span className="material-icons text-sm">church</span>
        </div>
        <span className="font-bold text-lg text-primary">Ecclesia</span>
      </div>
      
      <div className="hidden md:block">
        <h2 className="text-xl font-semibold text-slate-800">Painel Administrativo</h2>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 text-slate-400 hover:text-primary transition-colors relative">
          <span className="material-icons">notifications</span>
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <div className="h-8 w-[1px] bg-slate-200 mx-2 hidden sm:block"></div>
        <div className="flex items-center space-x-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-medium text-slate-800 leading-none">Pr. Marcos Silva</p>
            <p className="text-xs text-slate-500 mt-1">Administrador</p>
          </div>
          <img 
            alt="Admin Profile" 
            className="w-10 h-10 rounded-full border border-slate-200 object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWSopIOphklLdic41DzHSznSSoN4WI7PtgrVr_w-LDNbZA_mpMeyH0fHJIvbH_pwHVjTbOj8u2uOn4_9PzUJ1TcbjKtdWyjCJTxEk2zwhRE1xCekUfRLCMZWQ50DHwxZUJhVXkthmBcWSfDrsdWKW-SDHMZSq6Y0jBlTq3GDxfNrD_-EM5otgBijqEv-htahEzm-DD-TZiUq7YA9JfeZ4Ens5OfvDBeLDoxoRXiilLYGqw3jvW7ksCZRpAeufymTdRl9fnWn4_0kM"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;