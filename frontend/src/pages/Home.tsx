import { GraficoCirculo } from '@/components/myComponents/grafico2';
import { Grafico } from '@/components/myComponents/grafico1';

import { Datatable } from '@/components/myComponents/datatable';
export function Home() {

  return (
    <div className='dark bg-zinc-950 w-screen min-h-screen flex gap-10 p-20'>
      <div className='w-full'>
      
      </div>
      <div className='w-full'>
        <div className='flex'>
          <Grafico/>
          <GraficoCirculo/>
        </div>
        <Datatable/>
      </div>
    </div>
  );
}
