here by reffreing this you can easily make the three js project i simplified this to reffer
<img src="./ss1 (1).png" alt="Alt text" width="300" height="200">
<img src="./ss1 (2).png" alt="Alt text" width="300" height="200">


# three-js-website-1
 1 > .secene = secene in this is   container that holds all the 3D objects,
         cameras, lights, and other elements that make up a 3D environment



2>. PerspectiveCamera()= In Three.js, a PerspectiveCamera is a type of camera that mimics the way 
                     the human eye perceives objects in three-dimensional space. 
                     It creates a perspective projection, which means that objects farther away appear 
                     smaller than objects closer to the camera. 
                     This is the typical visual effect we experience in the real world.


const camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);

fov (field of view): This is the extent of the scene that is visible on the display at any given moment.
                     It is specified in degrees. A larger FOV value results in a wider view, 
                     while a smaller FOV value results in a more zoomed-in view.

aspectRatio: This is the ratio of the width of the camera's frustum (the viewable area) to its height.
              It is usually set to the width of the container divided by the height.

near:  This represents the minimum distance from the camera at which objects are visible.
       Anything closer to the camera than this value won't be rendered.

far:    This represents the maximum distance from the camera at which objects are visible.
        Anything beyond this distance won't be rendered.


    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    75 is the field of view in degrees.
    window.innerWidth / window.innerHeight is the aspect ratio.
     0.1 is the near clipping plane distance.
    1000 is the far clipping plane distance.


3>. Renderer == In Three.js, a renderer is responsible for drawing and rendering the three-dimensional
                scene onto a two-dimensional canvas or the HTML page. 
                 It takes the scene, camera,
                and other necessary information and produces the final output that is visible to the user.

4>.
OrbitControls ==> is a utility class in Three.js that allows you to add interactive
                 orbit controls to your 3D scene. It provides a way for users to rotate, zoom, and pan around the scene using mouse or touch inputs. To use OrbitControls-
                 you need to include it in your project and then instantiate it in your JavaScript code.

                 import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

5>.texture mapping

==>
Texture mapping is a technique in computer graphics where a 2D image,
 called a texture, is applied to the surface of a 3D model. 
 This process enhances the visual realism of the model by giving it color,
  patterns, and details. In Three.js, texture mapping is commonly used to apply images 
   procedural textures to the surfaces of 3D objects.

