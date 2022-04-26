const { randomUUID } = require("crypto");

class TodoList {
  items = [];

  constructor(items = []) {
    this.items = items.map((item) => new TodoItem({ name: item }));
    
    this.fetch = global.fetch;
  }

  addItem({ id, name }) {
    const item = new TodoItem({ id, name });

    this.items.push(item);
  }

 async load() {
    const result = await this.fetch("http:localhost:3000/items");

    this.items = result.map((item) => new TodoItem({name: item}))
  }

  done(id) {
    this.items.find((item) => item.id === id).done();
  }

  clear() {
    this.items = this.item.filter((item) => !item.isDone);
  }
}

class TodoItem {
  constructor({ id, name }) {
    this.id = id || randomUUID();
    this.name = name;
    this.isDone = false;
  }

  done() {
    this.isDone = true;
  }
}

module.exports = { TodoList };
