import { Project } from "./project";
import { ToDos } from "./todos";

const app = (function () {
let storage = []; 

function setDefaultProject() {
    const defaultProj = new Project('Default'); 
    storage.push(defaultProj); 
    console.log(storage); 
}

function updateLocalStorate() {
    localStorage.setItem('Storage', JSON.stringify(storage)); 
}
function restoreLocalStorage() {
    if(localStorage.getItem('Storage')) {
       let object = JSON.parse(localStorage.getItem('Storage')); 
       storage = object; 
       console.log(storage); 
    }
}

function addProjectToLibrary(name) {
    let newProject = new Project(name); 
    storage.push(newProject); 
    console.log(storage); 
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

function deleteProjectFromLibrary(projectIndex) {
    const project = storage.find((p) => storage.indexOf(p) === projectIndex); 
    storage.splice(project, 1); 
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
    setDefaultProject, 
    updateLocalStorate, 
    restoreLocalStorage, 
    addProjectToLibrary, 
    addTodoToProject, 
    deleteTodoFromProject,
    deleteProjectFromLibrary,
    editTodo, 
    getAllTodos, 




}
}()); 

export { app };  