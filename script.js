const addTaskButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add task event
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText) {
        addTask(taskText);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
});

// Function to add a task
function addTask(taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;

    // Toggle completed state on click
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    // Remove task on double click
    li.addEventListener('dblclick', () => {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
}

/*
Explanation of JavaScript:
Element Selection:

Uses getElementById to select the add task button, task input field, and task list for manipulation.
Event Listener for Adding Tasks:

Adds a click event listener to the add task button. When clicked, it checks if the input is not empty. If valid, it calls the addTask() function and clears the input field; otherwise, it alerts the user to enter a task.
Function to Add Tasks:

The addTask(taskText) function creates a new list item (li), sets its text content, and adds functionality to toggle the completed state when clicked and remove the task when double-clicked.
Finally, it appends the new task to the task list.
Summary
Overall, this Vibrant To-Do List application is structured to provide a user-friendly interface with the following features:

Dynamic Background: A vibrant, changing gradient background.
Interactive Elements: Input field for adding tasks, buttons for submitting tasks, and task items that can be marked complete or removed.
Styling and Animation: Attractive visual design and smooth transitions for a modern look and feel.
*/
