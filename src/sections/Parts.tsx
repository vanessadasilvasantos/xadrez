import Part from "@/components/Part";
import Title from "@/components/Title";
import Image from "next/image";

export default function Parts() {
  return (
    <div className="flex flex-col gap-12 max-md:gap-10 max-sm:gap-8 mt-[300px] max-md:mt-20 max-sm:mt-16">
      <div className="flex mx-[140px] max-lg:mx-[80px] max-md:mx-6 max-sm:mx-4 justify-between items-start max-md:flex-col max-md:gap-6">
        <Title data-aos="slide-in-left" data-aos-duration="800" text="Peças" className="mt-[-60px] max-md:mt-0"/>
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
      <Image className="ml-auto max-md:mx-auto mt-[50px] max-md:mt-0" src="/Malha.png" alt="Malha do tabuleiro" width={250} height={400} />
      <Part data-aos="slide-in-left" data-aos-delay="150" data-aos-duration="800"
          img="/peao.png"
          className="ml-[140px] max-lg:ml-[80px] max-md:mx-auto max-md:ml-auto mt-[-100px] max-md:mt-6"
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
        <div className="flex items-center max-md:flex-col max-md:items-center max-md:gap-6 mt-[140px] max-md:mt-6">
          <Image className="mx-auto mt-[50px] max-md:mt-[-100px] mr-[-96px] max-md:mr-0 pb-[100px] max-md:pb-0 max-sm:w-[100%]" src="/malha2.png" alt="Malha do tabuleiro" width={450} height={600} />
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
          <Image className="mx-auto mt-[50px] max-md:mt-0 ml-[-120px] max-md:ml-0 pb-[100px] max-md:pb-0" src="/malha2.png" alt="Malha do tabuleiro" width={450} height={400} />
        </div>
        <Part data-aos="slide-in-right" data-aos-delay="150" data-aos-duration="800"
          img="/peao.png"
          className="ml-[140px] max-lg:ml-[80px] max-md:mx-auto max-md:ml-auto mt-[90px] max-md:mt-6"
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
        <div className="flex mx-[140px] max-lg:mx-[80px] max-md:mx-6 max-sm:mx-4 mt-[190px] max-md:mt-12 max-sm:mt-8 justify-between items-start max-md:flex-col max-md:gap-6">
          <Title data-aos="slide-in-left" data-aos-duration="800" text="Rainha" className="mt-[-60px] max-md:mt-0"/>
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
      <div className="mt-[190px] max-md:mt-12 max-sm:mt-8 mx-auto flex flex-col items-center">
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
          <Title data-aos="fade-in" data-aos-delay="200" data-aos-duration="800" text="Rei" className="text-[550px] text-transparent bg-clip-text bg-gradient-to-b from-[var(--c2)] via-[var(--c1)] to-[#fafafa] mt-[-180px] max-lg:text-[450px] max-md:text-[250px] max-md:mt-[-100px] max-sm:text-[180px] max-sm:mt-[-80px]"/>
      </div>
    </div>
  );
}