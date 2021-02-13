import { useState } from "react";
import TodoNavItem from "./TodoNavItem";
import ModalCreateSection from "./ModalCreateSection";
import css from "../css/todo.module.css";
import Nav from "react-bootstrap/Nav";
import { getAllSectionTasks, addSectionTask } from "./helpers";

function TodoNavItemList() {
  const [showModalSectionTask, setShowModalSectionTask] = useState(false);
  const [sectionTasks, setSectionTasks] = useState(getAllSectionTasks());

  const toggleModalSectionTask = () => {
    setShowModalSectionTask(!showModalSectionTask);
  };

  const addSectionTaskState = (newSectionTask) => {
    setSectionTasks(sectionTasks.concat(newSectionTask));
    addSectionTask(newSectionTask);
  };

  return (
    <>
      <div className={css.todoNav}>
        <button
          className={css.btnAddSectionTask}
          onClick={toggleModalSectionTask}
        >
          <i className="fa fa-plus-circle" />
        </button>

        <Nav className="flex-column">
          {sectionTasks.map((todoNavItem) => (
            <TodoNavItem {...todoNavItem} key={todoNavItem.id} />
          ))}
        </Nav>
      </div>

      <ModalCreateSection
        {...{
          showModalSectionTask,
          toggleModalSectionTask,
          addSectionTaskState,
        }}
      />
    </>
  );
}

export default TodoNavItemList;
