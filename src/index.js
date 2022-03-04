import './style.css';
import Addtasks from './modules/add.js';
import removeTasks from './modules/remove';

const ul = document.querySelector('ul');
export const input = document.querySelector('.inputAdd');

export class TaskObj {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

const parseTasks = JSON.parse(localStorage.getItem('tasks'));
export const Localtasks = parseTasks || [];

export const populateStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(Localtasks));
};

export const itemsInsertion = () => {
  ul.innerHTML = '';
  for(let i = 0; i < Localtasks.length; i += 1) {
    ul.innerHTML += `<li><input type="checkbox"><input value="${Localtasks[i].description}" id="item-input"> <span id= "${Localtasks[i].index - 1}" class="trash-icon"> &#x1f5d1; </span></li>`;
  }
}

ul.addEventListener('click', removeTasks);

const editTask = (e) => {
  if (e.target.id == 'item-input') {
  const element = e.target;
  const targetID = parseInt(element.nextElementSibling.id, 10) + 1;
  Localtasks.forEach(elem => {
    if(elem.index === targetID) {
      elem.description = element.value;
    }
  })
  itemsInsertion();
  populateStorage();
  }
  
}

ul.addEventListener('focusout', editTask);

const DisplayLocalTasks = () => {
  if(Localtasks.length !== 0) {
    itemsInsertion();
  }
  Addtasks();
};

DisplayLocalTasks();
