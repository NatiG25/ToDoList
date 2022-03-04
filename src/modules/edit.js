import { Localtasks } from '../index.js';
import { populateStorage } from '../index.js';
import { itemsInsertion } from '../index.js';

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

export default editTask;