import * as THREE from "./three.js/build/three.module.js";
import { OrbitControls } from "./three.js/examples/jsm/controls/OrbitControls.js";

const wWidth = window.innerWidth;
const wHeight = window.innerHeight;
const wAspect = wWidth / wHeight;

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(60, wAspect, 0.1, 2000);

let currentCamera = camera;

camera.position.set(0, 300, 500);
camera.lookAt(0, 0, 0);

const orbitCamera = new THREE.PerspectiveCamera(75, wAspect, 0.1, 2000);
orbitCamera.position.set(0, 300, 500);
orbitCamera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(wWidth, wHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;
renderer.setClearColor("rgb(128,128,128)");
document.body.appendChild(renderer.domElement);

const pLight = new THREE.PointLight("#FFFFFF", 1, 1500, 0.5);
pLight.position.set(0, 800, 0);
pLight.castShadow = true;
pLight.shadow.camera.far = 2000;

const ambLight = new THREE.AmbientLight("#FFFFFF", 0.15);

const txtChessboard = new THREE.TextureLoader().load("chess-board.jpg");
const geoChessboard = new THREE.BoxGeometry(500, 500, 10);
const mtrChessboard = new THREE.MeshPhongMaterial({
  map: txtChessboard,
});
const meshChessboard = new THREE.Mesh(geoChessboard, mtrChessboard);
meshChessboard.position.set(0, 0, 0);
meshChessboard.rotation.set(Math.PI / 2, 0, -Math.PI / 2);
meshChessboard.castShadow = true;
meshChessboard.receiveShadow = true;

const createBody = (scene, radiusTop, radiusBot, height, radialSegment) => {
  const textureLoad = new THREE.TextureLoader();
  const background = textureLoad.load("chess-king.jpg");
  const geometry = new THREE.CylinderGeometry(
    radiusTop,
    radiusBot,
    height,
    radialSegment
  );
  const material = new THREE.MeshPhongMaterial({ map: background });
  const cylinder = new THREE.Mesh(geometry, material);
  scene.add(cylinder);
  return cylinder;
};

const createHeadKing = (scene, width, height, depth) => {
  const textureLoad = new THREE.TextureLoader();
  const background = textureLoad.load("chess-king.jpg");
  const geometry = new THREE.BoxGeometry(width, height, depth);
  const material = new THREE.MeshPhongMaterial({ map: background });
  const cube = new THREE.Mesh(geometry, material);
  scene.add(cube);
  return cube;
};

const createSphere = (scene, radius, width, height) => {
  const textureLoad = new THREE.TextureLoader();
  const background = textureLoad.load("chess-king.jpg");
  const geometry = new THREE.SphereGeometry(radius, width, height);
  const material = new THREE.MeshPhongMaterial({ map: background });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);
  return sphere;
};

const lowKing = createBody(scene, 20, 30, 20, 50);
lowKing.position.set(220, 15, 30);
lowKing.castShadow = true;
lowKing.receiveShadow = true;

const midKing = createBody(scene, 15, 15, 100, 32);
midKing.position.set(220, 75, 30);
midKing.castShadow = true;
midKing.receiveShadow = true;

const upperKing = createBody(scene, 22.5, 17.5, 20, 32);
upperKing.position.set(220, 115, 30);
upperKing.castShadow = true;
upperKing.receiveShadow = true;

const horizontalKing = createHeadKing(scene, 35, 8, 8);
horizontalKing.position.set(220, 140, 30);
horizontalKing.rotateY(80);
horizontalKing.castShadow = true;
horizontalKing.receiveShadow = true;

const verticalKing = createHeadKing(scene, 8, 30, 5);
verticalKing.position.set(220, 140, 30);
verticalKing.rotateY(80);
verticalKing.castShadow = true;
verticalKing.receiveShadow = true;

const lowPion1 = createBody(scene, 20, 30, 20, 50);
lowPion1.position.set(155, 15, -220);
lowPion1.castShadow = true;
lowPion1.receiveShadow = true;

const midPion1 = createBody(scene, 10, 15, 40, 64);
midPion1.position.set(155, 45, -220);
midPion1.castShadow = true;
midPion1.receiveShadow = true;

const neckPion1 = createBody(scene, 23, 23, 2, 64);
neckPion1.position.set(155, 66, -220);
neckPion1.castShadow = true;
neckPion1.receiveShadow = true;

const upperPion1 = createSphere(scene, 15, 35, 18);
upperPion1.position.set(155, 80, -220);
upperPion1.castShadow = true;
upperPion1.receiveShadow = true;

