import AsideNav from "./AsideNav";
import Footer from "./Footer";
import Header from "./Header";
import MainContent from "./MainContent";
import "./blog2.css";

export default function BlogLayout2() {
  return (
    <div className="principal">
      <div className="contenido">
        <Header />
        <MainContent />
        <Footer />
      </div>

      <AsideNav />
    </div>
  );
}
