import Title from "@/components/Title";
import Image from "next/image";

export default function Board() {
  return (
    <div className="bg-[var(--c7)] rounded-[50px]">
      <Title text="Tabuleiro" className="mx-[140px] mt-[120px] text-[var(--c6)]" />
      <p className="text-[var(--c1)] text-right ml-auto font-inter font-medium text-[24px] mr-[140px] mt-[110px]">
        O tabuleiro de xadrez possui 64 casas organizadas em <br/>uma grade de 8×8, com cores alternadas entre claras e <br/>escuras. Nele, os jogadores movimentam suas peças <br/>seguindo regras específicas para capturar o rei <br/>adversário em xeque-mate.
      </p>
      <Image className="mt-[50px] mb-[100px]" src="/tabuleiro.png" alt="Malha do tabuleiro" width={450} height={400} />
    </div>
  );
}