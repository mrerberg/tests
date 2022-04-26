const { randomUUID } = require("crypto");

function todoList(items = []) {
  const state = {
    todos: items.map((item) => todoItem({ name: item })),
  };

  return {
    items: state.todos,

    addItem({ id, name }) {
      const item = todoItem({ id, name });

      state.todos.push(item);
    },

    async load() {
      const result = await fetch("http:localhost:3000/items");

      state.todos = result.map((item) => todoItem({ name: item }));
    },

    done(id) {
      state.todos.find((item) => item.id === id).done();
    },

    clear() {
      state.todos = item.filter((item) => !item.isDone);
    },
  };
}

function todoItem({ id, name }) {
  const itemId = id || randomUUID();
  let isDone = false;

  return {
    id: itemId,
    name,
    isDone,

    done() {
      isDone = true;
    },
  };
}

module.exports = { todoList };
