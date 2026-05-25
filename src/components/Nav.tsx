export default function Nav() {
  return (
    <nav className="flex justify-between mx-[140px] max-lg:mx-[80px] max-md:mx-[40px] max-sm:mx-[20px] mt-[40px] max-sm:mt-[20px] items-end ">
      <a href="#pecas" className="font-unica text-lg text-[var(--c6)] cursor-pointer hover:text-[var(--l2)] transition-colors">Peças</a>
      <div className=" h-[1px] w-[20%] bg-[var(--m5)]"></div>

      <a href="#tabuleiro" className="font-unica text-lg text-[var(--c6)] cursor-pointer hover:text-[var(--l2)] transition-colors">Tabuleiro</a>
      <div className=" h-[1px] w-[20%] bg-[var(--m5)]"></div>
      <a href="#regras" className="font-unica text-lg text-[var(--c6)] cursor-pointer hover:text-[var(--l2)] transition-colors">Regras</a>
    </nav>
  );
}