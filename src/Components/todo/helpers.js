// --------  TASKS --------
export function getAllsTask() {
  return JSON.parse(localStorage.getItem("task")) || [];
}

export default function addTask(task) {
  const tasks = getAllsTask();

  tasks.push(task);
  localStorage.setItem("task", JSON.stringify(tasks));
}

// -------- SECTION TASKS --------
export function getAllSeactionTask() {
  return JSON.parse(localStorage.getItem("sectionTasks")) || [];
}

export function setSectionTask(sectionTasks) {
  localStorage.setItem("sectionTasks", JSON.stringify(sectionTasks));
}

function getLastId() {
  const sectionTasks = getAllSeactionTask();
  const len = sectionTasks.length;
  const lastId = sectionTasks[len - 1]?.id;
  return lastId ? lastId + 1 : 1;
}

export function addSectionTask(sectionTask) {
  const sectionTasks = getAllSeactionTask();
  sectionTask.id = getLastId();
  sectionTasks.push(sectionTask);
  setSectionTask(sectionTasks);
}
