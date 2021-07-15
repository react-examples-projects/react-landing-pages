import { Image } from "react-bootstrap";

export default function ServiceCard({ title, icon, ...props }) {
  return (
    <div
      className="
        bg-white
        border
        shadow-lg
        p-5
        mb-5
        text-center
        w-100
        rounded
      "
      {...props}
    >
      <div className="d-inline-block bg-light p-3 rounded-circle">
        <Image src={icon} width="54" height="54" fluid />
      </div>

      <h4 className="mt-4">{title}</h4>
      <p className="text-muted">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
        voluptatibus numquam nisi!
      </p>
    </div>
  );
}
