import PosItem from "./components/PostItem";

export default function Posts() {
  return (
    <section className="post">
      <h2 className="section-title">Noticias</h2>

      <div className="posts">
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
