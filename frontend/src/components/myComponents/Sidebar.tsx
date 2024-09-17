import { useState } from 'react';
import { SidebarItem } from "./SidebarItem";
import { AlignRightIcon } from "lucide-react";
import logo from '../../assets/logo.svg'

export function Sidebar() {
  const [encolher, setEncolher] = useState<boolean>(false);
  const [fixo, setFixo] = useState<boolean>(false);

  function handleMouseEnter(): void {
    setEncolher(true);
  }

  function handleMouseLeave(): void {
    if (!fixo) {
      setEncolher(false);
    }
  }

  function botaoFixarMenu(): void {
    setFixo(!fixo);
    setEncolher(true);
  }

  return (
    <aside
      className={`flex flex-col relative ${encolher || fixo ? 'w-80' : 'w-[80px]'} bg-zinc-950 transition-width duration-300 p-2 border-r border-zinc-800`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="border-zinc-700 pt-0 pb-8 border-b border-zinc-800">
        <div className="flex items-center justify-center gap-4">
          <img src={logo} alt="Logo" className="w-16" />
     
        </div>
        <button 
          onClick={botaoFixarMenu} 
          className={`${encolher || fixo ? 'absolute top-2 right-2 text-zinc-100' : 'hidden'}`}
        >
          <AlignRightIcon size={24} className={fixo ? 'text-chart-1' : 'text-zinc-100'} />
        </button>
      </div>

      <nav className="flex flex-col gap-4 mt-5">
        <SidebarItem to="/" content="Início" icon={<AlignRightIcon />} hiddenOnHover={!encolher && !fixo} />
      </nav>
    </aside>
  );
}
