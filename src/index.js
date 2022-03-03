import './style.css';

const ul = document.querySelector('ul');
let input = document.querySelector('.inputAdd');

class TaskObj {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

const parseTasks = JSON.parse(localStorage.getItem('tasks'));
const Localtasks = parseTasks || [];

const populateStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(Localtasks));
};

let itemsInsertion = () => {
  ul.innerHTML = '';
  for(let i = 0; i < Localtasks.length; i += 1) {
    ul.innerHTML += `<li><input type="checkbox"><input value="${Localtasks[i].description}" class="item-input"> <span id="${Localtasks[i].index - 1}" class="trash-icon">&#x1f5d1;</span></li>`;
  }
}

const Addtasks = () => {
  input.addEventListener('keypress', (e) => {
    if(e.key === 'Enter'){
      const NewObj = new TaskObj(input.value, Localtasks.length +1);
      Localtasks.splice(Localtasks.length, 0, NewObj);
      itemsInsertion();
      populateStorage();
      input.value = '';
    }
  })
}
Addtasks();