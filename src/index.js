import './style.css';

const ul = document.querySelector('ul');

const chores = [
  {
    description: '',
    completed,
    index,
  },
  {
    description: '',
    completed,
    index,
  },
  {
    description: '',
    completed,
    index,
  },
];

const list = () => {
  for (let i = 0; i < chores.length; i += 1) {
    ul.innerHTML += `<li><input type="checkbox" id="chores"><label for="chores">${chores[i].description}</label></li>`;
  }
};

list();