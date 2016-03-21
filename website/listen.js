var messageNode = document.getElementById('message');
var firebaseReference = new Firebase("https://{YOUR_FIREBASE_APP}.firebaseio.com/");

// Listen for changes to the data
firebaseReference.on("value", onFirebaseValue);

// Extract the value from the snapshot
// cast it a a Boolean value
// and dispatch a document event
function onFirebaseValue(snapshot) {
	var isLightOn = Boolean(snapshot.val());
	var event = new CustomEvent(
		'lightswitch', 
		{ detail: isLightOn}
	);
	document.dispatchEvent(event);
}