import * as THREE from '/build/three.modules.js';

//Get a reference to the container element(node) that will hold our scene
const container = document.querySelector( '#scene-container' );

//create a scene
const scene = new THREE.Scene();

// set the background color
scene.background = new THREE.Color( 'skyblue' );


//create camera
const fov = 35; //AKA field of view

const aspect = container.clientWidth / container.clientHeight;

const near = 0.1; //Near Clipping Plane

const far = 100; // far clipping plane

const camera = new THREE.PerspectiveCamera( fov, aspect, near, far );

//every object is initially created at ( 0, 0, 0 )
// we'll move the camera back a bit so that can view the scene
camera.position.set( 0, 0, 10 );


//create geometry
const geometry = new THREE.BoxBufferGeometry( 2, 2, 2);

// create a default (white) basic material 
const material = new THREE.MeshLambertMaterial();

// create a Mesh containing the geometry and material
const mesh = new THREE.Mesh( geometry, material );

//create a mesh containing the material and geometry 
scene.add ( mesh );

// create the renderer
const renderer = new THREE.WebGLRenderer();

renderer.setSize( container.clientWidth, container.clientHeight );
renderer.setPixelRatio( window.devicePixelRatio );

//add the automatically created <canvas> to the page
container.appendChild( renderer.domElement );

//render, or 'create a still image' of the scene
renderer.render( scene, camera );


