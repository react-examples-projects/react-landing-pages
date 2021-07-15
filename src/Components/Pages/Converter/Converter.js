import Banner from "./Banner";
import "./converter.css";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";

export default function Converter() {
  return (
    <main class="principal">
      <Header />
      <Banner />
      <MainContent />
      <Footer />
    </main>
  );
}
