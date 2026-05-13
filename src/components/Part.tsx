import Image from "next/image";

export default function Part() {
  return (
    <div className="bg-[var(--c7)] flex rounded-[50px] w-[600px] p-[10px]">
        <Image className="rounded-[50px]" src="/cavalo.png" alt="Malha do tabuleiro" width={200} height={200} />
      <div className="pl-[20px]">
        <h2 className="font-unica text-[var(--c1)] text-[40px]">Peão</h2>
        <ul className="list-disc text-inter pl-[20px] text-[var(--c1)]">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </div>
  );
}