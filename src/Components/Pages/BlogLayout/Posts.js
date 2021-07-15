import PosItem from "./components/PostItem";

export default function Posts() {
  return (
    <section class="post">
      <h2 class="section-title">Noticias</h2>

      <div class="posts">
        <PosItem />
        <PosItem />
        <PosItem />
        <PosItem />
        <PosItem />
        <PosItem />
      </div>
    </section>
  );
}
