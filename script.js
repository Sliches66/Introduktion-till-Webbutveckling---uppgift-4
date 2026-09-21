const taskInput = document.querySelector("#taskInput");
const addButton = document.querySelector("#addButton");
const felMeddelande = document.querySelector("#felMeddelande")

// Event listener + if sats för felmeddelande!

addButton.addEventListener("click", function () {
     if (taskInput.value.trim() === "") {
        felMeddelande.textContent = "Du måste skriva någoting i fältet!";
    } else {
        felMeddelande.textContent = "";

        console.log("Det finns text i fältet!");
    }

});
     
        


// DU är här lycka till 
