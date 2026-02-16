import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="font-display bg-background-light min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
            <span className="material-icons text-white text-4xl">church</span>
          </div>
          <h1 className="text-3xl font-bold text-primary tracking-tight">Ecclesia</h1>
          <p className="text-slate-500 mt-2 text-sm uppercase tracking-widest font-medium">Gestão Eclesiástica</p>
        </div>

        <div className="bg-white rounded-xl shadow-xl border border-primary/10 p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-800">Acesse sua conta</h2>
            <p className="text-slate-500 text-sm mt-1">Bem-vindo de volta, administrador.</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700" htmlFor="email">
                E-mail
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-icons text-slate-400 group-focus-within:text-primary transition-colors text-xl">alternate_email</span>
                </div>
                <input 
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm" 
                  id="email" 
                  name="email" 
                  placeholder="nome@igreja.org.br" 
                  required 
                  type="email" 
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-slate-700" htmlFor="password">
                  Senha
                </label>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-icons text-slate-400 group-focus-within:text-primary transition-colors text-xl">lock_outline</span>
                </div>
                <input 
                  className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-lg bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm" 
                  id="password" 
                  name="password" 
                  placeholder="••••••••" 
                  required 
                  type="password" 
                />
              </div>
            </div>

            <div className="flex items-center justify-between py-1">
              <div className="flex items-center">
                <input 
                  className="h-4 w-4 text-primary focus:ring-primary border-slate-300 rounded" 
                  id="remember-me" 
                  name="remember-me" 
                  type="checkbox" 
                />
                <label className="ml-2 block text-xs text-slate-600" htmlFor="remember-me">
                  Lembrar dispositivo
                </label>
              </div>
              <a className="text-xs font-semibold text-primary hover:text-primary/80 transition-colors" href="#">
                Esqueci minha senha
              </a>
            </div>

            <div>
              <button className="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all" type="submit">
                Entrar
                <span className="material-icons ml-2 text-sm">login</span>
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500">
              Acesso restrito a administradores autorizados.
            </p>
          </div>
        </div>

        <footer className="mt-10 flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-6">
            <a className="text-xs text-slate-400 hover:text-primary transition-colors" href="#">Suporte</a>
            <a className="text-xs text-slate-400 hover:text-primary transition-colors" href="#">Privacidade</a>
            <a className="text-xs text-slate-400 hover:text-primary transition-colors" href="#">Termos de Uso</a>
          </div>
          <div className="text-[10px] text-slate-400/60 uppercase tracking-widest font-medium">
            Ecclesia v3.4.0 © 2024
          </div>
        </footer>
      </div>
      
      {/* Decorative Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Login;