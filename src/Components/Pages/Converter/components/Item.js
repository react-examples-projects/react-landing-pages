export default function Item({ title, content, icon }) {
  return (
    <article className="item">
      <h2>
        <i class={`fa fa-${icon} mr-2`}></i>
        {title}
      </h2>
      <p>{content}</p>
    </article>
  );
}
