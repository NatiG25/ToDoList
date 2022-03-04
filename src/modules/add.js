import { input } from '../index.js'
import { TaskObj } from '../index.js';
import { Localtasks } from '../index.js';
import { populateStorage } from '../index.js';
import { itemsInsertion } from '../index.js';

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

export default Addtasks;