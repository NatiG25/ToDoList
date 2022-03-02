import './style.css';

const ul = document.querySelector('ul');

const chores = [
  {
    description: 'Wash dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'Fix the car',
    completed: false,
    index: 2,
  },
  {
    description: 'Clean bedroom',
    completed: false,
    index: 3,
  },
];

const list = () => {
  for (let i = 0; i < chores.length; i += 1) {
    ul.innerHTML += `<li><input type="checkbox" id="chores"><label for="chores">${chores[i].description}</label></li>`;
  }
};

list();