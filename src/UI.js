import { Project } from "./project";
import { ToDos } from "./todos";

const app = (function () {
let storage = [
    {name: 'Default', 
     todos: [], 
}
]; 

function returnStorage() {
    return storage; 
}

function updateLocalStorage() {
    localStorage.setItem('Storage', JSON.stringify(storage)); 
    console.log(localStorage); 
    console.log(storage); 
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

function addTodoToProject(projectIndex, title, description, date, important, done) {
  const newTodo = new ToDos(title, description, date, important, done); 
  const project = storage.find((p) => storage.indexOf(p) === projectIndex);
  project.todos.push(newTodo); 
  

}

function deleteTodoFromProject(projectIndex, todoIndex) {
    const project = storage.find((p) => storage.indexOf(p) === projectIndex); 
    const todo = project.todos.find((t) => project.todos.indexOf(t) === todoIndex); 
    project.todos.splice(todo, 1); 
}

function deleteProjectFromLibrary(deleteProj) {
    const proj = storage.find(project => project.name === deleteProj); 
    storage.splice(storage.indexOf(proj), 1); 
}

function editTodo(projectIndex, todoIndex, title, description, date, important, done) {
    const project = storage.find((p) => storage.indexOf(p) === projectIndex); 
    const todo = project.todos.find((t) => project.todos.indexOf(t) === todoIndex ); 
    todo.title = title; 
    todo.description = description;
    todo.date = date; 
    todo.important = important; 
    todo.done = done; 
}

function getAllTodos() {
    const todoArray = []; 
    storage.forEach((project) => {
        project.todos.forEach((todo) => {
            todoArray.push(todo); 
        })
    })

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
    returnStorage




}
}()); 

export { app };  