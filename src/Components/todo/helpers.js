// --------  TASKS --------

export function getAllsTask() {
  return JSON.parse(localStorage.getItem("task")) || [];
}

export function getLastTaskId() {
  const task = getAllsTask();
  const len = task.length;
  const lastId = task[len - 1]?.id;
  return lastId ? lastId + 1 : 1;
}

export default function addTask(task) {
  const tasks = getAllsTask();
  task.id = getLastTaskId();
  tasks.push(task);
  localStorage.setItem("task", JSON.stringify(tasks));
}

export function getTaskBySection(sectionId) {
  const taks = getAllsTask();
  const taskFilter = taks.filter((task) => task.sectionId === sectionId);
  return taskFilter;
}

export function toggleCompleteTask(isCompleted) {}

// -------- SECTION TASKS --------
export function getAllSeactionTask() {
  return JSON.parse(localStorage.getItem("sectionTasks")) || [];
}

export function setSectionTask(sectionTasks) {
  localStorage.setItem("sectionTasks", JSON.stringify(sectionTasks));
}

export function getFirstSectionId() {
  return getAllSeactionTask()[0]?.id || null;
}

function getLastSectionId() {
  const sectionTasks = getAllSeactionTask();
  const len = sectionTasks.length;
  const lastId = sectionTasks[len - 1]?.id;
  return lastId ? lastId + 1 : 1;
}

export function addSectionTask(sectionTask) {
  const sectionTasks = getAllSeactionTask();
  sectionTask.id = getLastSectionId();
  sectionTasks.push(sectionTask);
  setSectionTask(sectionTasks);
}
