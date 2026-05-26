import Hero from "@/sections/Hero";
import Nav from "@/components/Nav";
import Parts from "@/sections/Parts";
import Board from "@/sections/Board";
import Rules from "@/sections/Rules";
import Footer from "@/sections/Footer";
import AOSInit from "@/components/AOSInit";

export default function Home() {
  return (
    <div>
      <AOSInit />
      <Nav />
      <Hero />
      <section id="pecas">
        <Parts />
      </section>
      <section id="tabuleiro">
        <Board />
      </section>
      <section id="regras">
        <Rules />
      </section>
      <Footer />
    </div>
  );
}
