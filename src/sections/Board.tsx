import Title from "@/components/Title";
import Image from "next/image";

export default function Board() {
  return (
    <div className="bg-[var(--c7)] rounded-[50px] relative pb-[280px] max-md:pb-[140px] max-sm:pb-[120px] pt-[100px] max-md:pt-12 max-sm:pt-8 px-4">
      <Title data-aos="slide-in-left" data-aos-duration="800" text="Tabuleiro" className="mx-[140px] max-lg:mx-[80px] max-md:mx-6 max-sm:mx-4 text-[var(--c6)]" />
      <p className="text-[var(--c1)] text-right max-md:text-left ml-auto font-inter font-medium text-[24px] max-md:text-lg max-sm:text-base mr-[140px] max-lg:mr-[80px] max-md:mr-6 max-sm:mr-4 mt-[110px] max-md:mt-10 max-sm:mt-8" data-aos="fade-in" data-aos-delay="150" data-aos-duration="800">
        O tabuleiro de xadrez possui 64 casas organizadas em <br/>uma grade de 8×8, com cores <span className="text-[var(--l2)]">alternadas</span> entre claras e <br/>escuras. Nele, os jogadores movimentam suas peças <br/>seguindo regras específicas para capturar o rei <br/>adversário em <span className="text-[var(--l2)]">xeque-mate.</span>
      </p>
      <Image className="mt-[-96px] max-md:mt-6 max-sm:mt-4 mb-[100px] max-md:mb-0 absolute max-md:relative max-w-full" src="/tabuleiro.png" alt="Malha do tabuleiro" width={800} height={400} />
    </div>
  );
}