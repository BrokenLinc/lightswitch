// Listen for the lightswitch and update the page
document.addEventListener('lightswitch', function(e){
	var isLightOn = e.detail;
	messageNode.textContent = isLightOn? 'Light':'Darkness';
	document.body.className = isLightOn? 'light-on':'';
});