import Part from "@/components/Part";
import Title from "@/components/Title";
import Image from "next/image";
import PiecesCarousel from "@/components/PiecesCarousel";

const piecesData = [
  {
    img: "/peao.png",
    alt: "Peão",
    title: "Peão",
    items: [
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
    ],
  },
  {
    img: "/peao.png",
    alt: "Peão",
    title: "Peão",
    items: [
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
    ],
  },
  {
    img: "/peao.png",
    alt: "Peão",
    title: "Peão",
    items: [
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
    ],
  },
  {
    img: "/peao.png",
    alt: "Peão",
    title: "Peão",
    items: [
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
    ],
  },
];

export default function Parts() {
  return (
    <div className="flex flex-col gap-12 max-md:gap-10 max-sm:gap-8 mt-[300px] max-md:mt-20 max-sm:mt-16 max-sm:mx-4">
      {/* Desktop layout */}
      <div className="hidden md:flex flex-col gap-12">
        <div className="flex mx-[140px] max-lg:mx-[80px] justify-between items-start">
          <Title data-aos="slide-in-left" data-aos-duration="800" text="Peças" className="mt-[-60px]"/>
          <Part data-aos="slide-in-right" data-aos-delay="150" data-aos-duration="800"
            img="/peao.png"
            alt="Peão"
            title="Peão"
            items={piecesData[0].items}
          />
        </div>
        <Image className="ml-auto" src="/Malha.png" alt="Malha do tabuleiro" width={250} height={400} />
        <Part data-aos="slide-in-left" data-aos-delay="150" data-aos-duration="800"
            img="/peao.png"
            className="ml-[140px] max-lg:ml-[80px]"
            alt="Peão"
            title="Peão"
            items={piecesData[1].items}
          />
        <div className="flex items-center gap-6 mt-[140px]">
          <Image className="mx-auto mt-[50px] mr-[-96px] pb-[100px]" src="/malha2.png" alt="Malha do tabuleiro" width={450} height={600} />
          <Part data-aos="slide-in-right" data-aos-duration="800"
            img="/peao.png"
            className="mx-auto"
            alt="Peão"
            title="Peão"
            items={piecesData[2].items}
          />
          <Image className="mx-auto mt-[50px] ml-[-120px] pb-[100px]" src="/malha2.png" alt="Malha do tabuleiro" width={450} height={400} />
        </div>
        <Part data-aos="slide-in-right" data-aos-delay="150" data-aos-duration="800"
          img="/peao.png"
          className="ml-[140px] max-lg:ml-[80px] mt-[90px]"
          alt="Peão"
          title="Peão"
          items={piecesData[3].items}
        />
      </div>

      {/* Mobile layout - Carousel */}
      <div className="md:hidden flex flex-col gap-8">
        <div className="flex justify-center">
          <Title data-aos="slide-in-left" data-aos-duration="800" text="Peças" className="mt-0"/>
        </div>
        <div data-aos="fade-in" data-aos-duration="800">
          <PiecesCarousel pieces={piecesData} />
        </div>
      </div>

      {/* Rainha and Rei section - stays the same on all screens */}
      <div className="flex mx-[140px] max-lg:mx-[80px] max-md:mx-6 max-sm:mx-0 mt-[190px] max-md:mt-12 max-sm:mt-8 justify-between items-start max-md:flex-col max-md:gap-6">
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