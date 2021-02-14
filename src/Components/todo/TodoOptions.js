import { useState } from "react";
import LinkMagic from "./LinkMagic";
import ModalCreateTask from "./ModalCreateTask";

export default function TodoOptions({  setSectionTasks }) {
  const [showModalCreateTask, setShowModalCreateTask] = useState(false);

  const toggleModalCreateTask = () => {
    setShowModalCreateTask(!showModalCreateTask);
  };
  return (
    <>
      <LinkMagic
        text="Add task"
        icon="thumbtack"
        onClick={toggleModalCreateTask}
      />
      <LinkMagic text="Remove Section" icon="eraser" className="ml-3" />

      <ModalCreateTask
        {...{
          showModalCreateTask,
          toggleModalCreateTask,
          setSectionTasks,
        }}
      />
    </>
  );
}