const lowPion2 = createBody(scene, 20, 30, 20, 50);
lowPion2.position.set(155, 15, -155);
lowPion2.castShadow = true;
lowPion2.receiveShadow = true;

const midPion2 = createBody(scene, 10, 15, 40, 64);
midPion2.position.set(155, 45, -155);
midPion2.castShadow = true;
midPion2.receiveShadow = true;

const neckPion2 = createBody(scene, 23, 23, 2, 64);
neckPion2.position.set(155, 66, -155);
neckPion2.castShadow = true;
neckPion2.receiveShadow = true;

const upperPion2 = createSphere(scene, 15, 35, 18);
upperPion2.position.set(155, 80, -155);
upperPion2.castShadow = true;
upperPion2.receiveShadow = true;

const lowPion3 = createBody(scene, 20, 30, 20, 50);
lowPion3.position.set(155, 15, -95);
lowPion3.castShadow = true;
lowPion3.receiveShadow = true;

const midPion3 = createBody(scene, 10, 15, 40, 64);
midPion3.position.set(155, 45, -95);
midPion3.castShadow = true;
midPion3.receiveShadow = true;

const neckPion3 = createBody(scene, 23, 23, 2, 64);
neckPion3.position.set(155, 66, -95);
neckPion3.castShadow = true;
neckPion3.receiveShadow = true;

const upperPion3 = createSphere(scene, 15, 35, 18);
upperPion3.position.set(155, 80, -95);
upperPion3.castShadow = true;
upperPion3.receiveShadow = true;

const lowPion4 = createBody(scene, 20, 30, 20, 50);
lowPion4.position.set(155, 15, -32);
lowPion4.castShadow = true;
lowPion4.receiveShadow = true;

const midPion4 = createBody(scene, 10, 15, 40, 64);
midPion4.position.set(155, 45, -32);
midPion4.castShadow = true;
midPion4.receiveShadow = true;

const neckPion4 = createBody(scene, 23, 23, 2, 64);
neckPion4.position.set(155, 66, -32);
neckPion4.castShadow = true;
neckPion4.receiveShadow = true;

const upperPion4 = createSphere(scene, 15, 35, 18);
upperPion4.position.set(155, 80, -32);
upperPion4.castShadow = true;
upperPion4.receiveShadow = true;

const lowPion5 = createBody(scene, 20, 30, 20, 50);
lowPion5.position.set(155, 15, 32);
lowPion5.castShadow = true;
lowPion5.receiveShadow = true;

const midPion5 = createBody(scene, 10, 15, 40, 64);
midPion5.position.set(155, 45, 32);
midPion5.castShadow = true;
midPion5.receiveShadow = true;

const neckPion5 = createBody(scene, 23, 23, 2, 64);
neckPion5.position.set(155, 66, 32);
neckPion5.castShadow = true;
neckPion5.receiveShadow = true;

const upperPion5 = createSphere(scene, 15, 35, 18);
upperPion5.position.set(155, 80, 32);
upperPion5.castShadow = true;
upperPion5.receiveShadow = true;

const lowPion6 = createBody(scene, 20, 30, 20, 50);
lowPion6.position.set(155, 15, 95);
lowPion6.castShadow = true;
lowPion6.receiveShadow = true;

const midPion6 = createBody(scene, 10, 15, 40, 64);
midPion6.position.set(155, 45, 95);
midPion6.castShadow = true;
midPion6.receiveShadow = true;

const neckPion6 = createBody(scene, 23, 23, 2, 64);
neckPion6.position.set(155, 66, 95);
neckPion6.castShadow = true;
neckPion6.receiveShadow = true;

const upperPion6 = createSphere(scene, 15, 35, 18);
upperPion6.position.set(155, 80, 95);
upperPion6.castShadow = true;
upperPion6.receiveShadow = true;

const lowPion7 = createBody(scene, 20, 30, 20, 50);
lowPion7.position.set(155, 15, 155);
lowPion7.castShadow = true;
lowPion7.receiveShadow = true;

const midPion7 = createBody(scene, 10, 15, 40, 64);
midPion7.position.set(155, 45, 155);
midPion7.castShadow = true;
midPion7.receiveShadow = true;

const neckPion7 = createBody(scene, 23, 23, 2, 64);
neckPion7.position.set(155, 66, 155);
neckPion7.castShadow = true;
neckPion7.receiveShadow = true;

