var socket = io();
			socket.on('connect', function () {
				console.log('connected to server');
				socket.emit('createEmail', {
					to:'xyz@gmail.com',
					text:'hey,am fine'
				});
			});
			socket.on('disconnect', function () {
				console.log('Disconnected');
			});


socket.on('newEmail', function (email) {
	console.log('New email', email);
});