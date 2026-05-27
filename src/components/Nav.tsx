export default function Nav() {
  return (
    <nav className="flex justify-between mx-[140px] max-lg:mx-[80px] max-md:mx-[40px] max-sm:mx-[20px] mt-[40px] max-sm:mt-[20px] items-end max-md:gap-2 max-sm:gap-1">
      <a href="#pecas" className="font-unica text-lg max-md:text-base max-sm:text-sm text-[var(--c6)] cursor-pointer hover:text-[var(--l2)] transition-colors">Peças</a>
      <div className="h-[1px] w-[20%] max-md:w-[15%] bg-[var(--m5)]"></div>

      <a href="#tabuleiro" className="font-unica text-lg max-md:text-base max-sm:text-sm text-[var(--c6)] cursor-pointer hover:text-[var(--l2)] transition-colors">Tabuleiro</a>
      <div className="h-[1px] w-[20%] max-md:w-[15%] bg-[var(--m5)]"></div>
      <a href="#regras" className="font-unica text-lg max-md:text-base max-sm:text-sm text-[var(--c6)] cursor-pointer hover:text-[var(--l2)] transition-colors">Regras</a>
    </nav>
  );
}