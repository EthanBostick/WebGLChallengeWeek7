# Material Museum

A small Three.js scene for exploring 3D objects and materials. The museum includes a floor, pedestals, nine animated objects, and mouse-controlled orbit, pan, and zoom.

## Run the Project

The page loads Three.js as browser modules from a CDN, so open it through a local web server rather than directly from the file system. From the project directory, run:

```sh
python3 -m http.server 8000
```

Then open [http://localhost:8000/materialMuseum.html](http://localhost:8000/materialMuseum.html) in a browser. An internet connection is required to load Three.js from the CDN.

## Controls

- Orbit: left mouse button and drag
- Pan: right mouse button and drag
- Zoom: scroll wheel

## Project Files

- `materialMuseum.html` contains the page, scene instructions, and import map.
- `materialMuseum.js` creates the Three.js scene, objects, materials, controls, and animation.

## Student Challenges

- Change the materials on the objects.
- Experiment with roughness and metalness.
- Create a gold trophy and an ice sculpture.
- Add your own object and a mystery object with a material of your choice.

The displayed objects currently use `MeshBasicMaterial`, which is unaffected by scene lighting and does not use roughness or metalness. To experiment with those properties, try `MeshStandardMaterial` or `MeshPhysicalMaterial` on an object.