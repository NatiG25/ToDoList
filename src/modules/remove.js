import { Localtasks } from '../index.js';
import { populateStorage } from '../index.js';
import { itemsInsertion } from '../index.js';

const removeTasks = (e) => {
    if(e.target.tagName === 'SPAN') {
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
  }

export default removeTasks;  