let tasks = [];

function addTask() {
    const taskInput = document.getElementById("task");
    const datetimeInput = document.getElementById("datetime");
    const task = taskInput.value;
    const datetime = datetimeInput.value;

    if (task.trim() !== "") {
        tasks.push({ task, datetime, completed: false });
        renderTasks();
        taskInput.value = "";
        datetimeInput.value = "";
    }
    else{
        alert("You must write something");
    }
    if(task.length>=20)
    {
        alert("Task should be short")
        console.log(task.length)
        taskInput.value = "";
        datetimeInput.value = "";
        deleteTask()
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function toggleCompleted(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function renderTasks() {
    const taskList = document.getElementById("taskList");
    const completedCount = document.getElementById("completedCount");
    let completedTasks = 0;

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        console.log(task)
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.onclick = () => toggleCompleted(index);

        const label = document.createElement("label");
        label.innerText = `${task.task} - ${task.datetime}`;
        label.className = task.completed ? "completed" : "";

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Del";

        deleteBtn.onclick = () => deleteTask(index);

        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);

        if (task.completed) {
            completedTasks++;
        }
    });

    completedCount.innerText = completedTasks;
}