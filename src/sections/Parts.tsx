import Part from "@/components/Part";
import Title from "@/components/Title";
import Image from "next/image";

export default function Parts() {
  return (
    <div className="flex flex-col gap-12 mt-[300px]">
      <div className="flex mx-[140px] justify-between items-start">
        <Title text="Peças" className="mt-[-60px]"/>
        <Part
          img="/peao.png"
          alt="Peão"
          title="Peão"
          items={[
            {
              text: "Avança uma casa por vez.",
              highlights: ["uma casa"],
            },
            {
              text: "Captura em diagonal.",
              highlights: ["diagonal"],
            },
            {
              text: "Pode virar outra peça.",
              highlights: ["virar"],
            },
          ]}
        />
      </div>
      <Image className="ml-auto mt-[50px]" src="/Malha.png" alt="Malha do tabuleiro" width={250} height={400} />
      <Part
          img="/peao.png"
          className="ml-[140px] mt-[-100px]"
          alt="Peão"
          title="Peão"
          items={[
            {
              text: "Avança uma casa por vez.",
              highlights: ["uma casa"],
            },
            {
              text: "Captura em diagonal.",
              highlights: ["diagonal"],
            },
            {
              text: "Pode virar outra peça.",
              highlights: ["virar"],
            },
          ]}
        />
        <Part
          img="/peao.png"
          className="mx-auto mt-[240px]"
          alt="Peão"
          title="Peão"
          items={[
            {
              text: "Avança uma casa por vez.",
              highlights: ["uma casa"],
            },
            {
              text: "Captura em diagonal.",
              highlights: ["diagonal"],
            },
            {
              text: "Pode virar outra peça.",
              highlights: ["virar"],
            },
          ]}
        />
    </div>
  );
}