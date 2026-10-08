import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

/*
Questions:
1. Basic mesh material 
2. They appear flat because they have no reflections, shadows, or texture
*/

// ---------------------------------------------------
// Scene
// ---------------------------------------------------

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x222233);

// ---------------------------------------------------
// Camera
// ---------------------------------------------------

const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 8, 20);

// ---------------------------------------------------
// Renderer
// ---------------------------------------------------

const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);

renderer.shadowMap.enabled = true;

document.body.appendChild(renderer.domElement);

// ---------------------------------------------------
// Controls
// ---------------------------------------------------

const controls = new OrbitControls(camera, renderer.domElement);

// ---------------------------------------------------
// Lights
// ---------------------------------------------------

const ambientLight = new THREE.AmbientLight(
    0xffffff,
    0.4
);

scene.add(ambientLight);

const pointLight = new THREE.PointLight(
    0xffffff,
    200
);

pointLight.position.set(5, 10, 5);

pointLight.castShadow = true;

scene.add(pointLight);

const helper = new THREE.PointLightHelper(
    pointLight,
    0.5
);

scene.add(helper);

// ---------------------------------------------------
// Floor
// ---------------------------------------------------

const floorGeometry =
    new THREE.PlaneGeometry(40, 40);

const floorMaterial =
    new THREE.MeshBasicMaterial({
        color: 0x444444
    });

const floor =
    new THREE.Mesh(
        floorGeometry,
        floorMaterial
    );

floor.rotation.x = -Math.PI / 2;
floor.receiveShadow = true;

scene.add(floor);

// ---------------------------------------------------
// Object Labels
// ---------------------------------------------------

function createPedestal(x, z) {

    const geo =
        new THREE.CylinderGeometry(
            0.8,
            0.8,
            1,
            32
        );

    const mat =
        new THREE.MeshBasicMaterial({
            color: 0x999999
        });

    const pedestal =
        new THREE.Mesh(geo, mat);

    pedestal.position.set(x, 0.5, z);

    pedestal.castShadow = true;
    pedestal.receiveShadow = true;

    scene.add(pedestal);
}

function placeOnPedestal(object, x, z) {
    object.geometry.computeBoundingBox();
    object.position.set(x, 1 - object.geometry.boundingBox.min.y, z);
}

// ---------------------------------------------------
// Materials
// ---------------------------------------------------

const yellowMaterial =
    new THREE.MeshBasicMaterial({
        color: 0xffd43b
    });

const greenMaterial =
    new THREE.MeshBasicMaterial({
        color: 0x2ecc71
    });

const cyanMaterial =
    new THREE.MeshBasicMaterial({
        color: 0x00bcd4
    });

const redMaterial =
    new THREE.MeshBasicMaterial({
        color: 0xff4d4d
    });

const goldMat =
    new THREE.MeshStandardMaterial({
        color: 0xffd43b,
        metalness: 0.8,
        roughness: 0.35
    });

const plasticMat =
    new THREE.MeshPhongMaterial({
        shininess:1
    });

const toonMat = 
    new THREE.MeshToonMaterial({
        color: 0xff4fd8
    });

const whiteMaterial =
    new THREE.MeshBasicMaterial({
        color: 0xf5f5f5
    });

const orangeMaterial =
    new THREE.MeshBasicMaterial({
        color: 0xff8c42
    });

const magentaMaterial =
    new THREE.MeshBasicMaterial({
        color: 0xff4fd8
    });

const treeMat =
    new THREE.MeshLambertMaterial({
        color: 0x2ecc71
    });

const awesomeMat =
    new THREE.MeshPhysicalMaterial({
        color: 0x4b5c2b,
        shininess: 1,
        roughness: 0.5
    });

const somethingMat =
    new THREE.MeshNormalMaterial({
        color: 0xff4daf,
        metalness: 0.9,
        shininess: 0.5
    });

const purpleMaterial =
    new THREE.MeshBasicMaterial({
        color: 0x9b59b6
    });

const blueMaterial =
    new THREE.MeshBasicMaterial({
        color: 0x4169e1
    });

// ---------------------------------------------------
// Row 1
// ---------------------------------------------------

createPedestal(-9, -4);

const sphere =
    new THREE.Mesh(
        new THREE.SphereGeometry(1, 32, 32),
        goldMat
    );

placeOnPedestal(sphere, -9, -4);
sphere.castShadow = true;

scene.add(sphere);

createPedestal(-3, -4);

const cube =
    new THREE.Mesh(
        new THREE.BoxGeometry(2,2,2),
        plasticMat
    );

placeOnPedestal(cube, -3, -4);
cube.castShadow = true;

scene.add(cube);

createPedestal(3, -4);

const crystal =
    new THREE.Mesh(
        new THREE.OctahedronGeometry(1.5),
        yellowMaterial
    );

placeOnPedestal(crystal, 3, -4);
crystal.castShadow = true;

scene.add(crystal);

createPedestal(9, -4);

const statue =
    new THREE.Mesh(
        new THREE.ConeGeometry(1,3,32),
        toonMat
    );

placeOnPedestal(statue, 9, -4);
statue.castShadow = true;

scene.add(statue);

// ---------------------------------------------------
// Row 2
// ---------------------------------------------------

createPedestal(-9, 5);

const torus =
    new THREE.Mesh(
        new THREE.TorusGeometry(
            1,
            0.4,
            16,
            100
        ),
        awesomeMat
    );

placeOnPedestal(torus, -9, 5);
torus.castShadow = true;

scene.add(torus);

createPedestal(-3, 5);

const pyramid =
    new THREE.Mesh(
        new THREE.ConeGeometry(
            1.5,
            3,
            4
        ),
        blueMaterial
    );

placeOnPedestal(pyramid, -3, 5);

scene.add(pyramid);

const spotLight = new THREE.SpotLight(0xfff54d,200);
spotLight.position.set(0, 10, 0);
spotLight.castShadow = true;
scene.add(spotLight);

createPedestal(3, 5);

const normalObject =
    new THREE.Mesh(
        new THREE.TorusKnotGeometry(
            0.8,
            0.3,
            100,
            16
        ),
        awesomeMat
    );

placeOnPedestal(normalObject, 3, 5);
normalObject.castShadow = true;

scene.add(normalObject);

createPedestal(9, 5);

const tree =
    new THREE.Mesh(
        new THREE.CylinderGeometry(
            1,
            1,
            3,
            6
        ),
        treeMat
    );

placeOnPedestal(tree, 9, 5);
tree.castShadow = true;

scene.add(tree);

// ---------------------------------------------------
// Mystery Object
// Students pick the material.
// ---------------------------------------------------

createPedestal(0, 0);

const mystery =
    new THREE.Mesh(
        new THREE.DodecahedronGeometry(1.5),
        somethingMat
    );

placeOnPedestal(mystery, 0, 0);
mystery.castShadow = true;

scene.add(mystery);

// ---------------------------------------------------
// Animation
// ---------------------------------------------------

function animate() {

    requestAnimationFrame(animate);

    sphere.rotation.y += 0.01;
    cube.rotation.y += 0.01;
    crystal.rotation.y += 0.01;
    statue.rotation.y += 0.01;

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.01;

    pyramid.rotation.y += 0.01;
    normalObject.rotation.y += 0.01;
    tree.rotation.y += 0.01;

    mystery.rotation.y += 0.01;

    controls.update();

    renderer.render(scene, camera);
}

animate();

// ---------------------------------------------------
// Resize
// ---------------------------------------------------

window.addEventListener('resize', () => {

    camera.aspect =
        window.innerWidth /
        window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );

});