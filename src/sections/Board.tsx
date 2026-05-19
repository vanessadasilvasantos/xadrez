import Title from "@/components/Title";
import Image from "next/image";

export default function Board() {
  return (
    <div className="bg-[var(--c7)] rounded-[50px] relative pb-[280px]">
      <Title text="Tabuleiro" className="mx-[140px] mt-[120px] text-[var(--c6)]" />
      <p className="text-[var(--c1)] text-right ml-auto font-inter font-medium text-[24px] mr-[140px] mt-[110px]">
        O tabuleiro de xadrez possui 64 casas organizadas em <br/>uma grade de 8×8, com cores <span className="text-[var(--l2)]">alternadas</span> entre claras e <br/>escuras. Nele, os jogadores movimentam suas peças <br/>seguindo regras específicas para capturar o rei <br/>adversário em <span className="text-[var(--l2)]">xeque-mate.</span>
      </p>
      <Image className="mt-[-96px] mb-[100px] absolute" src="/tabuleiro.png" alt="Malha do tabuleiro" width={800} height={400} />
    </div>
  );
}