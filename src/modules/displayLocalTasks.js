import { Localtasks } from '../index.js';
import { itemsInsertion } from '../index.js';
import Addtasks from './add.js';

const DisplayLocalTasks = () => {
    if(Localtasks.length !== 0) {
      itemsInsertion();
    }
    Addtasks();
  };

export default DisplayLocalTasks;