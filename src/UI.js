import { Project } from "./project";
import { ToDos } from "./todos";

const app = (function () {
let storage = [
    {name: 'Default', 
     todos: [], 
}, 
]; 

function returnStorage() {
    return storage; 
}

function updateLocalStorage() {
    localStorage.setItem('Storage', JSON.stringify(storage)); 
    console.log(storage);
    console.log(localStorage);
    
}
function restoreLocalStorage() {
    if(localStorage.getItem('Storage')) {
       let object = JSON.parse(localStorage.getItem('Storage')); 
       storage = object; 
       
    }
}

function addProjectToLibrary(name) {
    let newProject = new Project(name); 
    storage.push(newProject); 
    
}

function addTodoToProject(projectName, title, date, important, done) {
  const newTodo = new ToDos(title, date, important, done); 
  const project = storage.find((p) => p.name === projectName);
  project.todos.push(newTodo); 

  
}

function deleteTodoFromProject(projectName, todoName) {
    const project = storage.find((p) => p.name === projectName); 
    const todo = project.todos.find((t) => t.title === todoName); 
    project.todos.splice(todo, 1); 
}

function switchImportant(projectName, todoName) {
    const project = storage.find((p) => p.name === projectName); 
    const todo = project.todos.find((t) => t.title === todoName); 
    if(todo.important === true) {
        todo.important = false; 
    } else if (todo.important === false) {
        todo.important = true; 
    }
}
function switchDone(projectName, todoName) {
    const project = storage.find((p) => p.name === projectName); 
    const todo = project.todos.find((t) => t.title === todoName); 
    if (todo.done === true) {
        todo.done = false; 
    } else if (todo.done === false) {
        todo.done = true; 
    }
}


function deleteProjectFromLibrary(deleteProj) {
    const proj = storage.find(project => project.name === deleteProj); 
    storage.splice(storage.indexOf(proj), 1); 
}

function editTodo(projectIndex, todoIndex, title, date, important, done) {
    const project = storage.find((p) => storage.indexOf(p) === projectIndex); 
    const todo = project.todos.find((t) => project.todos.indexOf(t) === todoIndex ); 
    todo.title = title; 
    todo.date = date; 
    todo.important = important; 
    todo.done = done; 
}
function projectTodos(projName) {
    const proj = storage.find(project => project.name === projName); 
    
    return proj.todos; 
}


function getAllTodos() {
    const todoArray = []; 
    storage.forEach((project) => {
        project.todos.forEach((todo) => {
            todoArray.push(todo); 
        }); 
    }); 

    return todoArray; 
}
return {
    updateLocalStorage, 
    restoreLocalStorage, 
    addProjectToLibrary, 
    addTodoToProject, 
    deleteTodoFromProject,
    deleteProjectFromLibrary,
    editTodo, 
    getAllTodos,  
    returnStorage, 
    projectTodos,
    switchImportant, 
    switchDone, 
    projectTodos, 




}
}()); 

export { app };  