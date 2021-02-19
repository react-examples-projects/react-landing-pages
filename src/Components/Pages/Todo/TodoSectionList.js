import { useState } from "react";
import TodoSection from "./TodoSection";
import ModalCreateSection from "./ModalCreateSection";
import css from "../../css/todo.module.css";
import Nav from "react-bootstrap/Nav";
import { addSectionTask } from "./helpers";
import { useSectionInformation } from "./context/SectionInformationProvider";
import { useCurrentSectionId } from "./context/CurrentSectionIdProvider";

function TodoSectionList({ setCountSectionTasks }) {
  const [showModalSectionTask, setShowModalSectionTask] = useState(false);
  const { sectionTasks, setSectionTasks } = useSectionInformation();
  const { updateSectionId } = useCurrentSectionId();
  const sectionTasksLength = sectionTasks?.length > 0;

  const toggleModalSectionTask = () => {
    setShowModalSectionTask(!showModalSectionTask);
  };

  const addSectionTaskState = (newSectionTask) => {
    setSectionTasks(sectionTasks.concat(newSectionTask));
    addSectionTask(newSectionTask);
    updateSectionId();
    setCountSectionTasks((c) => c + 1);
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

        {sectionTasksLength ? (
          <Nav className="flex-column">
            {sectionTasks.map((todoNavItem) => (
              <TodoSection {...todoNavItem} key={todoNavItem.id} />
            ))}
          </Nav>
        ) : (
          <h6 className="px-2 text-center text-white">
            Crea tu primera sección para agregar tareas
          </h6>
        )}
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

export default TodoSectionList;
