const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// let id = '5ba911a40a566a259c5c9cf41';

// if (!ObjectID.isValid(id)) {
// 	console.log('ID not valid');
// }

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos: ', todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo: ', todo);
// });

// Todo.findById(id).then((todo) => {
// 	if (!todo) {
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by id: ', todo);
	
// }).catch((e) => {
// 	console.log(e);
// });


let uid = '5ba3fb488a2e32bc182915b3';

User.findById(uid).then((uid) => {
	if (!uid) {
		return console.log('User ID not found');
	}
	console.log('User by id: ', uid);
}).catch((e) => {
	console.log(e);
});