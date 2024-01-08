document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const todoList = document.getElementById('todo-list');
    const deleteAllBtn = document.getElementById('deleteAllBtn');

    addTaskBtn.addEventListener('click', addTask);
    deleteAllBtn.addEventListener('click', deleteAllTasks);

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'list-group-item';
            taskItem.innerText = taskText;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-outline-danger btn-sm float-right';
            deleteBtn.innerText = 'Delete';
            deleteBtn.addEventListener('click', function () {
                todoList.removeChild(taskItem);
            });

            taskItem.appendChild(deleteBtn);
            todoList.appendChild(taskItem);

            taskInput.value = '';
        }
    }

    function deleteAllTasks() {
        while (todoList.firstChild) {
            todoList.removeChild(todoList.firstChild);
        }
    }
});