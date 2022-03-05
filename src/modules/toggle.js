const changeStatus = (index, arr) => {
  arr.forEach((elem) => {
    if (elem.index === index && elem.completed === true) {
      elem.completed = false;
    } else if (elem.index === index && elem.completed === false) {
      elem.completed = true;
    }
  });
};

export default changeStatus;