const inputField = document.getElementById("input-box");
const taskField = document.getElementById("tasks");

document.querySelector(".create button").addEventListener("click", createTask);

function createTask() {
    if (inputField.value === "") {
        alert("Please enter something...");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        
        let span = document.createElement("span");
        span.innerHTML = "×";

        li.appendChild(span);

        taskField.appendChild(li);

        updateData();
    }
    inputField.value = "";
}

taskField.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        updateData();
    } else if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        updateData();
    }
})

function updateData() {
    localStorage.setItem("data", taskField.innerHTML);
}

function loadData() {
    taskField.innerHTML = localStorage.getItem("data");
}

loadData();