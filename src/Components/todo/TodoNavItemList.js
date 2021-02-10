import { memo } from "react";
import { getAllSeactionTask } from "./helpers";
import TodoNavItem from "./TodoNavItem";

function TodoNavItemList({ forceUpdate }) {
  return getAllSeactionTask().map((todoNavItem) => {
    return <TodoNavItem {...todoNavItem} key={todoNavItem.id} />;
  });
}

export default memo(TodoNavItemList);
