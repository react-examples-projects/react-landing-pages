import { memo, useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { SectionTaskContext } from "./context/SectionsTaskProvider";
import css from "../css/todo.module.css";

function TodoNavItem({ id, name, icon, tasks }) {
  const { setSectionid } = useContext(SectionTaskContext);
  return (
    <Nav.Item
      as={Nav.Link}
      className={css.todoNavItem}
      onClick={() => setSectionid(id)}
    >
      <i className={`fa fa-${icon} mr-1`} />
      <span>{name}</span>
      <span className={css.todoNavItemCount}>{tasks}</span>
    </Nav.Item>
  );
}
export default memo(TodoNavItem);
