import { useState } from "react";
import { getCountSectionTasks } from "../helpers";

export default function useCountSectionTasks(){
   const [countSectionTasks, _setCountSectionTasks] = useState(
      getCountSectionTasks()
    );

    const setCountSectionTasks = () => _setCountSectionTasks(getCountSectionTasks());

    return {
      countSectionTasks,
      setCountSectionTasks
    }
}