const dateElement = document.getElementById("date");

let list = document.getElementById("list");
let input = document.getElementById("input");
let taskForm = document.getElementById("taskForm");
let taskInput = document.getElementById("taskname");

//add event listeners
taskForm.addEventListener("submit", addTask);

//adding date
let options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric'};
let today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);
//adding a task
function addTask(event){
    event.preventDefault();
    let taskName = taskInput.value;
    //console.log(taskName);
    // const text = `<li class = "item">
    //             <i class = "co fa fa-circle-thin" job="complete"> <\i>
    //             <p class= "text" > "Drink Water" </p>
    //            </li>`

    const position = "beforeend";
    if(taskName != "'"){
        list.insertAdjacentHTML(position, '<li class="item" <p class="text" >' + taskName +  '</p> </li>');
    }
    closeModal();
}


// JS to handle modal

let modal = document.getElementById("addTaskModal");

let btn = document.getElementById("addbtn");

let saveBtn = document.getElementById("save-btn");

let span = document.getElementsByClassName("close")[0];

btn.addEventListener("click", displayModal);
span.addEventListener("click", closeModal);


function displayModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}
