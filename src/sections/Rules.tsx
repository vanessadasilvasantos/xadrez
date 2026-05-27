import Title from "@/components/Title";
import Image from "next/image";

export default function Rules() {
  return (
    <div className="flex flex-col items-center mb-[220px] max-md:mb-16 max-sm:mb-12 mx-[140px] max-lg:mx-[80px] max-md:mx-6 max-sm:mx-4">
        <Image className="mt-[260px] max-md:mt-20 max-sm:mt-16 text-start w-[100%] max-w-[1200px]" src="/pecas.png" alt="Todas as peças do tabuleiro" width={1000} height={400} />
        <Title data-aos="slide-in-left" data-aos-duration="800" text="Regras" className="ml-auto max-md:ml-0" />
        <div className="w-[100%]">
          <p data-aos="fade-in" data-aos-delay="150" data-aos-duration="800" className="text-[var(--m6)] font-inter font-medium text-[24px] max-md:text-lg max-sm:text-base mt-[90px] max-md:mt-10 max-sm:mt-8 w-[660px] max-md:w-full">
            O Xadrez é um jogo de <span className="text-[var(--l2)]">estratégia</span> em que dois jogadores se revezam fazendo movimentos. O objetivo é dar <span className="text-[var(--l2)]">xeque-mate</span>, ou seja, deixar o rei adversário sem possibilidade de escapar. Quando o <span className="text-[var(--l2)]">rei</span> está ameaçado, ocorre o xeque, e o jogador precisa sair dessa situação. Não é permitido fazer jogadas que coloquem o próprio rei em risco, e a partida pode terminar em vitória ou empate dependendo da situação.
          </p>
        </div>
    </div>
  );
}