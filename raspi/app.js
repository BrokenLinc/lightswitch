var firebase = require("firebase");
var gpio = require("onoff").Gpio;

var isSwitchOn; 
var firebaseReference = new Firebase("https://{YOUR_FIREBASE_APP}.firebaseio.com/");
var lightSwitch = new gpio(17, 'in', 'both');

// Read initial state of switch, then watch for changes
lightSwitch.read(receiveSwitchState);
lightSwitch.watch(receiveSwitchState);

// Handle errors and cast value as inverted Boolean
function receiveSwitchState(err, value) {
	if(err) {
		throw err;
	}
	debounceAndSend(!Boolean(value));
}

function debounceAndSend(_isSwitchOn) {
	if (isSwitchOn !== _isSwitchOn) {
		isSwitchOn = _isSwitchOn;
		console.log('Switch is ' + (isSwitchOn? 'ON':'OFF'));
		firebaseReference.set(isSwitchOn);
	}
}

function releaseGpioResources() {
  lightSwitch.unexport();
  process.exit();
}

// On Unix "interrupt" signal (Ctrl-C)
process.on('SIGINT', releaseGpioResources);