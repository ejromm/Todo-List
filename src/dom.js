import './style.css';
import Icon from './inbox.png'; 
import Icon2 from './calendar.png'; 
import Icon3 from './calendar-1.png'; 
import Icon4 from './calendar-2.png'; 
import Icon5 from './plus.png'; 
import Icon6 from './trash-removebg-preview.png'; 
import Icon7 from './star-filled-svgrepo-com.svg';
import Icon8 from './star-svgrepo-com.svg'
import { app } from './UI';

//upload button icons
function createDOM() {
    const imgOne = new Image(); 
    imgOne.src = Icon; 
    imgOne.classList.add('tasks-image'); 
    const allTasks = document.querySelector('.all-tasks-img');
    allTasks.appendChild(imgOne); 
    
    const imgTwo = new Image(); 
    imgTwo.src = Icon3; 
    imgTwo.classList.add('today-image'); 
    const today = document.querySelector('.today-img');
    today.appendChild(imgTwo); 
    
    const imgThree = new Image(); 
    imgThree.src = Icon2; 
    imgThree.classList.add('week-image'); 
    const week = document.querySelector('.week-img');
    week.appendChild(imgThree); 
    
    const imgFour = new Image(); 
    imgFour.src = Icon4; 
    imgFour.classList.add('favorite-image'); 
    const favorite = document.querySelector('.favorite-img');
    favorite.appendChild(imgFour); 
    
    const imgFive = new Image(); 
    imgFive.src = Icon5; 
    imgFive.classList.add('project-image'); 
    const newProject = document.querySelector('.proj-img'); 
    newProject.appendChild(imgFive); 

    const todoBtnContainer = document.querySelector('.todo-container'); 
 
    const addTodoBtn = document.createElement('button'); 
    addTodoBtn.classList.add('add-todo-btn'); 
    todoBtnContainer.appendChild(addTodoBtn); 

    const addTodoImage = new Image(); 
    addTodoImage.src = Icon5; 
    addTodoImage.classList.add('add-todo-img'); 
    addTodoBtn.appendChild(addTodoImage);

    const addTodoText = document.createElement('p'); 
    addTodoText.textContent = 'Add Todo'; 
    addTodoText.classList.add('add-todo-text');
    addTodoBtn.appendChild(addTodoText); 


    const addTodoForm = document.createElement('form');  
    addTodoForm.classList.add('add-todo-form'); 
    const addTodoHeader = document.createElement('h1'); 
    addTodoHeader.classList.add('add-todo-header');
    addTodoHeader.textContent = 'New Todo'; 

    const titleInput = document.createElement('input'); 
    titleInput.type = 'text'; 
    titleInput.setAttribute('placeholder', 'Title'); 
    titleInput.setAttribute('id', 'todo-title-input'); 

 
    
    const importantDiv = document.createElement('div'); 
    importantDiv.classList.add('important-div'); 
    const importantLabel = document.createElement('label'); 
    importantLabel.classList.add('important-label'); 
    importantLabel.textContent = 'Important?'; 

    const importantInputsDiv = document.createElement('div'); 
    importantInputsDiv.classList.add('important-inputs-div'); 
    const importantInputOne = document.createElement('input'); 
    const importantInputTwo = document.createElement('input'); 
    importantInputOne.type = 'radio'; 
    importantInputTwo.type = 'radio'; 
    importantInputOne.classList.add('important-input-one'); 
    importantInputTwo.classList.add('important-input-two'); 
    const importantInputOneLabel = document.createElement('label'); 
    const importantInputTwoLabel = document.createElement('label'); 
    importantInputOneLabel.textContent = 'Yes'; 
    importantInputTwoLabel.textContent = 'No'; 
    const importantOne = document.createElement('div'); 
    const importantTwo = document.createElement('div'); 
    importantOne.append(importantInputOneLabel, importantInputOne); 
    importantTwo.append(importantInputTwoLabel, importantInputTwo); 
    importantOne.classList.add('important-one'); 
    importantTwo.classList.add('important-two'); 
    importantInputOne.setAttribute('name', 'important'); 
    importantInputTwo.setAttribute('name', 'important'); 
    importantInputsDiv.append(importantOne, importantTwo); 
    importantDiv.append(importantLabel, importantInputsDiv); 

    const dateInput = document.createElement('input'); 
    dateInput.classList.add('date-input'); 
    dateInput.type = 'date'; 
    dateInput.setAttribute('placeholder', 'mm/dd/yyyy'); 

    const formSubmitCancel = document.createElement('div'); 
    formSubmitCancel.classList.add('form-submit-cancel'); 
    const formSubmitBtn = document.createElement('button'); 
    const formCancelBtn = document.createElement('button'); 
    formSubmitBtn.classList.add('form-submit-btn'); 
    formCancelBtn.classList.add('form-cancel-btn'); 
    formSubmitBtn.textContent = 'Add';
    formCancelBtn.textContent = 'Cancel'; 
    formSubmitCancel.append(formSubmitBtn, formCancelBtn); 
    addTodoForm.append(addTodoHeader, titleInput, importantDiv, dateInput, formSubmitCancel); 
    todoBtnContainer.appendChild(addTodoForm); 

    addTodoBtn.classList.add('invisible');
    addTodoForm.classList.add('invisible'); 
}

