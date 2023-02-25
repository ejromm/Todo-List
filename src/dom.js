import './style.css';
import Icon from './inbox.png'; 
import Icon2 from './calendar.png'; 
import Icon3 from './calendar-1.png'; 
import Icon4 from './calendar-2.png'; 
import Icon5 from './plus.png'; 
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
    app.setDefaultProject(); 
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
        console.log('clicked'); 
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
       
    
    })
}

export { pageImages, projectModal }; 
