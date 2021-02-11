// --------  TASKS --------

function setTasks(tasks) {
  localStorage.setItem("task", JSON.stringify(tasks));
}

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
  setTasks(tasks);
}

export function getTaskBySection(sectionId) {
  const taks = getAllsTask();
  const taskFilter = taks.filter((task) => task.sectionId === sectionId);
  return taskFilter;
}

export function toggleCompleteTask({ isCompleted, id }) {
  const tasks = getAllsTask();
  const index = tasks.findIndex((task) => task.id === id);
  tasks[index].isCompleted = isCompleted;
  setTasks(tasks);
}

export function deleteTask(id) {
  const tasks = getAllsTask();
  const index = tasks.findIndex((task) => task.id === id);
  tasks.splice(index, 1);
  setTasks(tasks);
}

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
