import "./blog.css";
import SideNav from "./SideNav";
import Header from "./Header";
import Presentation from "./Presentation";
import Services from "./Services";
import Posts from "./Posts";

export default function BlogLayout() {
  return (
    <div className="container-flex">
      <SideNav />
      <main className="container">
        <Header />

        <div className="content">
          <Presentation />
          <Services />
          <Posts />
        </div>
      </main>
    </div>
  );
}
