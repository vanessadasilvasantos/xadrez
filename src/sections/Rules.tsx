import Title from "@/components/Title";
import Image from "next/image";

export default function Rules() {
  return (
    <div className="flex flex-col items-center mx-[140px]">
        <Image className="mt-[260px] text-start w-[100%] max-w-[1200px]" src="/pecas.png" alt="Todas as peças do tabuleiro" width={1000} height={400} />
        <Title text="Regras" className="mt-[80px] ml-auto" />
        <div className="w-[100%]">
          <p className="text-[var(--m6)] font-inter font-medium text-[24px] mt-[110px] w-[660px]">
            O Xadrez é um jogo de <span className="text-[var(--l2)]">estratégia</span> em que dois jogadores se revezam fazendo movimentos. O objetivo é dar <span className="text-[var(--l2)]">xeque-mate</span>, ou seja, deixar o rei adversário sem possibilidade de escapar. Quando o <span className="text-[var(--l2)]">rei</span> está ameaçado, ocorre o xeque, e o jogador precisa sair dessa situação. Não é permitido fazer jogadas que coloquem o próprio rei em risco, e a partida pode terminar em vitória ou empate dependendo da situação.
          </p>
        </div>
    </div>
  );
}