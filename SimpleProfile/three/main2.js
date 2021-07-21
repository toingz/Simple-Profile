let scene = new THREE.Scene(); 
let cam = new THREE.PerspectiveCamera(45, innerWidth/innerHeight, 1, 
1000); 
let renderer = new THREE.WebGLRenderer(); 
let cGeo = new THREE.BoxGeometry(1,1,1); 
let cMat = new THREE.MeshBasicMaterial({color: "green"}); 
let cMesh = new THREE.Mesh(cGeo, cMat); 
scene.add(cMesh); 
 
let planeGeo = new THREE.PlaneGeometry(100,100); 
const texture = new THREE.TextureLoader().load( "./assets/grass.jpg" ); 
let planeMesh = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({map 
: texture})); 
planeMesh.rotation.x -= Math.PI/2; 
planeMesh.position.y -= 0.5; 
scene.add(planeMesh); 
 
cam.position.z += 5; 
scene.background = new THREE.Color("skyblue"); 
renderer.setSize(window.innerWidth, window.innerHeight); 
document.body.appendChild(renderer.domElement); 
 
let controls = new THREE.OrbitControls(cam, renderer.domElement); 
function update(){ 
    renderer.render(scene,cam); 
    requestAnimationFrame(update); 
} 
update();