import "./blog.css";
import SideNav from "./SideNav";
import Header from "./Header";
import Presentation from "./Presentation";
import Services from "./Services";
import Posts from "./Posts";

export default function BlogLayout() {
  return (
    <div class="container-flex">
      <SideNav />
      <main class="container">
        <Header />

        <div class="content">
          <Presentation />
          <Services />
          <Posts />
        </div>
      </main>
    </div>
  );
}
