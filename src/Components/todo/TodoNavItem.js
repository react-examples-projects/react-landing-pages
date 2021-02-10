import { memo } from "react";
import Nav from "react-bootstrap/Nav";
import css from "../css/todo.module.css";

function TodoNavItem({ name, icon, tasks }) {
  return (
    <Nav.Item as={Nav.Link} className="text-white">
      <i className={`fa fa-${icon} mr-1`} />
      <span>{name}</span>
      <span className={css.todoNavItemCount}>{tasks}</span>
    </Nav.Item>
  );
}
export default memo(TodoNavItem);
