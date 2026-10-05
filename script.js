const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const felMeddelande = document.querySelector("#felMeddelande");
const taskList = document.querySelector("#taskList");
const completedCount = document.querySelector("#completedCount");

const tasks = []; // tom array för att lagra uppgifter!

// Event listener för knappen + skapar en ny lista med texten som användaren skriver in i inputfältet.
addButton.addEventListener("click", function () {
  if (taskInput.value.trim() === "") {
    console.log("tomt fält");
    felMeddelande.textContent = "Du måste skriva någoting i fältet!";
    felMeddelande.classList.remove("error"); // Tar bort klassen om den redan finns

    setTimeout(function () {
      felMeddelande.classList.add("error"); // Lägger till klassen för att trigga animationen
    }, 10); // Lägger till en liten fördröjning innan klassen läggs till
  } else {
    felMeddelande.textContent = "";

    //Skaper ett objekt
    const taskObject = {
      text: taskInput.value.trim(),
      completed: false,
    };

    // Lägger till objektet i arrayen
    tasks.push(taskObject);

    // Skapar uppgiften i listan
    const newTask = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = taskInput.value;

    newTask.appendChild(taskText);
    //Lägger till papperskorgen, samt gör så att den raderar saker på listan
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑️";

    newTask.appendChild(deleteButton);

    deleteButton.addEventListener("click", function (event) {
      // Hindrar klicket från att färdigmarkera uppgiften också
      event.stopPropagation();
      // Hittar uppgiftens position i arrayen
      const taskIndex = tasks.indexOf(taskObject);
      //Raderar objektet i arrayen om det finns
      if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
      }
      // Tar bort från HTML listan och uppdaterar färdiga uppgifter
      newTask.remove();
      updateCompletedCount();
    });
    // Växlings fuktion
    newTask.addEventListener("click", function () {
      taskObject.completed = !taskObject.completed;
      //True, false
      newTask.classList.toggle("completed");

      updateCompletedCount();
    });
    //Visar den nya uppgiften i HTML listan
    taskList.appendChild(newTask);

    //Tömmer inputfältet efter att uppgiften lagts till
    taskInput.value = "";
  }
});
//Räknar samt visar de färdiga uppgifterna
function updateCompletedCount() {
  let count = 0;
  // Går igeon alla uppgifter i arrayen
  for (const task of tasks) {
    // + På om uppgiften är färdig
    if (task.completed === true) {
      count++;
    }
  }
  //Resultat på sidan!
  completedCount.textContent = count;
}
