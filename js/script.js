'use strict';

class Todo {
  constructor(form, input, todoList, todoCompleted, todoContainer) {
    this.form = document.querySelector(form);
    this.input = document.querySelector(input);
    this.todoList = document.querySelector(todoList);
    this.todoCompleted = document.querySelector(todoCompleted);
    this.todoContainer = document.querySelector(todoContainer);
    this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));
  };

  addToStorage() {
    localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
  };

  render() {
    this.input.value = '';
    this.todoList.textContent = '';
    this.todoCompleted.textContent = '';
    this.todoData.forEach(this.createItem);
    this.addToStorage();
  };

  createItem = (todo) => {
    const li = document.createElement('li');

    li.classList.add('todo-item');
    li.key = todo.key;
    li.insertAdjacentHTML('beforeend', `
      <span class="text-todo">${todo.value}</span>
      <div class="todo-buttons">
        <button class="todo-remove"></button>
        <button class="todo-complete"></button>
      </div>
    `);

    if (todo.completed) {
      this.todoCompleted.append(li);
    } else {
      this.todoList.append(li);
    };
  };

  addTodo(event) {
    event.preventDefault();
    if (this.input.value.trim()) {
      const newTodo = {
        value: this.input.value,
        completed: false,
        key: this.generateKey()
      };
      this.todoData.set(newTodo.key, newTodo);
      this.render();
    };
  };

  generateKey() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  };

  deleteItem = (todoData, event) => {
    const target = event.target.closest('.todo-item');

    this.todoData.forEach(item => {
      if (item.key === target.key) {
        todoData.delete(item.key);
      };
    });
  };

  completedItem = (todoData, event) => {
    const target = event.target.closest('.todo-item');

    todoData.forEach(item => {
      if (item.key === target.key) {
        item.completed = !item.completed;
      }
    });
  };

  handler() {
    this.todoContainer.addEventListener('click', (event) => {
      const target = event.target;

      if (target.closest('.todo-complete')) {
        this.completedItem(this.todoData, event);
        this.render();
      } else if (target.closest('.todo-remove')) {
        this.deleteItem(this.todoData, event);
        this.render();
      };
    });

    this.render();
  };

  init() {
    this.handler();
    this.form.addEventListener('submit', this.addTodo.bind(this));
    this.render();
  };
};

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed', '.todo-container');

todo.init();