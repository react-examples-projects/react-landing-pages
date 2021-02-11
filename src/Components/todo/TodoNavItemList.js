import { getAllSeactionTask } from "./helpers";
import TodoNavItem from "./TodoNavItem";

function TodoNavItemList() {
  return getAllSeactionTask().map((todoNavItem) => {
    return <TodoNavItem {...todoNavItem} key={todoNavItem.id} />;
  });
}

export default (TodoNavItemList);
