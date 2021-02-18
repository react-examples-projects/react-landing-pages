import { useState } from "react";
import LinkMagic from "./LinkMagic";
import ModalCreateTask from "./ModalCreateTask";
import { deleteSectionTask } from "./helpers";
import { useCurrentSectionId } from "./context/CurrentSectionIdProvider";
import { useSectionInformation } from "./context/SectionInformationProvider";

export default function TodoOptions({ getAllTasks }) {
  const [showModalCreateTask, setShowModalCreateTask] = useState(false);
  const { sectionId } = useCurrentSectionId();
  const { setSectionTasks } = useSectionInformation();

  const toggleModalCreateTask = () => {
    setShowModalCreateTask(!showModalCreateTask);
  };

  const deleteSection = () => {
    const sectionTasks = deleteSectionTask(sectionId);
    setSectionTasks(sectionTasks);
  };

  return (
    <>
      <LinkMagic
        text="Add task"
        icon="thumbtack"
        onClick={toggleModalCreateTask}
      />
      <LinkMagic
        text="Remove Section"
        icon="eraser"
        className="ml-3"
        onClick={deleteSection}
      />

      <ModalCreateTask
        {...{
          showModalCreateTask,
          toggleModalCreateTask,
          getAllTasks,
        }}
      />
    </>
  );
}
