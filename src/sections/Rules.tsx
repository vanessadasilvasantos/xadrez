import Title from "@/components/Title";
import Image from "next/image";

export default function Rules() {
  return (
    <div className="flex flex-col items-center mx-[140px]">
        <Image className="mt-[260px] w-[100%] max-w-[1000px]" src="/pecas.png" alt="Todas as peças do tabuleiro" width={1000} height={400} />
        <Title text="Regras" className="mt-[80px] ml-auto" />
    </div>
  );
}