import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Financial = () => {
  const data = [
    { name: 'Jan', income: 4000, expense: 2400 },
    { name: 'Fev', income: 3000, expense: 1398 },
    { name: 'Mar', income: 2000, expense: 9800 },
    { name: 'Abr', income: 2780, expense: 3908 },
    { name: 'Mai', income: 1890, expense: 4800 },
    { name: 'Jun', income: 2390, expense: 3800 },
    { name: 'Jul', income: 3490, expense: 4300 },
  ];

  const transactions = [
    { id: 1, desc: "Dízimo - Ricardo Santos", date: "25 Out, 2023", amount: "+ R$ 450,00", type: "income" },
    { id: 2, desc: "Conta de Energia", date: "24 Out, 2023", amount: "- R$ 320,50", type: "expense" },
    { id: 3, desc: "Oferta Culto Domingo", date: "22 Out, 2023", amount: "+ R$ 1.250,00", type: "income" },
    { id: 4, desc: "Manutenção Som", date: "20 Out, 2023", amount: "- R$ 150,00", type: "expense" },
    { id: 5, desc: "Dízimo - Ana Clara", date: "20 Out, 2023", amount: "+ R$ 200,00", type: "income" },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <nav className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
            <span>Dashboard</span> <span className="mx-2">/</span> <span className="text-primary">Financeiro</span>
          </nav>
          <h1 className="text-2xl font-bold text-slate-900">Gestão Financeira</h1>
        </div>
        <div className="flex gap-3">
            <button className="bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all">
                <span className="material-icons text-lg">file_download</span>
                Relatórios
            </button>
            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
                <span className="material-icons text-lg">add</span>
                Nova Lançamento
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm font-medium text-slate-500 mb-1">Entradas (Out)</p>
            <h3 className="text-3xl font-bold text-emerald-600">R$ 24.500,00</h3>
            <div className="mt-4 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
               <div className="bg-emerald-500 h-full rounded-full" style={{ width: '70%' }}></div>
            </div>
         </div>
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-sm font-medium text-slate-500 mb-1">Saídas (Out)</p>
            <h3 className="text-3xl font-bold text-rose-500">R$ 12.350,00</h3>
            <div className="mt-4 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
               <div className="bg-rose-500 h-full rounded-full" style={{ width: '45%' }}></div>
            </div>
         </div>
         <div className="bg-primary p-6 rounded-xl shadow-lg shadow-primary/20 text-white">
            <p className="text-sm font-medium text-white/80 mb-1">Saldo Atual</p>
            <h3 className="text-3xl font-bold">R$ 12.150,00</h3>
            <p className="text-xs mt-2 text-white/60">Atualizado hoje às 09:00</p>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-6">
               <h3 className="text-lg font-bold text-slate-900">Fluxo de Caixa</h3>
               <select className="bg-slate-50 border-none text-sm font-medium text-slate-600 rounded-lg p-2">
                  <option>Últimos 6 meses</option>
                  <option>Este Ano</option>
               </select>
            </div>
            <div className="h-72 w-full">
               <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                     <defs>
                        <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                           <stop offset="5%" stopColor="#1152d4" stopOpacity={0.2}/>
                           <stop offset="95%" stopColor="#1152d4" stopOpacity={0}/>
                        </linearGradient>
                     </defs>
                     <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} dy={10} />
                     <YAxis axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#94a3b8'}} />
                     <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                     <Area type="monotone" dataKey="income" stroke="#1152d4" strokeWidth={2} fillOpacity={1} fill="url(#colorIncome)" />
                     <Area type="monotone" dataKey="expense" stroke="#f43f5e" strokeWidth={2} fillOpacity={0} fill="#f43f5e" />
                  </AreaChart>
               </ResponsiveContainer>
            </div>
         </div>

         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <h3 className="text-lg font-bold text-slate-900 mb-6">Últimas Transações</h3>
            <div className="space-y-4">
               {transactions.map((t) => (
                  <div key={t.id} className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-100">
                     <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${t.type === 'income' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                           <span className="material-icons text-lg">{t.type === 'income' ? 'arrow_downward' : 'arrow_upward'}</span>
                        </div>
                        <div>
                           <p className="text-sm font-semibold text-slate-800 line-clamp-1">{t.desc}</p>
                           <p className="text-xs text-slate-500">{t.date}</p>
                        </div>
                     </div>
                     <span className={`text-sm font-bold ${t.type === 'income' ? 'text-emerald-600' : 'text-slate-800'}`}>
                        {t.amount}
                     </span>
                  </div>
               ))}
            </div>
            <button className="w-full mt-6 py-2 text-sm text-primary font-semibold hover:bg-primary/5 rounded-lg transition-colors">Ver Extrato Completo</button>
         </div>
      </div>
    </div>
  );
};

export default Financial;