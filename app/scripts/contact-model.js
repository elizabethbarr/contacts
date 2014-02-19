var Contact = Backbone.Model.extend({
	defaults: {
		name: '????',
		phone: '555-555-5555',
		avatar: 'http://i785.photobucket.com/albums/yy136/elizbarr20/P1100464_zps1b6eb6ec.jpg',
		bio: ''
	}
});

var ContactsCollection = Backbone.Collection.extend({
	model: Contact,

	url: 'http://0.0.0.0:3000/collections/contacts'
})



