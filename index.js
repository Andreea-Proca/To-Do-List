const newTodoInput = document.querySelector('#todo-input')
newTodoInput.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    e.preventDefault()
    document.querySelector('.add-todo-btn').click()
  }
})

function deleteButton(li) {
  const button = document.createElement('button')
  const textNode = document.createTextNode('delete')
  button.className = 'todo-delete-btn'
  button.appendChild(textNode)
  li.appendChild(button)

  button.onclick = () => {
    li.remove()
    updateTotal()
  }
}

function addNewTodo() {
  const li = document.createElement('li')
  const liText = document.createElement('div')
  liText.className = 'todo-text'
  li.appendChild(liText)


  const inputValue = document.querySelector('#todo-input').value
  const textNode = document.createTextNode(inputValue)
  li.className = 'todo-item'
  liText.appendChild(textNode)
 
  if (inputValue === '') {
    alert('Cannot create a todo with no input text!')
  } else {
    document.querySelector('.todo-list').appendChild(li)
  }
 
  document.querySelector('#todo-input').value = ''

 
  liText.addEventListener('click', () => {
    li.classList.toggle('todo-completed')
  })

  updateTotal()
  deleteButton(li)
}


function updateTotal(){
  const todoList = document.querySelector('.todo-list').querySelectorAll('li')
  const todosTotalEl = document.querySelector('.todos-total')
  const todosTotal = todoList.length.toString()
  todosTotalEl.innerHTML = todosTotal
}


function completedButtonHandler() {
  const todos = document.querySelector('.todo-list').querySelectorAll('.todo-item')

  todos.forEach(todo => {
    if (!todo.className.includes('todo-completed')) {
      todo.style.display = 'none'
    }else{
      todo.style.display = 'flex'
    }
  })
}


function activeButtonHandler() {
  const todos = document.querySelector('.todo-list').querySelectorAll('.todo-item')

  todos.forEach(todo => {
    if (todo.className.includes('todo-completed')) {
      todo.style.display = 'none'
    }else{
      todo.style.display = 'flex'
    }
  })
}


function allButtonHandler() {
  const todos = document.querySelector('.todo-list').querySelectorAll('.todo-item')

  todos.forEach(todo => {
      todo.style.display = 'flex'
  })
}