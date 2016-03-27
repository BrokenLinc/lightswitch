var scene = new THREE.Scene();

// Add camera
var camera = new THREE.PerspectiveCamera(
	// 30, // field of view
	// window.innerWidth / window.innerHeight, // aspect ratio
	// 0.1, // near
	// 1000 // far
);
//camera.position.z = 5;

// Add renderer
var renderer = new THREE.WebGLRenderer(
	// { alpha: true }
);
document.body.appendChild( renderer.domElement );

// // Keep camera and renderer the same size as the viewport
// function fitRendererToWindow() {
// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	camera.updateProjectionMatrix();
// 	renderer.setSize( window.innerWidth, window.innerHeight );
// }
// fitRendererToWindow();
// window.addEventListener('resize', fitRendererToWindow);

// // Add geometric shape
// var geometry = new THREE.DodecahedronGeometry();
// var material = new THREE.MeshPhongMaterial( { 
// 	color: 0xffffff, // white
// 	shading: THREE.FlatShading // keep edges sharp
// } );
// var shape = new THREE.Mesh( geometry, material );
// scene.add( shape );

// // Add ambient light
// // (off-white)
// var ambientLight = new THREE.AmbientLight( 0xdddddd, 1 );
// scene.add( ambientLight );

// // Add directional light
// // (a bit brighter)
// var directionalLight = new THREE.DirectionalLight( 0x1c1c1c, 1 );
// directionalLight.position.set( 0, 1, 0.5 );
// scene.add( directionalLight );

// // Add wireframe to shape
// wireframe = new THREE.EdgesHelper( shape, 0xff8800 ); // dark grey lines
// wireframe.material.linewidth = 2;
// scene.add( wireframe );

// // Listen for lightswitch event and update scene
// document.addEventListener('lightswitch', function(e){
// 	setLightIsOn(e.detail);
// });
// function setLightIsOn(isLightOn) {
// 	if(isLightOn) {
// 		directionalLight.intensity = ambientLight.intensity = 1; // full brightness
// 		wireframe.visible = false;
// 	} else {
// 		directionalLight.intensity = ambientLight.intensity = 0.08; // 10% brightness
// 		wireframe.visible = true;
// 	}
// }

// Render loop and animate spinning of shape
function render() {
	// shape.rotation.x += 0.01;
	// shape.rotation.y += 0.01;
	renderer.render( scene, camera );
	requestAnimationFrame( render );
}
render();
