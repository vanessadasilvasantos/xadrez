import Part from "@/components/Part";

export default function Parts() {
  return (
    <div className="flex flex-col gap-12 mt-[100px]">
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
  );
}