import { memo } from "react";
import { Link } from "react-router-dom";
import css from "../../css/todo.module.css";

function LinkMagic({ text, to = "#", icon, className, ...args }) {
  const _className = className ? ` ${className}` : "";
  return (
    <Link to={to} className={`${css.linkMagic}${_className}`} {...args}>
      <span>{text}</span>
      <i className={`fa fa fa-${icon} ml-2`} />
    </Link>
  );
}

export default memo(LinkMagic);
