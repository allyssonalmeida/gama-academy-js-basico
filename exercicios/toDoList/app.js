const listContainer = document.querySelector('[data-list]');
const newListForm = document.querySelector('[data-new-list-form]');
const newListInput = document.querySelector('[data-new-list-input]');

let toDoList = [];

newListForm.addEventListener('submit', function (e) {
  e.preventDefault();
  console.log('pei');
  const task = newListInput.value;
  if (task === null || task === '' || task == undefined) return;
  const list = createList(task);
  newListInput.value = null;
  toDoList.push(list);
  render();
});

function createList(task) {
  return { id: Date.now().toString(), name: task };
}

function render() {
  clearElement(listContainer);
  toDoList.forEach(function (list) {
    const item = document.createElement('li');
    item.classList.add('item');
    item.innerText = list.name;
    listContainer.appendChild(item);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
