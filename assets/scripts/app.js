const newTaksBtn = document.querySelector("header button");
const taskModal = document.getElementById("addModal");
const backdrop = document.getElementById("backdrop");
const cancelMovieAdd = document.getElementById("cancelMovieAdd");
const confirmMovieAdd = document.getElementById("confirmMovieAdd");
const taskTitle = document.querySelector(".modal__content #title");
const taskDescription = document.querySelector(".modal__content #description");
const taskPriority = document.querySelector(".modal__content #priority");
const tasks = [];
const main = document.querySelector("main");

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

const updateUI = () => {
  if (tasks.length === 0) {
    main.style.display = "block";
  } else {
    main.style.display = "none";
  }
};

const addTask = () => {
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
    return;
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
  renderTaskToUi(
    newTask.id,
    newTask.title,
    newTask.description,
    newTask.priority,
  );
  console.log(tasks);
};

const renderTaskToUi = (id, title, description, priority) => {
  const newTaskElement = document.createElement("div");
  newTaskElement.className = "newTask";
  newTaskElement.innerHTML = `
    <div class="newTask-top">
        <h1>${title}</h1>
    </div>
    <div class="newTask-main">
        <p>${description} </p>
    </div>
    <div>
        <p>${priority} </p>
    </div>
  `;
  console.log(newTaskElement);
  const taskRoot = document.getElementById("task-list");
  taskRoot.append(newTaskElement);
  updateUI();
};

// EVENT LISTENERS
newTaksBtn.addEventListener("click", openTaskModal);
backdrop.addEventListener("click", closeTaskModal);
cancelMovieAdd.addEventListener("click", closeTaskModal);
confirmMovieAdd.addEventListener("click", addTask);
