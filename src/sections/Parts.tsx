import Part from "@/components/Part";
import Title from "@/components/Title";
import Image from "next/image";

export default function Parts() {
  return (
    <div className="flex flex-col gap-12 mt-[300px]">
      <div className="flex mx-[140px] justify-between items-start">
        <Title data-aos="slide-in-left" data-aos-duration="800" text="Peças" className="mt-[-60px]"/>
        <Part data-aos="slide-in-right" data-aos-delay="150" data-aos-duration="800"
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
      <Part data-aos="slide-in-left" data-aos-delay="150" data-aos-duration="800"
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
        <div className="flex items-center mt-[140px]">
          <Image className="mx-auto mt-[50px] mr-[-96px] pb-[100px]" src="/malha2.png" alt="Malha do tabuleiro" width={450} height={600} />
          <Part data-aos="slide-in-right" data-aos-duration="800"
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
        <Part data-aos="slide-in-right" data-aos-delay="150" data-aos-duration="800"
          img="/peao.png"
          className="ml-[140px] mt-[90px]"
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
        <div className="flex mx-[140px] mt-[190px] justify-between items-start">
          <Title data-aos="slide-in-left" data-aos-duration="800" text="Rainha" className="mt-[-60px]"/>
          <Part data-aos="slide-in-right" data-aos-delay="150" data-aos-duration="800"
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
      <div className="mt-[190px] mx-auto flex flex-col items-center">
        <Part data-aos="fade-in" data-aos-duration="800"
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
          <Title data-aos="fade-in" data-aos-delay="200" data-aos-duration="800" text="Rei" className="text-[550px] text-transparent bg-clip-text
          bg-gradient-to-b
          from-[var(--c2)]
          via-[var(--c1)]
          to-[#fafafa] mt-[-180px]"/>
      </div>
    </div>
  );
}