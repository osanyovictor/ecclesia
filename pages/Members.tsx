import React from 'react';
import { useNavigate } from 'react-router-dom';

const Members = () => {
  const navigate = useNavigate();

  const members = [
    {
      id: 1,
      name: "Ricardo S. Almeida",
      cpf: "123.456.789-00",
      cell: "Bethel - Central",
      category: "Batizado",
      status: "Ativo",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_xqfh04SHQBWpGbQMs8gUkoQ506tJcO544KKAEFIPclhWJOaT4QZW4dPBTIvpinWhvjj26HGeOD5pUP0flmxhPDKCoMccJayLzLHug72iCFeNDeyPw2p1iYr3VFKT_2rVjkb3YL-QSs8ao9FQBGkVZcjRK7OpIpcONqplA0zmOWBbubN7dsiiuh7-qGtrSEslwkhW1ZqvhxdwzHswsE98HFfbKhYUzSKH18s9Xo23cUbwyUn0CX1PutDbzui5DjWNXS8CeutPxnE"
    },
    {
      id: 2,
      name: "Mariana Costa",
      cpf: "987.654.321-11",
      cell: "Shalom - Sul",
      category: "Não Batizado",
      status: "Visitante",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOW1eP9UFdVEgkFCwiGGVKeuCYM_GJSj7hhWH4NzuUtFRVEKBpL-Ezh5pmpTswQs7E4-FcqhyERhHnU9oq8lUyZ_a_0uJsvYfWUzyL7cLxvfYgn2w1etejL_Uidleo8vc51cUyet4Y51UGJM8539me55p669c6XMsBpeKf2WUOzsv5uXLpJa7flPTjuJeL5oFCMJ_LHbVYxgEy2Ir8aqBxrFFlCyy7u0aMf8Ad1SrR9PzZlfECajlSr5sS3EomHlQOC83Gf2D3Va4"
    },
    {
      id: 3,
      name: "Felipe Oliveira",
      cpf: "456.123.789-22",
      cell: "Graça - Norte",
      category: "Novo Convertido",
      status: "Inativo",
      avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGltVNoGlNz7vXyNgxdbUv8zHlAbaCjmTe7YUTB9EiZIOmcBFSSVBHmb0FJfNXHsNqNT1IhnwhE3BiSx_l64WvbXbAmZURz7agSeKzfI6U95yhBJPWZs2MjCrB8lNZuNqP2g9aTOIXbynphVES-aRuUVljKdRZpH-ZQqH2pSsBNZlL6SZR6ol8e08DKQq64qpgfh7cGpYVA5VRe3U0XSsba9TXwiYKUhx4RTT2KOqjja2U009Vw-CcKt3-IU5PRDbLqi7tqC_2MHg"
    },
    {
      id: 4,
      name: "Juliana Santos",
      cpf: "321.654.987-44",
      cell: "Bethel - Central",
      category: "Batizado",
      status: "Ativo",
      avatar: null, // Test initials fallback
      initials: "JS"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <nav className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">
            <span>Dashboard</span> <span className="mx-2">/</span> <span className="text-primary">Membros</span>
          </nav>
          <h1 className="text-2xl font-bold text-slate-900">Diretório de Membros</h1>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all shadow-lg shadow-primary/20">
          <span className="material-icons text-lg">add</span>
          Novo Cadastro
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 mb-6 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-5 relative">
            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full pl-10 pr-4 py-2.5 bg-background-light border-none rounded-lg focus:ring-2 focus:ring-primary text-sm" placeholder="Buscar por Nome ou CPF..." type="text" />
          </div>
          <div className="md:col-span-3">
            <select className="w-full py-2.5 bg-background-light border-none rounded-lg focus:ring-2 focus:ring-primary text-sm text-slate-600">
              <option value="">Todos os Status</option>
              <option value="member">Membro</option>
              <option value="visitor">Visitante</option>
            </select>
          </div>
          <div className="md:col-span-3">
            <select className="w-full py-2.5 bg-background-light border-none rounded-lg focus:ring-2 focus:ring-primary text-sm text-slate-600">
              <option value="">Todas Categorias</option>
              <option value="baptized">Batizado</option>
              <option value="new-convert">Novo Convertido</option>
            </select>
          </div>
          <div className="md:col-span-1 flex items-center justify-center">
            <button className="p-2.5 text-slate-400 hover:bg-slate-100 rounded-lg transition-colors">
              <span className="material-icons">filter_list</span>
            </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider w-10">
                  <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                </th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Membro</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Célula</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Categoria</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-center">Status</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-center">Contato</th>
                <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Ações</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {members.map((member) => (
                <tr key={member.id} className="hover:bg-slate-50 transition-colors cursor-pointer" onClick={() => navigate(`/members/${member.id}`)}>
                  <td className="px-6 py-4" onClick={(e) => e.stopPropagation()}>
                    <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {member.avatar ? (
                        <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full object-cover" />
                      ) : (
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                          {member.initials}
                        </div>
                      )}
                      <div>
                        <div className="text-sm font-semibold text-slate-900">{member.name}</div>
                        <div className="text-xs text-slate-500 font-medium">CPF: {member.cpf}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full border border-primary/20">{member.cell}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-600">{member.category}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      member.status === 'Ativo' ? 'bg-emerald-100 text-emerald-800' :
                      member.status === 'Visitante' ? 'bg-amber-100 text-amber-800' :
                      'bg-slate-100 text-slate-800'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center" onClick={(e) => e.stopPropagation()}>
                    <a href="#" className="text-emerald-500 hover:text-emerald-600 transition-colors">
                      <span className="material-icons">chat</span>
                    </a>
                  </td>
                  <td className="px-6 py-4 text-right" onClick={(e) => e.stopPropagation()}>
                    <div className="flex justify-end gap-2">
                      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors"><span className="material-icons text-xl">visibility</span></button>
                      <button className="p-1.5 text-slate-400 hover:text-primary transition-colors"><span className="material-icons text-xl">edit</span></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination (Simplified) */}
        <div className="px-6 py-4 bg-slate-50 flex items-center justify-between border-t border-slate-200">
          <span className="text-sm text-slate-500 font-medium">
            Mostrando <span className="text-slate-900">1</span> a <span className="text-slate-900">4</span> de <span className="text-slate-900">1.248</span> membros
          </span>
          <div className="flex items-center gap-1">
             <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-white text-slate-500"><span className="material-icons text-sm">chevron_left</span></button>
             <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white text-sm font-semibold">1</button>
             <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-white text-slate-600 text-sm">2</button>
             <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-white text-slate-600 text-sm">3</button>
             <span className="px-2 text-slate-400">...</span>
             <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-white text-slate-500"><span className="material-icons text-sm">chevron_right</span></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;