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
        <div className="flex items-center mt-[240px]">
          <Image className="mx-auto mt-[50px] mr-[-96px] pb-[100px]" src="/malha2.png" alt="Malha do tabuleiro" width={450} height={600} />
          <Part
            img="/peao.png"
            className="mx-auto"
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
          <Image className="mx-auto mt-[50px] ml-[-120px] pb-[100px]" src="/malha2.png" alt="Malha do tabuleiro" width={450} height={400} />
        </div>
        <Part
          img="/peao.png"
          className="ml-[140px] mt-[180px]"
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
        <div className="flex mx-[140px] mt-[260px] justify-between items-start">
          <Title text="Rainha" className="mt-[-60px]"/>
          <Part
          className="bg-[var(--m4)]"
            img="/peao.png"
            alt="Rainha"
            title="Rainha"
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
      <div className="mt-[260px] mx-auto flex flex-col items-center">
        <Part
          className="bg-[var(--m5)]"
            img="/peao.png"
            alt="Rainha"
            title="Rainha"
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
          <Title text="Rei" className="text-[550px] text-transparent bg-clip-text
          bg-gradient-to-b
          from-[var(--c2)]
          via-[var(--c1)]
          to-[#fafafa] mt-[-180px]"/>
      </div>
    </div>
  );
}