import Nav from "react-bootstrap/Nav";
import css from "../css/todo.module.css";

export default function TodoNavItem({ title, icon, count }) {
  return (
    <Nav.Item as={Nav.Link} className="text-white">
      <i className={`fa fa-${icon} mr-1`} />
      <span>{title}</span>
      <span className={css.todoNavItemCount}>{count}</span>
    </Nav.Item>
  );
}
