import { box } from "../css/about.module.css";

export default function Box({
  icon,
  title,
  number,
  variant = "orange",
  top = "0",
  left = "0",
  ...args
}) {
  return (
    <div
      className={`${box} ${variant}`}
      style={{
        top,
        left,
      }}
      {...args}
    >
      <i className={`fa fa-${icon}`} style={{ fontSize: "25px" }} />
      <p>{title}</p>
      <h4 className="mb-0">{number}</h4>
    </div>
  );
}
