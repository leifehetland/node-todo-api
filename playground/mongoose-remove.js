const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({ _id:'5baa733768e12f31ba7ea27a'}).then((todo) => {
	console.log(todo);
});

// Todo.findByIdAndRemove('5baa733668e12f31ba7ea279').then((todo) => {
// 	console.log(todo);
// });