const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true,
		minlength: 1,
		trim: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

// let newTodo = new Todo({
// 	text: 'Eat lunch' 
// });

// newTodo.save().then((doc) => {
// 	console.log('Saved todo: ', doc);
	
// }, (e) => {
// 	console.log('Unable to save todo');
// });

// let nextTodo = new Todo({
// });

// nextTodo.save().then((doc) => {
// 	console.log('Saved todo: ', JSON.stringify(doc, undefined, 2));
// }, (e) => {
// 	console.log('Unable to save todo');
// });

let User = mongoose.model('User', {
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	}
});

let newUser = new User({
	email: ' leif@example.com     '
});

newUser.save().then((doc) => {
	console.log('Saved user: ', JSON.stringify(doc, undefined, 2));
}, (e) => {
	console.log('Unable to save user: ', e);
});