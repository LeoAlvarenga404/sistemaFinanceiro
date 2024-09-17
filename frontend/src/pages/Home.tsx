import { GraficoCirculo } from '@/components/myComponents/grafico2';
import { Grafico } from '@/components/myComponents/grafico1';
import { RadarGrafico } from '@/components/myComponents/grafico3';
import { GraficoBarra } from '@/components/myComponents/grafico4';
import { GraficoInterativo } from '@/components/myComponents/grafico5';
export function Home() {

  return (
    <div className='dark bg-zinc-950 w-screen min-h-screen flex flex-col gap-10 p-20'>
      <div className='flex'>
        <Grafico/>
        <GraficoCirculo/>
        <RadarGrafico/>
        <GraficoBarra/>
      </div>
      <GraficoInterativo/>
    </div>
  );
}
