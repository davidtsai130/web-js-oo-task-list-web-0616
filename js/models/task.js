'use strict';
// Task Model
const Task = (function (){
  var counter = 1

  return class {

    constructor(list, description, priority){
      this.description = description;
      this.priority = priority;
      this.list = list
      this.id = counter++
      this.list.tasks.push(this);
    }

    build() {
      $(`ul#list-${this.list.id}`).append(`<li data-id=${this.id}><button class="destroy-task">x</button> ${this.description}, ${this.priority}</li>`)
    }

  }
}())
