import Hero from "@/sections/Hero";
import Nav from "@/components/Nav";
import Parts from "@/sections/Parts";
import Board from "@/sections/Board";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Parts />
      <Board />
    </div>
  );
}