const upperPion7 = createSphere(scene, 15, 35, 18);
upperPion7.position.set(155, 80, 155);
upperPion7.castShadow = true;
upperPion7.receiveShadow = true;

const lowPion8 = createBody(scene, 20, 30, 20, 50);
lowPion8.position.set(155, 15, 220);
lowPion8.castShadow = true;
lowPion8.receiveShadow = true;

const midPion8 = createBody(scene, 10, 15, 40, 64);
midPion8.position.set(155, 45, 220);
midPion8.castShadow = true;
midPion8.receiveShadow = true;

const neckPion8 = createBody(scene, 23, 23, 2, 64);
neckPion8.position.set(155, 66, 220);
neckPion8.castShadow = true;
neckPion8.receiveShadow = true;

const upperPion8 = createSphere(scene, 15, 35, 18);
upperPion8.position.set(155, 80, 220);
upperPion8.castShadow = true;
upperPion8.receiveShadow = true;

const lowBishop1 = createBody(scene, 20, 30, 20, 50);
lowBishop1.position.set(220, 15, 95);
lowBishop1.castShadow = true;
lowBishop1.receiveShadow = true;

const midBishop1 = createBody(scene, 10, 17, 70, 64);
midBishop1.position.set(220, 45, 95);
midBishop1.castShadow = true;
midBishop1.receiveShadow = true;

const neckBishop1 = createBody(scene, 23, 23, 2, 64);
neckBishop1.position.set(220, 80, 95);
neckBishop1.castShadow = true;
neckBishop1.receiveShadow = true;

const upperBishop11 = createBody(scene, 17, 10, 10, 64);
upperBishop11.position.set(220, 85, 95);
upperBishop11.castShadow = true;
upperBishop11.receiveShadow = true;

const upperBishop21 = createBody(scene, 17, 17, 10, 64);
upperBishop21.position.set(220, 95, 95);
upperBishop21.castShadow = true;
upperBishop21.receiveShadow = true;

const upperBishop31 = createBody(scene, 1, 17, 10, 64);
upperBishop31.position.set(220, 105, 95);
upperBishop31.castShadow = true;
upperBishop31.receiveShadow = true;

const lowBishop2 = createBody(scene, 20, 30, 20, 50);
lowBishop2.position.set(220, 15, -95);
lowBishop2.castShadow = true;
lowBishop2.receiveShadow = true;

const midBishop2 = createBody(scene, 10, 17, 70, 64);
midBishop2.position.set(220, 45, -95);
midBishop2.castShadow = true;
midBishop2.receiveShadow = true;

const neckBishop2 = createBody(scene, 23, 23, 2, 64);
neckBishop2.position.set(220, 80, -95);
neckBishop2.castShadow = true;
neckBishop2.receiveShadow = true;

const upperBishop12 = createBody(scene, 17, 10, 10, 64);
upperBishop12.position.set(220, 85, -95);
upperBishop12.castShadow = true;
upperBishop12.receiveShadow = true;

const upperBishop22 = createBody(scene, 17, 17, 10, 64);
upperBishop22.position.set(220, 95, -95);
upperBishop22.castShadow = true;
upperBishop22.receiveShadow = true;

const upperBishop32 = createBody(scene, 1, 17, 10, 64);
upperBishop32.position.set(220, 105, -95);
upperBishop32.castShadow = true;
upperBishop32.receiveShadow = true;

const lowBenteng1 = createBody(scene, 20, 30, 20, 50);
lowBenteng1.position.set(220, 15, -220);
lowBenteng1.castShadow = true;
lowBenteng1.receiveShadow = true;

const midBenteng1 = createBody(scene, 12, 17, 70, 64);
midBenteng1.position.set(220, 45, -220);
midBenteng1.castShadow = true;
midBenteng1.receiveShadow = true;

const upperBenteng1 = createBody(scene, 22.5, 17.5, 20, 32);
upperBenteng1.position.set(220, 85, -220);
upperBenteng1.castShadow = true;
upperBenteng1.receiveShadow = true;

const lowBenteng2 = createBody(scene, 20, 30, 20, 50);
lowBenteng2.position.set(220, 15, 220);
lowBenteng2.castShadow = true;
lowBenteng2.receiveShadow = true;

const midBenteng2 = createBody(scene, 12, 17, 70, 64);
midBenteng2.position.set(220, 45, 220);
midBenteng2.castShadow = true;
midBenteng2.receiveShadow = true;

