Todos.TodosController = Ember.ArrayController.extend({
  newTitle: '',

  createTodo: function() {
    var title = this.get('newTitle');

    if(!title.trim()){ return; }

    var todo = this.buildTodo();
    this.resetNewTodo()
    todo.save();
  },

  resetNewTodo: function() {
    this.set('newTitle', '');
  },

  buildTodo: function() {
    return Todos.Todo.createRecord({
      title: this.get('newTitle'),
      isCompleted: false
    });
  }
});
