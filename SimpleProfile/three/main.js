let width = window.innerWidth;
let height = window.innerHeight;
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 1000);
let renderer = new THREE.WebGLRenderer();
let planeGeo = new THREE.PlaneGeometry(100, 100);
const texture = new THREE.TextureLoader().load( "./assets/grass.jpg" );
let planeMesh = new THREE.Mesh(planeGeo, new THREE.MeshBasicMaterial({ color: 0xffffff }));

camera.position.z += 5;

scene.background = new THREE.Color('skyblue');
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

let Geo = new THREE.BoxGeometry(1, 1, 1);
let Mat = new THREE.MeshBasicMaterial({ map : texture });
let Mesh = new THREE.Mesh(Geo, Mat);
scene.add(Mesh);

let pageX = 0.5;
let pageY = 0.5;

document.body.addEventListener('mousemove', (event) => {
  pageX = event.pageX / window.innerWidth;
  pageY = event.pageY / window.innerHeight;
});

function update() {
  Mesh.rotation.x = (pageY - 0.5) * 2;
  Mesh.rotation.y = (pageX - 0.5) * 2;
  requestAnimationFrame(update);
  renderer.render(scene, camera);
}
update();
