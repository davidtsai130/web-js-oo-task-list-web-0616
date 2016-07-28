'use strict';
// List Model


const store = {
  lists: []
}

const List = (function (){
  var counter = 0

  return class {

    constructor(title){
      this.title = title;
      this.id = counter++;
      this.tasks = [];
      store.lists.push(this);
    }

    build(){
      $('#lists').append(
        `<div class='list' id=${this.id}>
        <h2><button class="destroy-list" id= ${this.id}>x</button> ${this.title}</h2>
        <ul id="list-${this.id}"  data-id="${this.id}">  </ul> `
      )

      $('#select_list').append(`<option value="${this.id}">${this.title}</option>`)
    }

  }
}())
