import { pageImages, projectModal, projectsSidebar, renderAll, renderFirstProj } from "./dom";
import { app } from './UI'; 
document.addEventListener('DOMContentLoaded', function() { 
console.log(localStorage); 
pageImages(); 
projectModal(); 
renderAll(); 

})




