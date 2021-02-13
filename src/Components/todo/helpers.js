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
  increaseTaskCountBySection(task.sectionId);
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

export function deleteTask(id, sectionId) {
  const tasks = getAllsTask();
  const index = tasks.findIndex((task) => task.id === id);
  tasks.splice(index, 1);
  setTasks(tasks);
  reduceTaskCountBySection(sectionId);
}

// -------- SECTION TASKS --------

export function getAllSectionTasks() {
  return JSON.parse(localStorage.getItem("sectionTasks")) || [];
}

export function getCountSectionTasks() {
  return getAllSectionTasks().length;
}

export function getSectionById(sectionId, op) {
  const sectionTasks = getAllSectionTasks();
  const sectionTask = sectionTasks.find((section) => section.id === sectionId);
  op ? sectionTask.tasks++ : sectionTask.tasks--;
  setSectionTask(sectionTasks);
}

export function increaseTaskCountBySection(sectionId) {
  getSectionById(sectionId, true);
}

export function reduceTaskCountBySection(sectionId) {
  getSectionById(sectionId, false);
}

export function getTaskCountBySection(sectionId) {
  const tasks = getAllsTask();
  const count = tasks.filter((task) => task.sectionId === sectionId);
  return count.length;
}

export function setSectionTask(sectionTasks) {
  localStorage.setItem("sectionTasks", JSON.stringify(sectionTasks));
}

export function getFirstSectionId() {
  return getAllSectionTasks()[0]?.id || null;
}

function getLastSectionId() {
  const sectionTasks = getAllSectionTasks();
  const len = sectionTasks.length;
  const lastId = sectionTasks[len - 1]?.id;
  return lastId ? lastId + 1 : 1;
}

export function addSectionTask(sectionTask) {
  const sectionTasks = getAllSectionTasks();
  sectionTask.id = getLastSectionId();
  sectionTasks.push(sectionTask);
  setSectionTask(sectionTasks);
}
