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

  allAreDone: function(key, value) {
    return !!this.get('length') && this.everyProperty('isCompleted', true)
  }.property('@each.isCompleted'),

  buildTodo: function() {
    return Todos.Todo.createRecord({
      title: this.get('newTitle'),
      isCompleted: false
    });
  },

  remaining: function() {
    return this.filterProperty('isCompleted', false).get('length');
  }.property('@each.isCompleted'),

  inflection: function() {
    var remaining = this.get('remaining');
    return remaining === 1 ? 'item' : 'items';
  }.property('remaining'),

  clearCompleted: function() {
   var completed = this.filterProperty('isCompleted', true);
   completed.invoke('deleteRecord');
   completed.invoke('save');
  },

  hasCompleted: function() {
    return this.get('completed') > 0;
  }.property('completed'),

  completed: function() {
    return this.filterProperty('isCompleted', true).get('length')
  }.property('@each.isCompleted')
});
