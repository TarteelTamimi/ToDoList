const prompt = require("prompt-sync")();

class Task {
    id;
    description;
    dueDate;
    priorityLevel;
    isComplete = false;

    completed() {
        this.isComplete = true;
    }
}

console.log("*************************");
console.log("Welcome to JS TODO-APP");
console.log("*************************");

let tasks = [];

let addTask = function() {

    let task = new Task();

    console.log("To add new task, please enter below information ");
    let id = prompt("task id: ");
    let des = prompt("task description: ");
    let date = prompt("due date(yyyy-mm-dd): ");
    let priority = parseInt(prompt("priority level: "));

    task.id = id;
    task.description = des;
    task.dueDate = new Date(date);
    task.priorityLevel = priority;

    tasks.push(task);
}

let listAllTasks = function() {
    console.log("All your tasks: ");
    console.log(tasks);
    // for (let i=0; i<tasks.length; i++) {
    //     console.log(`id: ${tasks[i].id}\ndescription: ${tasks[i].description}\ndue date: ${tasks[i].dueDate}\npriority level: ${tasks[i].priorityLevel}\ncompleted? ${tasks[i].isComplete}`);
    // }
    
}

let listCompletedTasks = function() {
    let completedTasks = tasks.filter(function(task) {
        return task.isComplete==true;
    });
    console.log(completedTasks);
}

let markAsDone = function() {
    let completedTaskId = prompt("The task id you want to mark as done: ");
    for (let i=0; i<tasks.length; i++) {
        if (tasks[i].id==completedTaskId) {
            tasks[i].isComplete = true;
        }
    }
}

let deleteTask = function() {
    let deleteTaskId = prompt("The task id you want to delete: ");
    let m;
    for (let i=0; i<tasks.length; i++) {
        if (tasks[i].id == deleteTaskId) {
            m=i;
        }
    }
    tasks.splice(m , 1);
}

let sortByDate = function() {
    tasks.sort((a, b) => a.dueDate - b.dueDate);

}

let sortByPriority = function() {
    tasks.sort((a,b) => a.priorityLevel-b.priorityLevel);
}

let clearAllTasks = function() {
    tasks = [];
}

while(true) {
    
    console.log("\n\nSelect an action:\n1) Add a new task\n2) List all tasks\n3) List completed tasks\n4) Mark the task as done\n5) Delete a task\n6) Sort tasks by the due date\n7) Sort tasks by priority\n8) Clear all tasks\n9) Exit app\n***************************\n")

    let choice = parseInt(prompt("What's your choice? "));

    switch (choice) {
        case 1:
            addTask();
            break;

        case 2:
            listAllTasks();
            break;

        case 3:
            listCompletedTasks();
            break;

        case 4:
            markAsDone();
            break;
            
        case 5:
            deleteTask();
            break;

        case 6:
            sortByDate();
            break;

        case 7:
            sortByPriority();
            break;

        case 8:
            clearAllTasks();
            break;

        case 9:
            return;

        default:
            console.log("Your choice must be from 1 to 8, please.");
            
    }
}