Todos.TodosCompletedRoute = Ember.Route.extend({
  model: function() {
	  return this.store.filter(Todos.Todo, function(todo) {
		  return todo.get('isCompleted');
	  });
  },

  renderTemplate: function(controller) {
	  this.render('todos/index', {controller: controller});
  }
});
