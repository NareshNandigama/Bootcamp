var Todo = Backbone.Model.extend({
// Default todo attribute values
defaults: {
title: 'naresh',
completed: true
}
});
// Now we can create our concrete instance of the model
// with default values as follows:
var todo1 = new Todo();

console.log(JSON.stringify(todo1));
var todo2 = new Todo({
title: 'Check attributes of the logged models in the console.'
});

console.log(JSON.stringify(todo2));
// Or override all of the default attributes:
var todo3 = new Todo({
title: 'This todo is done, so take no action on this one.',
completed: false
});

console.log(JSON.stringify(todo3));