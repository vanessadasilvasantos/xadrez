import Image from 'next/image';

export default function Hero() {
  return (
    <main className="flex mt-[100px] relative justify-between">
      <Image src="/cavalo.png" alt="Cavalo do xadrez" width={350} height={64} className="ml-[140px] mb-4 mt-[30px]" />

      <div className="">
        <h1 className="text-[120px] mt-[80px] flex gap-4 mr-12 font-unica text-[var(--c6)]">XA<span></span>DR<span></span>EZ</h1>
      <span className="text-[26px] mr-12 text-[var(--l3)] font-unica text-end block">chess</span>
        <Image className="absolute top-0 right-0" src="/Malha.png" alt="Malha do tabuleiro" width={600} height={400} />
      </div>
    </main>
  );
}