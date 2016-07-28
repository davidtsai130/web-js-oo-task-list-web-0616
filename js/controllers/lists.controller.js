'use strict';
// Lists Controller

function ListsController() {
  var title = $("input[id='list_title']").val()
  var newList = new List(title)
  newList.build()
  $( "input[type='text']" ).val('')

}

function destroyList(listId) {
    var list = store.lists[listId]
    $(`div#${listId}`).remove()
    $(`option[value="${listId}"]`).remove()
    list.tasks = []
    store.lists.splice(listId, 1, null);
    // store.lists = _.filter(store.lists, function(item) {
    //   return item.listId !== listId
    // });
}
