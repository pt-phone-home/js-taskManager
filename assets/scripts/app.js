const newTaksBtn = document.querySelector("header button");
const taskModal = document.getElementById("addModal");
const backdrop = document.getElementById("backdrop");
const cancelMovieAdd = document.getElementById("cancelMovieAdd");

// FUNCTIONS
const openTaskModal = () => {
  taskModal.classList.toggle("visible");
  toggleBackdrop();
};

const closeTaskModal = () => {
  taskModal.classList.toggle("visible");
  toggleBackdrop();
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

// EVENT LISTENERS
newTaksBtn.addEventListener("click", openTaskModal);
backdrop.addEventListener("click", closeTaskModal);
cancelMovieAdd.addEventListener("click", closeTaskModal);
