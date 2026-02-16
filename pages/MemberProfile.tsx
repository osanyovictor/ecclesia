import React from 'react';
import { useNavigate } from 'react-router-dom';

const MemberProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header with Back Button */}
      <div className="bg-white border-b border-slate-200 mb-6 p-4 rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
         <div className="flex items-center gap-4">
            <button onClick={() => navigate('/members')} className="text-slate-400 hover:text-primary transition-colors">
              <span className="material-icons">arrow_back</span>
            </button>
            <div>
              <h1 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                 Ricardo Oliveira Santos
                 <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">Ativo</span>
              </h1>
              <p className="text-sm text-slate-500">Membro desde Outubro, 2018 • ID: #8829</p>
            </div>
         </div>
         <div className="flex items-center gap-3">
            <button className="inline-flex items-center px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 bg-white hover:bg-slate-50 transition-all">
               <span className="material-icons text-lg mr-2">badge</span>
               Cartão Digital
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-primary hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-all shadow-sm">
               <span className="material-icons text-lg mr-2">save</span>
               Salvar Alterações
            </button>
         </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        {/* Tabs */}
        <div className="border-b border-slate-200 px-6 bg-slate-50/50">
           <nav className="flex space-x-8 overflow-x-auto no-scrollbar">
              <button className="py-4 px-1 text-sm font-medium border-b-2 border-primary text-primary transition-all whitespace-nowrap flex items-center gap-2">
                 <span className="material-icons text-lg">person</span>
                 Dados Pessoais
              </button>
              <button className="text-slate-500 hover:text-slate-700 py-4 px-1 text-sm font-medium border-b-2 border-transparent transition-all whitespace-nowrap flex items-center gap-2">
                 <span className="material-icons text-lg">church</span>
                 Eclesiástico
              </button>
              <button className="text-slate-500 hover:text-slate-700 py-4 px-1 text-sm font-medium border-b-2 border-transparent transition-all whitespace-nowrap flex items-center gap-2">
                 <span className="material-icons text-lg">groups</span>
                 Família
              </button>
           </nav>
        </div>

        <div className="p-8">
           <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Profile Image */}
              <div className="lg:col-span-1 flex flex-col items-center">
                 <div className="relative group cursor-pointer w-full max-w-xs mx-auto">
                    <div className="aspect-square rounded-xl overflow-hidden bg-slate-100 border-2 border-dashed border-slate-300 group-hover:border-primary transition-all relative">
                       <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfqDnGA-21gBIXKEARBP95WOsr019eoTC2Apo1fQYJ9mQQvDSbTPMbMqx5UxktLbn5wSMXSqNROuywxYG_KGF26zq3QM9zPb6nGROVwy2fN2IE9BQ_OXqd3AmCB1REyvbn-IqtrGZecLuOTAzvLA7oIp8Lns0Pk1r7JkVVvY88je6GSkQ5YByHxZWG9F6ybGphelvh4acjo8k3fzKpN5_BIjqOUN22ue4z9FT_tdjmJW149-WHNN5zsd8NjyW9pj48YYw2S125oHY" alt="Profile" />
                       <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="material-icons text-white text-3xl">photo_camera</span>
                       </div>
                    </div>
                    <button className="mt-4 text-xs font-semibold text-primary uppercase tracking-wider w-full text-center">Alterar Foto</button>
                 </div>
                 
                 <div className="mt-8 w-full bg-primary/5 p-4 rounded-lg border border-primary/10">
                    <h4 className="text-xs font-bold text-primary uppercase mb-2">Informações Rápidas</h4>
                    <div className="space-y-2">
                       <p className="text-sm flex justify-between"><span className="text-slate-500">Idade:</span> <span className="font-medium">34 anos</span></p>
                       <p className="text-sm flex justify-between"><span className="text-slate-500">Membresia:</span> <span className="font-medium">6 anos</span></p>
                       <p className="text-sm flex justify-between"><span className="text-slate-500">Fidelidade:</span> <span className="font-medium text-emerald-600">Alta</span></p>
                    </div>
                 </div>
              </div>

              {/* Form Data */}
              <div className="lg:col-span-3 space-y-8">
                 <div>
                    <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-slate-800">
                       <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                       Informações Básicas
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <InputGroup label="Nome Completo" value="Ricardo Oliveira Santos" />
                       <InputGroup label="Data de Nascimento" type="date" value="1989-05-15" />
                       <InputGroup label="Email" type="email" value="ricardo.santos@email.com" />
                       <InputGroup label="Telefone / WhatsApp" value="(11) 98765-4321" />
                    </div>
                 </div>

                 <div className="pt-8 border-t border-slate-100">
                    <h3 className="text-lg font-semibold mb-6 flex items-center gap-2 text-slate-800">
                       <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                       Endereço e Localização
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                       <div className="md:col-span-2">
                          <InputGroup label="CEP" value="04571-010" />
                       </div>
                       <div className="md:col-span-4">
                          <InputGroup label="Endereço" value="Rua das Oliveiras, 123" />
                       </div>
                       <div className="md:col-span-2">
                          <InputGroup label="Número" value="123" />
                       </div>
                       <div className="md:col-span-2">
                           <InputGroup label="Complemento" value="Apto 42" />
                       </div>
                       <div className="md:col-span-2">
                           <InputGroup label="Bairro" value="Jardim América" />
                       </div>
                       <div className="md:col-span-3">
                           <InputGroup label="Cidade" value="São Paulo" />
                       </div>
                       <div className="md:col-span-3">
                           <InputGroup label="Estado" value="SP" />
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

const InputGroup = ({ label, value, type = "text" }: any) => (
  <div className="flex flex-col space-y-1.5">
    <label className="text-sm font-medium text-slate-700">{label}</label>
    <input 
      type={type} 
      defaultValue={value} 
      className="px-4 py-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-slate-800 text-sm transition-all"
    />
  </div>
);

export default MemberProfile;