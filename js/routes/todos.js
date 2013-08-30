Todos.TodosRoute = Em.Route.extend({
  model: function() {
    return Todos.Todo.find()
  }
});