// add event listener to add project button, create form modal, push contents to local storage
function projectModal() { 
    const newProjButton = document.querySelector('#new-proj-btn'); 
    const buttonsDiv = document.querySelector('.project-btns');

    const projectForm = document.createElement('form');
    projectForm.classList.add('add-proj-form'); 
    const projectInput = document.createElement('input'); 
    projectInput.setAttribute('id', 'new-project-input'); 
    projectInput.setAttribute('placeholder', 'New Project'); 
    projectInput.setAttribute('type', 'text'); 
    projectInput.required = true; 
    projectForm.appendChild(projectInput); 

    const projectFormBtnsDiv = document.createElement('div'); 
    projectFormBtnsDiv.classList.add('project-form-btns-div'); 
    const projectFormSubmit = document.createElement('button'); 
    const projectFormCancel = document.createElement('button'); 
    projectFormSubmit.setAttribute('id', 'project-form-submit'); 
    projectFormSubmit.setAttribute('name', 'submit'); 
    projectFormCancel.setAttribute('id', 'project-form-cancel'); 
    projectFormSubmit.textContent = 'Submit'; 
    projectFormCancel.textContent = 'Cancel'; 
    projectFormBtnsDiv.append(projectFormSubmit, projectFormCancel); 
    projectForm.appendChild(projectFormBtnsDiv); 


    newProjButton.addEventListener('click', function() {

        buttonsDiv.removeChild(newProjButton); 
        buttonsDiv.appendChild(projectForm); 

    });

    projectFormCancel.addEventListener('click', function() {
        buttonsDiv.removeChild(projectForm); 
        buttonsDiv.appendChild(newProjButton); 
    });

    projectFormSubmit.addEventListener('click', function(e) {
        e.preventDefault(); 
        app.addProjectToLibrary(projectInput.value);
        buttonsDiv.removeChild(projectForm);
        buttonsDiv.appendChild(newProjButton); 
        renderAndDisplay(projectInput.value); 
    
    });
}
function renderAndDisplay(project) {
    const projectList = document.querySelector('.projects-list'); 
    let item = document.createElement('li'); 
    item.classList.add('project-list-item'); 
    let projectText = document.createElement('p'); 
    projectText.classList.add('project-item-text'); 
    projectText.textContent = project; 
    item.append(projectText); 
    
    projectList.append(item); 
    app.updateLocalStorage(); 

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete-project-button'); 
    item.append(deleteBtn);  

    const deleteImg = new Image(); 
    deleteImg.src = Icon6; 
    deleteImg.classList.add('delete-project-img'); 
    deleteBtn.append(deleteImg); 

    deleteBtn.addEventListener('click', function() {
        item.remove(); 
        app.deleteProjectFromLibrary(project);
        app.updateLocalStorage()
    }); 

    const addTodoBtn = document.querySelector('.add-todo-btn'); 
    const addTodoForm = document.querySelector('.add-todo-form'); 
   
    

    item.addEventListener('click', function() {
        const todoItems = document.querySelectorAll('.todo-item'); 

        for (let item of todoItems) {
            item.remove(); 
        }
        addTodoBtn.classList.remove('invisible'); 
        addTodoForm.classList.add('invisible'); 
        addTodoForm.removeAttribute('id', 'add-todo-form-visible');
        
        renderProjectScreen(project); 
        renderProjectTodos(project); 
         
    })
}


