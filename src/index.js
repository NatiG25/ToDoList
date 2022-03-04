import './style.css';
import Addtasks from './modules/add.js';
import removeTasks from './modules/remove';
import editTask from './modules/edit';

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

ul.addEventListener('focusout', editTask);

const DisplayLocalTasks = () => {
  if(Localtasks.length !== 0) {
    itemsInsertion();
  }
  Addtasks();
};

DisplayLocalTasks();
