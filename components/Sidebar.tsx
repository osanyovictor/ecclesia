import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', icon: 'dashboard', path: '/dashboard' },
    { name: 'Membros', icon: 'people', path: '/members' },
    { name: 'Células', icon: 'hub', path: '/cells' },
    { name: 'Financeiro', icon: 'account_balance_wallet', path: '/financial' },
    { name: 'Calendário', icon: 'event', path: '/calendar' },
  ];

  return (
    <aside className="w-20 lg:w-64 bg-white border-r border-slate-200 flex flex-col hidden md:flex z-20">
      <div className="p-6 flex items-center justify-center lg:justify-start space-x-3 h-20">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <span className="material-icons">church</span>
        </div>
        <span className="hidden lg:block font-bold text-xl tracking-tight text-primary">Ecclesia</span>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center justify-center lg:justify-start space-x-3 p-3 rounded-lg transition-all duration-200 ${
                isActive
                  ? 'bg-primary/10 text-primary font-medium'
                  : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
              }`
            }
          >
            <span className="material-icons">{item.icon}</span>
            <span className="hidden lg:block font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-200">
        <a href="#" className="flex items-center justify-center lg:justify-start space-x-3 p-3 text-slate-500 hover:bg-slate-100 rounded-lg transition-colors">
          <span className="material-icons">settings</span>
          <span className="hidden lg:block font-medium">Configurações</span>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;