const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	// findOneAndUpdate
	// db.collection('Todos').findOneAndUpdate(
	// 	{ 
	// 		text: 'Beat Marvel Spider-Man' 
	// 	}, {
	// 		$set: {completed: false}
	// 	}, {
	// 		returnOriginal: false
	// }).then((result) => {
	// 	console.log(JSON.stringify(result, undefined, 2));
	// });

	db.collection('Users').findOneAndUpdate(
		{
			_id: new ObjectID('5ba140827b08b1a2e20f706a')
		}, {
			$set: {
				text: 'You know who it is' 
			},
			$inc: {
				age: 1
			}
		}, {
			returnOriginal: false
		}).then((result) => {
			console.log(JSON.stringify(result, undefined, 2));
		}
	);

	// client.close();
});
