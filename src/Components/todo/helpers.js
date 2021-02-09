export function getAllsTask() {
  const memes = JSON.parse(localStorage.getItem("task"));
  return memes?.reverse() || [];
}

export default function addTask(task) {
  const tasks = getAllsTask() || [];

  tasks.push(task);
  localStorage.setItem("task", JSON.stringify(tasks));
}
