import './style.css';
import Icon from './inbox.png'; 
import Icon2 from './calendar.png'; 
import Icon3 from './calendar-1.png'; 
import Icon4 from './calendar-2.png'; 

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



