document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', modifyTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <div>
                    <button class="editBtn">Edit</button>
                    <button class="deleteBtn">Delete</button>
                </div>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function modifyTask(e) {
        if (e.target.classList.contains('editBtn')) {
            const li = e.target.parentElement.parentElement;
            const span = li.querySelector('span');
            const newText = prompt('Edit your task', span.textContent);
            if (newText !== null && newText.trim() !== '') {
                span.textContent = newText.trim();
            }
        } else if (e.target.classList.contains('deleteBtn')) {
            const li = e.target.parentElement.parentElement;
            taskList.removeChild(li);
        }
    }
});
