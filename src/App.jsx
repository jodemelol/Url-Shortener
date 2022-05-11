import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Shorten } from "./components/Shorten";
import { SectionBoost } from "./components/SectionBoost";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Shorten />
      <SectionBoost />
      <Footer />
    </>
  );
}
