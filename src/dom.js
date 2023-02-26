import './style.css';
import Icon from './inbox.png'; 
import Icon2 from './calendar.png'; 
import Icon3 from './calendar-1.png'; 
import Icon4 from './calendar-2.png'; 
import Icon5 from './plus.png'; 
import Icon6 from './trash-removebg-preview.png'; 
import { app } from './UI';

//upload button icons
function pageImages() {
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

    })

    projectFormCancel.addEventListener('click', function() {
        buttonsDiv.removeChild(projectForm); 
        buttonsDiv.appendChild(newProjButton); 
    })

    projectFormSubmit.addEventListener('click', function(e) {
        e.preventDefault(); 
        app.addProjectToLibrary(projectInput.value);
        buttonsDiv.removeChild(projectForm);
        buttonsDiv.appendChild(newProjButton); 
        renderAndDisplay(projectInput.value); 
    
    })
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
    })
}



function renderAll() {
 app.restoreLocalStorage();
 let arr = app.returnStorage(); 
 console.log(arr); 
  arr.forEach((project) => renderAndDisplay(project.name))
}
export { pageImages, projectModal, renderAll }; 
