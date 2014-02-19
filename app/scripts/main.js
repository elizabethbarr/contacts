console.log('Way cool, bitches.');

$(document).ready(function(){

	//start the app
	window.contacts = new ContactsCollection()

	contacts.fetch({
		success: function(){
			contacts.each(function(contact){
		   		new ListView({model: contact});
			})

		},
		error: function(){
			console.log('Whoa, there is a problem')
	}	
 })		


});



