// Scene
var scene = new THREE.Scene();
fogColor = new THREE.Color(0xffffff);

scene.background = fogColor;
scene.fog = new THREE.Fog(fogColor, 2.3, 8.5);

// Camera
var camera = new THREE.PerspectiveCamera(
  75, // fov = field of view
  window.innerWidth / window.innerHeight, //aspect ratio
  0.1, // near
  1000
);
camera.position.z = 5;

// Light
var light = new THREE.PointLight(0xffffff, 1, 1000);
light.position.set(10, 0, 25);
scene.add(light);

// Renderer
var renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setClearColor("#e5e5e5");

renderer.setSize(window.innerWidth, window.innerHeight);

// add renderer to page
document.body.appendChild(renderer.domElement);

// create shape
var geometry = new THREE.BoxGeometry(1, 1, 1);

// place shapes randomly on scene
for (var i = 0; i < 20; i++) {
  // create material
  var material = new THREE.MeshPhysicalMaterial({
    color: randomColor({
      luminosity: "dark",
      format: "rgba" // e.g. 'rgba(9, 1, 107, 0.6482447960879654)'
    })
  });
  // combine shape and material
  var mesh = new THREE.Mesh(geometry, material);
  
  mesh.position.x = Math.ceil((Math.random() - 0.5) * 10);
  mesh.position.y = Math.ceil((Math.random() - 0.5) * 10);
  mesh.position.z = Math.ceil((Math.random() - 0.7) * 6);
  scene.add(mesh);
}

// raycaster-> get mouse click object in scene
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

// fix scene on page resize
window.addEventListener("resize", function () {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});

function render() {
  requestAnimationFrame(render);

  renderer.render(scene, camera);
}

render();

document.addEventListener("mousemove", (event) => {
  event.preventDefault();

  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  var intersects = raycaster.intersectObjects(scene.children, true);
  for (var i = 0; i < intersects.length; i++) {
    this.tl = new TimelineMax();
    this.tl.to(intersects[i].object.scale, 2, { x: 2, ease: Expo.easeOut });
    this.tl.to(intersects[i].object.scale, 1, { x:  1, ease: Expo.easeOut });
    this.tl.to(intersects[i].object.position, 0.5, {
      x: intersects[i].object.position.x+0.35,
      ease: Expo.easeOut
    });
    this.tl.to(
      intersects[i].object.rotation,
      0.5,
      { y: Math.PI * 0.5, ease: Expo.easeOut },
      "=-1.5"
    );
  }
});