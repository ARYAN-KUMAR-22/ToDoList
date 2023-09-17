const inputbox = document.getElementById("inputbox");
const listcontainer = document.getElementById("list-container");
function addTask(){
    if(inputbox.value == ""){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

listcontainer.addEventListener('click', function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toogle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML)
}
checked
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
