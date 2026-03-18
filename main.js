import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Escena
const scene = new THREE.Scene();

// Cámara
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Render
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Geometría: Icosaedro 
const geometry = new THREE.IcosahedronGeometry(1);

//  Materiales 
const materialR = new THREE.MeshStandardMaterial({ color: 0xbb2222 });
const materialG = new THREE.MeshStandardMaterial({ color: 0x22bb22 });
const materialB = new THREE.MeshStandardMaterial({ color: 0x2222bb });

// Crear objetos
const icoR = new THREE.Mesh(geometry, materialR);
const icoG = new THREE.Mesh(geometry, materialG);
const icoB = new THREE.Mesh(geometry, materialB);

// Posiciones 
icoR.position.x = -3;
icoG.position.x = 0;
icoB.position.x = 3;

// Agregar a la escena
scene.add(icoR);
scene.add(icoG);
scene.add(icoB);

//  Luz frontal
const light = new THREE.DirectionalLight(0xffffff, 1.3);
light.position.set(0, 0, 5);
scene.add(light);

// Luz ambiental 
scene.add(new THREE.AmbientLight(0x404040));

// Cámara
camera.position.z = 6;

// Animación
function animate() {
  requestAnimationFrame(animate);

  icoR.rotation.x += 0.01;
  icoR.rotation.y += 0.01;

  icoG.rotation.x += 0.03;
  icoG.rotation.y += 0.03;

  icoB.rotation.x += 0.05;
  icoB.rotation.y += 0.05;

  renderer.render(scene, camera);
}

animate();

// Ajuste responsivo (extra, pero correcto)
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});