'use strict';
// Tasks Controller

function tasksController() {
  var listId = $("select[name='select_list']").val()
  var description = $("input[name='task_description']").val()
  var priority = $("input[name='task_priority']").val()
  var newTask = new Task(store.lists[listId], description, priority)
  newTask.build()
  $( "input[type='text']" ).val('')
}
