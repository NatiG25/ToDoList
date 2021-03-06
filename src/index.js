import './style.css';
import changeStatus from './modules/toggle';

const ul = document.querySelector('ul');
const input = document.querySelector('.inputAdd');
const btnClearAllCompleted = document.querySelector('.clearBtn');

class TaskObj {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

const parseTasks = JSON.parse(localStorage.getItem('tasks'));
let Localtasks = parseTasks || [];

const populateStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(Localtasks));
};

const itemsInsertion = () => {
  ul.innerHTML = '';
  for (let i = 0; i < Localtasks.length; i += 1) {
    ul.innerHTML += `<li><input type="checkbox" class="checkbox" ${Localtasks[i].completed ? 'checked' : ''}><input value="${
      Localtasks[i].description
    }" id="item-input"> <span id= "${
      Localtasks[i].index - 1
    }" class="trash-icon"> &#x1f5d1; </span></li>`;
  }
};

const Addtasks = () => {
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const NewObj = new TaskObj(input.value, Localtasks.length + 1);
      Localtasks.splice(Localtasks.length, 0, NewObj);
      itemsInsertion();
      populateStorage();
      input.value = '';
    }
  });
};

const removeTasks = (e) => {
  if (e.target.tagName === 'SPAN') {
    const element = e.target;
    const elementId = element.id;
    element.parentNode.remove();
    Localtasks.splice(elementId, 1);
    Localtasks.forEach((elem) => {
      if (elem.index > elementId) {
        elem.index -= 1;
      }
    });
    itemsInsertion();
    populateStorage();
  }
};

ul.addEventListener('click', removeTasks);

const editTask = (e) => {
  if (e.target.id === 'item-input') {
    const element = e.target;
    const targetID = parseInt(element.nextElementSibling.id, 10) + 1;
    Localtasks.forEach((elem) => {
      if (elem.index === targetID) {
        elem.description = element.value;
      }
    });
    itemsInsertion();
    populateStorage();
  }
};

ul.addEventListener('focusout', editTask);

const toggleToDo = (e) => {
  const element = e.target;
  const targetID = parseInt(element.nextElementSibling.nextElementSibling.id, 10) + 1;
  changeStatus(targetID, Localtasks);
  populateStorage();
};

ul.addEventListener('change', toggleToDo);

const clearTasks = () => {
  Localtasks = Localtasks.filter((elem) => elem.completed !== true);
  for (let i = 0; i < Localtasks.length; i += 1) {
    Localtasks[i].index = i + 1;
  }
  itemsInsertion();
  populateStorage();
};

const DisplayLocalTasks = () => {
  if (Localtasks.length !== 0) {
    itemsInsertion();
  }
  Addtasks();
};

DisplayLocalTasks();
btnClearAllCompleted.addEventListener('click', clearTasks);
