function UserController(voiceSynth) {

	this.user = {
		first: 'Genesys',
		last: 'Customer'
	};

	this.bye = function() {
		var str = 'bye:' + this.user.first;
		alert(str);
		voiceSynth.speak(str);
	}

}