const upperBenteng2 = createBody(scene, 22.5, 17.5, 20, 32);
upperBenteng2.position.set(220, 85, 220);
upperBenteng2.castShadow = true;
upperBenteng2.receiveShadow = true;

const PMLeg = new THREE.Mesh(
    new THREE.CylinderGeometry(20, 30, 20, 50),
    new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('chess-king.jpg')})
);
PMLeg.position.set(220, 15, -31);
PMLeg.castShadow = true;
PMLeg.receiveShadow = true;
scene.add(PMLeg);


//PMBody
const PMBody = new THREE.Mesh(
    new THREE.CylinderGeometry(15, 15, 90, 32),
    new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('chess-king.jpg')})
);
PMBody.position.set(220, 60, -31);
PMBody.castShadow = true;
PMBody.receiveShadow = true;
scene.add(PMBody);

//PMHead
const PMHead = new THREE.Mesh(
    new THREE.CylinderGeometry(22.5, 17.5, 20, 32),
    new THREE.MeshPhongMaterial({
         map: new THREE.TextureLoader().load('chess-king.jpg')})
);
PMHead.position.set(220, 110, -31);
PMHead.castShadow = true;
PMHead.receiveShadow = true;
scene.add(PMHead);

//PMCrown
const PMCrown = new THREE.Mesh(
    new THREE.SphereGeometry(15.5, 17.5, 20, 32),
    new THREE.MeshPhongMaterial({
         map: new THREE.TextureLoader().load('chess-king.jpg')})
);
PMCrown.position.set(220, 120, -31);
PMCrown.castShadow = true;
PMCrown.receiveShadow = true;
scene.add(PMCrown);

//PMCrownkecil
const PMCrownkecil = new THREE.Mesh(
    new THREE.SphereGeometry(5, 17.5, 20, 32),
    new THREE.MeshPhongMaterial({
         map: new THREE.TextureLoader().load('chess-king.jpg')})
);
PMCrownkecil.position.set(220, 138, -31);
PMCrownkecil.castShadow = true;
PMCrownkecil.receiveShadow = true;
scene.add(PMCrownkecil);


//PMOrna1
const PMOrna1 = new THREE.Mesh(
    new THREE.BoxGeometry(10, 15, 5),
    new THREE.MeshPhongMaterial({
         map: new THREE.TextureLoader().load('chess-king.jpg')})
);
PMOrna1.position.set(220, 125, -49);
PMOrna1.castShadow = true;
PMOrna1.receiveShadow = true;
scene.add(PMOrna1);

//PMOrna2
const PMOrna2 = new THREE.Mesh(
    new THREE.BoxGeometry(5, 15, 10),
    new THREE.MeshPhongMaterial({
         map: new THREE.TextureLoader().load('chess-king.jpg')})
);
PMOrna2.position.set(202, 125, -31);
PMOrna2.castShadow = true;
PMOrna2.receiveShadow = true;
scene.add(PMOrna2);

//PMOrna3
const PMOrna3 = new THREE.Mesh(
    new THREE.BoxGeometry(5, 15, 10),
    new THREE.MeshPhongMaterial({
         map: new THREE.TextureLoader().load('chess-king.jpg')})
);
PMOrna3.position.set(238, 125, -31);
PMOrna3.castShadow = true;
PMOrna3.receiveShadow = true;
scene.add(PMOrna3);

//PMOrna4
const PMOrna4 = new THREE.Mesh(
    new THREE.BoxGeometry(10, 15, 5),
    new THREE.MeshPhongMaterial({
         map: new THREE.TextureLoader().load('chess-king.jpg')})
);
PMOrna4.position.set(220, 125, -13);
PMOrna4.castShadow = true;
PMOrna4.receiveShadow = true;
scene.add(PMOrna4);



//kudaLeft
//KudaLegLeft
const KudaLegLeft = new THREE.Mesh(
    new THREE.CylinderGeometry(20, 30, 20, 50),
    new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('chess-king.jpg')})
);
KudaLegLeft.position.set(220, 15, 157);
KudaLegLeft.castShadow = true;
KudaLegLeft.receiveShadow = true;
scene.add(KudaLegLeft);


//KudaBodyLeft
const KudaBodyLeft = new THREE.Mesh(
    new THREE.CylinderGeometry(15, 18, 80, 32),
    new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('chess-king.jpg')})
);
KudaBodyLeft.position.set(220, 60, 157);
KudaBodyLeft.castShadow = true;
KudaBodyLeft.receiveShadow = true;
scene.add(KudaBodyLeft);

