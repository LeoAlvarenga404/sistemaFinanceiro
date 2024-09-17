import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarItemProps {
  to: string;
  content: string;
  icon?: ReactNode;
  hiddenOnHover: boolean;
}

export function SidebarItem({ to, content, icon: Icon, hiddenOnHover }: SidebarItemProps) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <div className={`background-linear flex w-full py-3 gap-3 rounded-xl hover:text-white ${isActive ? 'bgOnActive text-white' : 'text-zinc-300'} `}>
        <div className='ml-4'>
          {}
          {Icon && (
            <div className='text-4xl'>
              {Icon}
            </div>
          )}
        </div>
        <span
          className={`text-xl overflow-hidden whitespace-nowrap transition-all duration-500 ease-out ${hiddenOnHover ? 'opacity-0' : 'opacity-100'}`}
        >
          {content}
        </span>
      </div>
    </Link>
  );
}
