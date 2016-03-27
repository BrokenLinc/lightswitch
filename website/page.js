var messageNode = document.getElementById('message');

// Listen for the lightswitch and update the page
document.addEventListener('lightswitch', function(e){
	var isLightOn = e.detail;
	messageNode.textContent = isLightOn? 'Light':'Darkness';
	document.body.className = 'loaded ' + (isLightOn? 'light-on':'');
});