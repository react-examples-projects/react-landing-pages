import pic02 from "../../../img/pic02.jpg";
export default function PostItem() {
  return (
    <div className="post-published">
      <figure>
        <img src={pic02} alt="Post item placeholder" />
        <figcaption>Interdum aenean</figcaption>
      </figure>
      <p>
        Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore.
        Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat
        tempus aliquam.
      </p>
      <button className="button">Leer más</button>
    </div>
  );
}
