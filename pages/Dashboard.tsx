import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const Dashboard = () => {
  const attendanceData = [
    { name: 'Oct 01', main: 100, youth: 65 },
    { name: 'Oct 08', main: 130, youth: 80 },
    { name: 'Oct 15', main: 170, youth: 100 },
    { name: 'Oct 22', main: 140, youth: 90 },
  ];

  const demographicData = [
    { name: 'Adults', value: 55, color: '#1152d4' },
    { name: 'Youth', value: 30, color: '#fbbf24' },
    { name: 'Children', value: 15, color: '#dbeafe' },
  ];

  return (
    <div className="space-y-8">
      {/* KPI Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard 
          title="Total de Membros" 
          value="1.284" 
          change="+12 este mês" 
          changeType="positive" 
          icon="person" 
          iconColor="bg-primary/10 text-primary" 
        />
        <KPICard 
          title="Visitantes (Mês)" 
          value="42" 
          change="-4% vs mês anterior" 
          changeType="negative" 
          icon="person_add" 
          iconColor="bg-amber-100 text-amber-600" 
        />
        <KPICard 
          title="Células Ativas" 
          value="56" 
          change="98% participação" 
          changeType="positive" 
          icon="diversity_3" 
          iconColor="bg-emerald-100 text-emerald-600" 
        />
        <KPICard 
          title="Saldo Atual" 
          value="R$ 24.510" 
          change="Atualizado há 2h" 
          changeType="neutral" 
          icon="account_balance" 
          iconColor="bg-primary/10 text-primary" 
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-800">Frequência aos Cultos</h2>
            <div className="flex items-center space-x-4">
              <span className="flex items-center text-xs text-slate-500"><span className="w-3 h-3 bg-primary rounded-full mr-1"></span> Culto Principal</span>
              <span className="flex items-center text-xs text-slate-500"><span className="w-3 h-3 bg-primary/30 rounded-full mr-1"></span> Jovens</span>
            </div>
          </div>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={attendanceData} barSize={12} barGap={4}>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748b'}} dy={10} />
                <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="youth" fill="#bfdbfe" radius={[4, 4, 0, 0]} />
                <Bar dataKey="main" fill="#1152d4" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center">
          <h2 className="text-lg font-bold text-slate-800 mb-2 w-full text-left">Demografia</h2>
          <div className="relative h-48 w-48 mt-4">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={demographicData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {demographicData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                </PieChart>
             </ResponsiveContainer>
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-bold text-slate-800">1.284</span>
                <span className="text-[10px] text-slate-500 uppercase">Membros</span>
             </div>
          </div>
          <div className="w-full mt-6 space-y-3">
             {demographicData.map((item) => (
               <div key={item.name} className="flex items-center justify-between">
                 <span className="flex items-center text-sm text-slate-600">
                    <span className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></span>
                    {item.name}
                 </span>
                 <span className="font-semibold text-slate-800">{item.value}%</span>
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-slate-800">Alertas Pendentes</h2>
              <span className="bg-rose-100 text-rose-600 text-xs font-bold px-2 py-1 rounded">3 Ações</span>
            </div>
            <div className="space-y-4">
               <AlertItem 
                 icon="warning" 
                 iconColor="text-rose-500" 
                 title="Relatório Célula Norte" 
                 desc="Líder: David Wilson • Faltante Out 22" 
               />
               <AlertItem 
                 icon="assignment_late" 
                 iconColor="text-amber-500" 
                 title="Visitantes para Contato" 
                 desc="5 Novos visitantes aguardando contato" 
               />
               <AlertItem 
                 icon="warning" 
                 iconColor="text-rose-500" 
                 title="Auditoria Financeira" 
                 desc="Reconciliação de Setembro pendente" 
               />
            </div>
         </div>

         <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-6">
               <h2 className="text-lg font-bold text-slate-800">Aniversariantes</h2>
               <button className="text-primary text-sm font-medium hover:underline">Ver Todos</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <BirthdayItem 
                 img="https://lh3.googleusercontent.com/aida-public/AB6AXuArZwUrS8JHre1LF6YUF4rdTx0N21RHh-6EZNpN3HzHPxdvmvd2JfbfTCk26Q78IkHtdA1gYQ5hq9iomwQy7wulGKSc13083dkhN_r_ZuF_1i2lSlESOWz7rKD9pPAsv9yJBVFryWqSOrRcSBgWTLXPHzzyxJVeTDxTHn6dv__G1CKlqHRzTzHrJnsO65hqFw3aDit-Meq63yy7o4UtY8pskZR2uoQQryivJ6ry0zomjTaF29fVnstmlOr5atTMuhXcgDaxyaGR9YU"
                 name="Sarah Jenkins"
                 date="Hoje, Out 25"
               />
               <BirthdayItem 
                 img="https://lh3.googleusercontent.com/aida-public/AB6AXuBBMUqXhvxAV4BIcFE9uclwG5G_ErQNVhKyZHz-Ia4hpMO4e55kSL5dByCuhVF4-lRFAva6tSD94cb4hHwXzGVS5pWciib2jqlw0Z9WO2bARv8Ps9ZHa1C40vIE2rnEmc-6t9LxyRebNplqhLPA1025buB2LgqjN1GxlIYiTw-ZOrAqwcajYhhCDTw05Fl49vVy5OJb4bLgcHe80QEEMDmS1YWlE6r6xwLy_qInm9CNIghCDaTm07JkBrsszJMzn2zXRgx1rqzKvkQ"
                 name="Mark Roberts"
                 date="Amanhã, Out 26"
               />
               <BirthdayItem 
                 img="https://lh3.googleusercontent.com/aida-public/AB6AXuC-KM2M_jPt-cxA1FR9HpiKNDBBZbN2S51TidmigWohSmG_JFoIe_DJFPgc80vQklYS6iHI0Vq0oWPjQUbbgeXI6VpQDUORB8Jx_cHwIxaDIAWV9-yr0oKVl-WLaWgPHDA7lsalBea-veNuz8P3jG-FNX_pb14eNO20nh9ieZ5sIBsE8xsmXexrUV0IoEYOMnqmGDr-wvw_gWKpxJIXam2DJ09wg0ZYWwk6szXqu0iPGJs0QM0VR09QoNeKTVzhI0FQpDIAcoql2mc"
                 name="Elena Peters"
                 date="Quinta, Out 27"
               />
               <BirthdayItem 
                 img="https://lh3.googleusercontent.com/aida-public/AB6AXuClkHqK0RYXTOGuA_asxd_zNd5ZXoqkmPNG0tQO9wh8f8gD68d2_AW9tqoc4UDmqcdbnNPlt9Vm60Fs3oH5v_yFkJDpAwUEjWxr_JSuJ8ToaU8y3rITbBfjhA9MseFuusnQ6yHHnyf-ucDIpZILikxrwk_1eHiFulJWB_otc_7csssURaeSEeeqEBsvrfumwkqAqAc0HlfrYWmVusHNY5qY32lYz-RZMwKVnG_UcSoKw9cVXZS0kn73InoRBIMxprn_Fb-3wNxQjNA"
                 name="Jason Knight"
                 date="Domingo, Out 30"
               />
            </div>
         </div>
      </div>
    </div>
  );
};

const KPICard = ({ title, value, change, changeType, icon, iconColor }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{title}</p>
        <h3 className="text-3xl font-bold mt-2 text-slate-900">{value}</h3>
        <p className={`text-xs font-medium mt-2 flex items-center ${
          changeType === 'positive' ? 'text-emerald-600' : 
          changeType === 'negative' ? 'text-rose-500' : 'text-slate-500'
        }`}>
          <span className="material-icons text-sm mr-1">
            {changeType === 'positive' ? 'trending_up' : changeType === 'negative' ? 'trending_down' : 'schedule'}
          </span>
          {change}
        </p>
      </div>
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl ${iconColor}`}>
        <span className="material-icons">{icon}</span>
      </div>
    </div>
  </div>
);

const AlertItem = ({ icon, iconColor, title, desc }: any) => (
  <div className="p-3 bg-slate-50 rounded-lg flex items-start space-x-3 border border-slate-100">
    <span className={`material-icons ${iconColor} mt-0.5`}>{icon}</span>
    <div>
      <p className="text-sm font-semibold text-slate-800">{title}</p>
      <p className="text-xs text-slate-500 mt-1">{desc}</p>
    </div>
  </div>
);

const BirthdayItem = ({ img, name, date }: any) => (
  <div className="flex items-center p-3 hover:bg-slate-50 rounded-lg transition-colors group cursor-pointer">
    <img src={img} alt={name} className="w-10 h-10 rounded-full object-cover" />
    <div className="ml-4 flex-1">
      <p className="text-sm font-semibold text-slate-800">{name}</p>
      <p className="text-xs text-slate-500">{date}</p>
    </div>
    <button className="hidden group-hover:flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full transition-all">
      <span className="material-icons text-sm">card_giftcard</span>
    </button>
  </div>
);

export default Dashboard;