var scene = new THREE.Scene();

// Add camera
var camera = new THREE.PerspectiveCamera();

// Add renderer
var renderer = new THREE.WebGLRenderer();
document.body.appendChild( renderer.domElement );

// Render loop
function render() {
	renderer.render( scene, camera );
	requestAnimationFrame( render );
}
render();
