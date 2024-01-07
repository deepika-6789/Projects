const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="completeTask(this)">Complete</button>
            <button class="delete-task" onclick="deleteTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function completeTask(button) {
    const taskItem = button.parentNode;
    taskItem.classList.toggle('completed-task');
}

function deleteTask(button) {
    const taskItem = button.parentNode;
    taskList.removeChild(taskItem);
}
