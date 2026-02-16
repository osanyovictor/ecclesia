import React from 'react';

const Cells = () => {
  const cells = [
    {
      id: 1,
      name: "Bethel Central",
      leader: "Pr. João Marcos",
      address: "Rua Central, 500",
      members: 12,
      meetingDay: "Quarta-feira, 20h",
      status: "Ativa",
      color: "bg-emerald-500"
    },
    {
      id: 2,
      name: "Shalom Sul",
      leader: "Dsa. Maria Clara",
      address: "Av. do Estado, 1200",
      members: 8,
      meetingDay: "Quinta-feira, 19:30h",
      status: "Ativa",
      color: "bg-blue-500"
    },
    {
      id: 3,
      name: "Graça Norte",
      leader: "Pb. Roberto",
      address: "Rua das Flores, 45",
      members: 15,
      meetingDay: "Terça-feira, 20h",
      status: "Ativa",
      color: "bg-indigo-500"
    },
    {
      id: 4,
      name: "Vida Jovem",
      leader: "Líder Lucas",
      address: "Espaço Jovem",
      members: 22,
      meetingDay: "Sábado, 18h",
      status: "Em Crescimento",
      color: "bg-amber-500"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <nav className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
            <span>Dashboard</span> <span className="mx-2">/</span> <span className="text-primary">Células</span>
          </nav>
          <h1 className="text-2xl font-bold text-slate-900">Gestão de Células</h1>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
          <span className="material-icons text-lg">add</span>
          Nova Célula
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {/* Map Placeholder */}
         <div className="md:col-span-2 bg-white p-1 rounded-xl shadow-sm border border-slate-200 h-80 relative group overflow-hidden">
            <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
              <span className="material-icons text-slate-300 text-6xl">map</span>
              <p className="absolute mt-20 text-slate-400 font-medium">Mapa de Células</p>
            </div>
            {/* Mock Map Points */}
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary rounded-full ring-4 ring-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary rounded-full ring-4 ring-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
            <div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-primary rounded-full ring-4 ring-white shadow-lg cursor-pointer hover:scale-110 transition-transform"></div>
         </div>

         {/* Stats */}
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 h-80 flex flex-col justify-center">
            <h3 className="text-lg font-bold text-slate-800 mb-6">Resumo Geral</h3>
            <div className="space-y-6">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
                        <span className="material-icons">home</span>
                     </div>
                     <div>
                        <p className="text-sm font-medium text-slate-500">Total de Células</p>
                        <p className="text-xl font-bold text-slate-800">12</p>
                     </div>
                  </div>
               </div>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                        <span className="material-icons">groups</span>
                     </div>
                     <div>
                        <p className="text-sm font-medium text-slate-500">Membros em Células</p>
                        <p className="text-xl font-bold text-slate-800">148</p>
                     </div>
                  </div>
               </div>
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
                        <span className="material-icons">trending_up</span>
                     </div>
                     <div>
                        <p className="text-sm font-medium text-slate-500">Taxa de Crescimento</p>
                        <p className="text-xl font-bold text-slate-800">+15%</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <h2 className="text-lg font-bold text-slate-800 mt-8 mb-4">Grupos Ativos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cells.map((cell) => (
          <div key={cell.id} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
             <div className="h-2 w-full" style={{ backgroundColor: cell.color.replace('bg-', '') === 'bg-emerald-500' ? '#10b981' : cell.color.replace('bg-', '') === 'bg-blue-500' ? '#3b82f6' : cell.color.replace('bg-', '') === 'bg-indigo-500' ? '#6366f1' : '#f59e0b' }}></div>
             <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="text-lg font-bold text-slate-900">{cell.name}</h3>
                   <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded font-medium">{cell.status}</span>
                </div>
                
                <div className="space-y-3 mb-6">
                   <div className="flex items-center text-sm text-slate-600">
                      <span className="material-icons text-slate-400 mr-2 text-lg">person</span>
                      {cell.leader}
                   </div>
                   <div className="flex items-center text-sm text-slate-600">
                      <span className="material-icons text-slate-400 mr-2 text-lg">location_on</span>
                      {cell.address}
                   </div>
                   <div className="flex items-center text-sm text-slate-600">
                      <span className="material-icons text-slate-400 mr-2 text-lg">schedule</span>
                      {cell.meetingDay}
                   </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                   <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500">JD</div>
                      <div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-500">AM</div>
                      <div className="w-8 h-8 rounded-full bg-primary text-white border-2 border-white flex items-center justify-center text-xs font-bold">+{cell.members}</div>
                   </div>
                   <button className="text-primary text-sm font-semibold hover:underline">Detalhes</button>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cells;