const newTaksBtn = document.querySelector("header button");
const taskModal = document.getElementById("addModal");
const backdrop = document.getElementById("backdrop");
const cancelMovieAdd = document.getElementById("cancelMovieAdd");
const confirmMovieAdd = document.getElementById("confirmMovieAdd");
const taskTitle = document.querySelector(".modal__content #title");
const taskDescription = document.querySelector(".modal__content #description");
const taskPriority = document.querySelector(".modal__content #priority");
const tasks = [];

// FUNCTIONS
const openTaskModal = () => {
  taskModal.classList.toggle("visible");
  toggleBackdrop();
};

const closeTaskModal = () => {
  taskModal.classList.toggle("visible");
  toggleBackdrop();
  clearInputs();
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const clearInputs = () => {
  taskTitle.value = "";
  taskDescription.value = "";
  taskPriority.value = "";
};

const addMovie = () => {
  const tTitle = taskTitle.value;
  const tDescription = taskDescription.value;
  const tPriority = taskPriority.value;

  if (
    tTitle.trim() === "" ||
    tDescription.trim() === "" ||
    tPriority.trim() === "" ||
    tPriority < 1 ||
    tPriority > 3
  ) {
    alert("Please enter valid data");
  }

  const newTask = {
    id: Math.random().toString(),
    title: tTitle,
    description: tDescription,
    priority: tPriority,
  };

  tasks.push(newTask);
  clearInputs();
  closeTaskModal();
  console.log(tasks);
};

// EVENT LISTENERS
newTaksBtn.addEventListener("click", openTaskModal);
backdrop.addEventListener("click", closeTaskModal);
cancelMovieAdd.addEventListener("click", closeTaskModal);
confirmMovieAdd.addEventListener("click", addMovie);
