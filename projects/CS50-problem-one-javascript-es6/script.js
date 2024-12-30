
const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let taskID = 0;
let itemCount = 0;
let uncheckedCount = 0;

document.addEventListener('DOMContentLoaded', function() {
document.querySelector('#new-todo').addEventListener('click', function newToDo(event) {
  event.preventDefault()
    itemCount += 1;
    taskID += 1;
    uncheckedCount += 1;
    uncheckedCountSpan.innerHTML = `${uncheckedCount}`;
    itemCountSpan.innerHTML = `${itemCount}`;
    const task = document.querySelector('#task').value;
    const todoTask = document.createElement('li')
    todoTask.id = `todoTaskID-${taskID}`
    todoTask.innerHTML = `${task} <span style="border: 1px solid black; padding: 10px 20px;"><label for="${todoTask.id}">Task Complete?</label>
    <input type="checkbox" id="todoTaskChecked-${todoTask.id}" class="button" value="check-todo" checked="true">
    </span>
    <button class="button" value="delete-todo" id="todoTaskDelete-${todoTask.id}">Delete Task</button>`;
    list.append(todoTask)
    document.querySelector(`#todoTaskChecked-${todoTask.id}`).addEventListener('click', function() {
      if (document.querySelector(`#todoTaskChecked-${todoTask.id}`).checked === true) {
      uncheckedCount += 1;
      uncheckedCountSpan.innerHTML = `${uncheckedCount}`;
    } else if (document.querySelector(`#todoTaskChecked-${todoTask.id}`).checked === false) {
      uncheckedCount -= 1;
      uncheckedCountSpan.innerHTML = `${uncheckedCount}`;
    }
    })
    document.querySelector(`#todoTaskDelete-${todoTask.id}`).addEventListener('click', function() {
      itemCount -= 1;
      itemCountSpan.innerHTML = `${itemCount}`;
      document.querySelector(`#${todoTask.id}`).style.display = "none";  
      if (document.querySelector(`#todoTaskChecked-${todoTask.id}`).checked === true) {
        uncheckedCount -= 1;
        uncheckedCountSpan.innerHTML = `${uncheckedCount}`;
      }
    })
  })
})