function renderProjectScreen(proj) {
    const projectNameContainer = document.querySelector('.project-name'); 
    projectNameContainer.textContent = proj; 
    
    const addTodoBtn = document.querySelector('.add-todo-btn'); 
    
    const addTodoForm = document.querySelector('.add-todo-form'); 
    const formCancelBtn = document.querySelector('.form-cancel-btn'); 
    const formSubmitBtn = document.querySelector('.form-submit-btn'); 
    addTodoBtn.addEventListener('click', function() {
        addTodoBtn.classList.add('invisible');
        addTodoForm.classList.remove('invisible');
        addTodoForm.setAttribute('id', 'add-todo-form-visible');  
       
    }); 

    formCancelBtn.addEventListener('click', function(e) {
        e.preventDefault(); 
        addTodoForm.removeAttribute('id', 'add-todo-form-visible'); 
        addTodoForm.classList.add('invisible');  
        addTodoBtn.classList.remove('invisible'); 
      }); 

    formSubmitBtn.addEventListener('click', function(e) {
        e.preventDefault(); 
        e.stopImmediatePropagation(); 
        addTodoForm.removeAttribute('id', 'add-todo-form-visible'); 
        addTodoForm.classList.add('invisible'); 
        addTodoBtn.classList.remove('invisible');  
        pushTodo(); 
        
    }); 

}
function pushTodo() {
    const pName = document.querySelector('.project-name').textContent; 
    const title = document.getElementById('todo-title-input');
    const titleVal = title.value; 
    let importantVal = false; 
    let doneVal = false; 
    const importantInputOne = document.querySelector('.important-input-one'); 
    const importantInputTwo = document.querySelector('.important-input-two'); 
    if (importantInputOne.checked) {
        importantVal = true; 
       
    }; 

    const date = document.querySelector('.date-input').value; 
    const dateFinal = new Date(date);
   
    app.addTodoToProject(pName, titleVal, dateFinal, importantVal, doneVal); 
    app.updateLocalStorage(); 
    
    const todoItems = document.querySelectorAll('.todo-item'); 

        for (let item of todoItems) {
            item.remove(); 
        }
        renderProjectTodos(pName);
    


}
function renderProjectTodos(pName) {
    const todos = app.projectTodos(pName); 
    todos.forEach((todo) => {
        const todoContainer = document.querySelector('.todo-container');
        const todoBtnContainer = document.querySelector('.add-todo-btn');
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item'); 
        todoContainer.insertBefore(todoItem, todoBtnContainer);
    
        const todoCheckAndTitle = document.createElement('div');
        todoCheckAndTitle.classList.add('todo-check-title');
        const todoCheckBox = document.createElement('input');
        todoCheckBox.type = 'checkbox'; 
        todoCheckBox.setAttribute('id', 'todo-checkbox');
        const todoTitle = document.createElement('span');
        todoTitle.setAttribute('id', 'todo-title');
        todoCheckAndTitle.append(todoCheckBox, todoTitle);
        const todoDateImportantDelete = document.createElement('div');
        todoDateImportantDelete.classList.add('todo-date-important-delete');
        const todoDate = document.createElement('span');
        todoDate.setAttribute('id', 'todo-date');
        const todoImportantImg = new Image(); 
        todoImportantImg.src = Icon8;
        todoImportantImg.setAttribute('id', 'todo-important-image');
        const todoDeleteBtn = new Image(); 
        todoDeleteBtn.src = Icon6;
        todoDeleteBtn.setAttribute('id', 'todo-delete-btn');
        todoDateImportantDelete.append(todoDate, todoImportantImg, todoDeleteBtn);
        todoItem.append(todoCheckAndTitle, todoDateImportantDelete);
    
        todoTitle.textContent = todo.title; 
        const date = new Date(todo.date); 
        todoDate.textContent = date.toLocaleDateString();
        
        if (todo.done === false) {
            todoCheckBox.checked = false; 
        } else if (todo.done === true) {
            todoCheckBox.checked = true; 
        }
    
        if (todo.important === false) {
            todoImportantImg.src = Icon8;
        } else if (todo.important === true) {
            todoImportantImg.src = Icon7; 
        }
        
        todoImportantImg.addEventListener('click', function() {
            if (todoImportantImg.src === Icon7) {
                todoImportantImg.src = Icon8; 
                app.switchImportant(pName, todo.title)
                app.updateLocalStorage(); 
            } else if (todoImportantImg.src === Icon8) {
                todoImportantImg.src = Icon7; 
                app.switchImportant(pName, todo.title); 
                app.updateLocalStorage(); 
            }
        }); 
    
        todoCheckBox.addEventListener('click', function() {
            app.switchDone(pName, todo.title); 
            console.log('checkbox')
            app.updateLocalStorage(); 
        }); 
    
        todoDeleteBtn.addEventListener('click', function() {
            app.deleteTodoFromProject(pName, todo.title);
            app.updateLocalStorage(); 
            todoItem.remove(); 
        })
        
    })
}
 

function renderAll() {
 app.restoreLocalStorage();
 let arr = app.returnStorage(); 
 console.log(arr); 
  arr.forEach((project) => renderAndDisplay(project.name))
}
export { createDOM, projectModal, renderAll }; 
