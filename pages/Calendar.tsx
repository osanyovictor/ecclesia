import React from 'react';

const Calendar = () => {
  const days = Array.from({ length: 35 }, (_, i) => i + 1); // Mock calendar days
  const events = [
    { id: 1, title: "Culto de Domingo", time: "18:00 - 20:00", day: 29, type: "service" },
    { id: 2, title: "Ensaio Louvor", time: "19:30 - 21:00", day: 26, type: "rehearsal" },
    { id: 3, title: "Reunião de Líderes", time: "09:00 - 11:00", day: 28, type: "meeting" },
  ];

  return (
    <div className="max-w-7xl mx-auto h-full flex flex-col">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Calendário</h1>
          <p className="text-slate-500 text-sm">Outubro 2023</p>
        </div>
        <div className="flex gap-2">
            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors">
                <span className="material-icons">chevron_left</span>
            </button>
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-700">Hoje</button>
            <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-600 transition-colors">
                <span className="material-icons">chevron_right</span>
            </button>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8">
         {/* Calendar Grid */}
         <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="grid grid-cols-7 border-b border-slate-200 bg-slate-50">
               {['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'].map(day => (
                  <div key={day} className="py-3 text-center text-xs font-semibold text-slate-500 uppercase tracking-wider">
                     {day}
                  </div>
               ))}
            </div>
            <div className="flex-1 grid grid-cols-7 auto-rows-fr">
               {/* Previous month days placeholder */}
               {[28, 29, 30].map(day => (
                  <div key={`prev-${day}`} className="border-b border-r border-slate-100 p-2 min-h-[100px] bg-slate-50/30 text-slate-300">
                     <span className="text-sm font-medium">{day}</span>
                  </div>
               ))}
               
               {/* Current month days */}
               {Array.from({ length: 31 }, (_, i) => i + 1).map(day => {
                  const dayEvents = events.filter(e => e.day === day);
                  return (
                     <div key={day} className="border-b border-r border-slate-100 p-2 min-h-[100px] hover:bg-slate-50 transition-colors relative group cursor-pointer">
                        <span className={`text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full ${day === 25 ? 'bg-primary text-white' : 'text-slate-700'}`}>{day}</span>
                        
                        <div className="mt-2 space-y-1">
                           {dayEvents.map((event, idx) => (
                              <div key={idx} className={`text-[10px] px-1.5 py-1 rounded truncate font-medium ${
                                 event.type === 'service' ? 'bg-primary/10 text-primary' :
                                 event.type === 'rehearsal' ? 'bg-amber-100 text-amber-700' :
                                 'bg-slate-100 text-slate-600'
                              }`}>
                                 {event.title}
                              </div>
                           ))}
                        </div>
                        <button className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 text-slate-400 hover:text-primary transition-all">
                           <span className="material-icons text-lg">add_circle</span>
                        </button>
                     </div>
                  );
               })}
               
               {/* Next month days */}
               {[1].map(day => (
                  <div key={`next-${day}`} className="border-b border-r border-slate-100 p-2 min-h-[100px] bg-slate-50/30 text-slate-300">
                     <span className="text-sm font-medium">{day}</span>
                  </div>
               ))}
            </div>
         </div>

         {/* Sidebar Events */}
         <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
               <h3 className="text-lg font-bold text-slate-900 mb-4">Próximos Eventos</h3>
               <div className="space-y-4">
                  {events.map((event) => (
                     <div key={event.id} className="flex gap-4 group">
                        <div className="flex flex-col items-center min-w-[3rem]">
                           <span className="text-xs font-bold text-slate-400 uppercase">Out</span>
                           <span className="text-xl font-bold text-slate-800">{event.day}</span>
                        </div>
                        <div className="pb-4 border-b border-slate-100 w-full group-last:border-none">
                           <p className="font-semibold text-slate-800 text-sm">{event.title}</p>
                           <p className="text-xs text-slate-500 mt-1 flex items-center">
                              <span className="material-icons text-xs mr-1">schedule</span>
                              {event.time}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
               <button className="w-full mt-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                  Ver Agenda Completa
               </button>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
               <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                     <span className="material-icons text-sm">notifications</span>
                  </div>
                  <h4 className="font-bold text-primary text-sm">Lembrete</h4>
               </div>
               <p className="text-sm text-slate-600">Reunião de planejamento para o evento de Natal na próxima terça-feira.</p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Calendar;