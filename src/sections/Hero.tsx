import Image from 'next/image';

export default function Hero() {
  return (
    <main className="flex mt-[100px] max-md:mt-[60px] relative justify-between  ">
      <Image src="/cavalo.png" alt="Cavalo do xadrez" width={350} height={64} className="ml-[140px] max-lg:ml-[80px] max-md:ml-[40px] max-sm:ml-[0px] mb-4 mt-[30px] max-lg:w-[260px] max-md:w-[200px] max-sm:w-[150px]" />

      <div>
        <h1 className="text-[120px] max-lg:text-[100px] max-md:text-[80px] mt-[80px] max-md:mt-[60px] flex gap-4 max-lg:gap-2 mr-12 max-lg:mr-10 font-unica text-[var(--c6)] max-sm:mr-7 max-sm:mt-[40px] max-sm:gap-1 max-sm:text-[60px]">XA<span></span>DR<span></span>EZ</h1>
      <span className="text-[26px] max-md:text-[20px] mr-12 max-lg:mr-10 text-[var(--l3)] font-unica text-end block max-sm:mr-7">chess</span>
        <Image className="absolute top-0 right-0 max-lg:w-[500px] max-md:w-[400px] max-sm:w-[300px]" src="/Malha.png" alt="Malha do tabuleiro" width={600} height={400} />
      </div>
    </main>
  );
}