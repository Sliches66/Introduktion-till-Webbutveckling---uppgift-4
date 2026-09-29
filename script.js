const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const felMeddelande = document.querySelector("#felMeddelande");
const taskList = document.querySelector("#taskList");
const completedCount = document.querySelector("#completedCount");

const tasks = []; // tom array för att lagra uppgifter!

// Event listener för knappen + skapar en ny lista med texten som användaren skriver in i inputfältet.
addButton.addEventListener("click", function () {
  if (taskInput.value.trim() === "") {
    felMeddelande.textContent = "Du måste skriva någoting i fältet!";
  } else {
    felMeddelande.textContent = "";

    //skaper ett objekt
    const taskObject = {
      text: taskInput.value.trim(),
      completed: false,
    };

    // lägger till objektet i arrayen
    tasks.push(taskObject);

    // skapar uppgiften i listan
    const newTask = document.createElement("li");
    newTask.textContent = taskInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";

    newTask.appendChild(deleteButton);

    deleteButton.addEventListener("click", function (event) {
      event.stopPropagation();

      const taskIndex = tasks.indexOf(taskObject);

      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
      }

      newTask.remove();
      updateCompletedCount();
    });

    newTask.addEventListener("click", function () {
      taskObject.completed = !taskObject.completed;
      newTask.classList.toggle("completed");

      updateCompletedCount();
    });
    taskList.appendChild(newTask);

    taskInput.value = "";
  }
});

function updateCompletedCount() {
  let count = 0;

  for (const task of tasks) {
    if (task.completed === true) {
      count++;
    }
  }

  completedCount.textContent = count;
}
