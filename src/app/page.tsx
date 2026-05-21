import Hero from "@/sections/Hero";
import Nav from "@/components/Nav";
import Parts from "@/sections/Parts";
import Board from "@/sections/Board";
import Rules from "@/sections/Rules";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <Parts />
      <Board />
      <Rules />
      <Footer />
    </div>
  );
}
