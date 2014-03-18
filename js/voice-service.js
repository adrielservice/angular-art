function VoiceSynth($log) {

	this.speak = function(text) {

		$log.debug("Speak: " + text);

	};

}

new VoiceSynth();