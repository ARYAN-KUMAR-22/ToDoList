// Get references to the HTML elements
const inputbox = document.getElementById("inputbox");
const listcontainer = document.getElementById("list-container");

// Function to add a task
function addTask() {
    if (inputbox.value == "") {
        alert("You must write something!");
    } else {
        // Create a new <li> element
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;

        // Append the <li> to the list container
        listcontainer.appendChild(li);

        // Create a <span> element for the delete button
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";

        // Append the delete button to the <li>
        li.appendChild(span);
    }
    // Clear the input box
    inputbox.value = "";

    // Save the data to localStorage
    saveData();
}

// Event listener for clicking on the list container
listcontainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        // Toggle the "checked" class for the clicked <li>
        e.target.classList.toggle("checked");

        // Save the data to localStorage
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // Remove the parent <li> when the delete button is clicked
        e.target.parentElement.remove();

        // Save the data to localStorage
        saveData();
    }
}, false);

// Function to save the data to localStorage
function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

// Function to show tasks from localStorage
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask(); // Call show task to populate list container from local storage when the page loads
// // Initialize by saving data to localStorage
// saveData();

