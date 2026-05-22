export default function Nav() {
  return (
    <nav className="flex justify-between mx-[140px] max-lg:mx-[80px] max-md:mx-[40px] max-sm:mx-[20px] mt-[40px] max-sm:mt-[20px] items-end ">
      <a className="font-unica text-lg text-[var(--c6)]">Peças</a>
      <div className=" h-[1px] w-[20%] bg-[var(--m5)]"></div>

      <a className="font-unica text-lg text-[var(--c6)]">Tabuleiro</a>
      <div className=" h-[1px] w-[20%] bg-[var(--m5)]"></div>
      <a className="font-unica text-lg text-[var(--c6)]">Regras</a>
    </nav>
  );
}