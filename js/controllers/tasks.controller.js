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

function destroyTask(task) {
  var listID = $(task).closest('div').attr('id');
  var taskID = $(task).closest('li').attr('data-id')
  var list = store.lists[listID];
  $(`li#data-${taskID}`).remove()
  list.tasks.splice(taskID, 1, null)
}