//KudaHeadLeft
const KudaHeadLeft = new THREE.Mesh(
    new THREE.CylinderGeometry(20, 13, 60, 32),
    new THREE.MeshPhongMaterial({
         map: new THREE.TextureLoader().load('chess-king.jpg')})
);
KudaHeadLeft.rotation.set(0, 0, -20);
KudaHeadLeft.position.set(220, 100, 157);
KudaHeadLeft.castShadow = true;
KudaHeadLeft.receiveShadow = true;
scene.add(KudaHeadLeft);

//KudaKupingKiriLeft
const KudaKupingKiriLeft = new THREE.Mesh(
    new THREE.BoxGeometry(5, 20, 5),
    new THREE.MeshPhongMaterial({
         map: new THREE.TextureLoader().load('chess-king.jpg')})
);
KudaKupingKiriLeft.position.set(220, 120, 147);
KudaKupingKiriLeft.castShadow = true;
KudaKupingKiriLeft.receiveShadow = true;
scene.add(KudaKupingKiriLeft);

//KudaKupingKananLeft
const KudaKupingKananLeft = new THREE.Mesh(
    new THREE.BoxGeometry(5, 20, 5),
    new THREE.MeshPhongMaterial({
         map: new THREE.TextureLoader().load('chess-king.jpg')})
);
KudaKupingKananLeft.position.set(220, 120, 167);
KudaKupingKananLeft.castShadow = true;
KudaKupingKananLeft.receiveShadow = true;
scene.add(KudaKupingKananLeft);


//kudaRight
//KudaLegRight
const KudaLegRight = new THREE.Mesh(
    new THREE.CylinderGeometry(20, 30, 20, 50),
    new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('chess-king.jpg')})
);
KudaLegRight.position.set(220, 15, -155);
KudaLegRight.castShadow = true;
KudaLegRight.receiveShadow = true;
scene.add(KudaLegRight);


//KudaBodyRight
const KudaBodyRight = new THREE.Mesh(
    new THREE.CylinderGeometry(15, 18, 80, 32),
    new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('chess-king.jpg')})
);
KudaBodyRight.position.set(220, 60, -155);
KudaBodyRight.castShadow = true;
KudaBodyRight.receiveShadow = true;
scene.add(KudaBodyRight);

//KudaHeadRight
const KudaHeadRight = new THREE.Mesh(
    new THREE.CylinderGeometry(20, 13, 60, 32),
    new THREE.MeshPhongMaterial({
         map: new THREE.TextureLoader().load('chess-king.jpg')})
);
KudaHeadRight.rotation.set(0, 0, -20);
KudaHeadRight.position.set(220, 100, -155);
KudaHeadRight.castShadow = true;
KudaHeadRight.receiveShadow = true;
scene.add(KudaHeadRight);

//KudaKupingKiriRight
const KudaKupingKiriRight = new THREE.Mesh(
    new THREE.BoxGeometry(5, 20, 5),
    new THREE.MeshPhongMaterial({
         map: new THREE.TextureLoader().load('chess-king.jpg')})
);

KudaKupingKiriRight.position.set(220, 120, -165);
KudaKupingKiriRight.castShadow = true;
KudaKupingKiriRight.receiveShadow = true;
scene.add(KudaKupingKiriRight);

//KudaKupingKananRight
const KudaKupingKananRight = new THREE.Mesh(
    new THREE.BoxGeometry(5, 20, 5),
    new THREE.MeshPhongMaterial({
         map: new THREE.TextureLoader().load('chess-king.jpg')})
);
KudaKupingKananRight.position.set(220, 120, -145);
KudaKupingKananRight.castShadow = true;
KudaKupingKananRight.receiveShadow = true;
scene.add(KudaKupingKananRight);

scene.add(pLight);
scene.add(ambLight);
scene.add(meshChessboard);

const keyboardListener = (event) => {
  let keyCode = event.keyCode;
  if (keyCode === 81) {
    if (currentCamera === camera) {
      currentCamera = orbitCamera;
    } else {
      currentCamera = camera;
    }
  }
};

const addEventListener = (_) => {
  document.addEventListener("keydown", keyboardListener);
};

const orbitControls = new OrbitControls(orbitCamera, renderer.domElement);

function anim() {
  requestAnimationFrame(anim);
  render();
}

function render() {
  renderer.render(scene, currentCamera);
}

window.onload = () => {
  addEventListener();
  anim();
};
