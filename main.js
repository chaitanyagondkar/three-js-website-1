import * as Three from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import space from './space.jpg'
import moons from './moon.jpg'
import pic from './pic.png'



const scene = new Three.Scene();
const camera = new Three.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
const renderer = new Three.WebGL1Renderer({
  canvas:document.querySelector("#bg"),
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth,window.innerHeight)
camera.position.setZ(50)
const grometry = new Three.TorusGeometry(10,3,16,100)
/*const material = new Three.MeshBasicMaterial({color:0xDC143C,wireframe:true})*/
const material = new Three.MeshStandardMaterial({color:0xDC143C})
const torus = new Three.Mesh(grometry,material)
scene.add(torus)





const pointlight =new  Three.PointLight(0xffffff)
pointlight.position.set(5,5,5 )
const greedHelper = new Three.GridHelper(200,50)

const ambientLight =new  Three.AmbientLight(0xffffff)

const lighthelp = new Three.PointLightHelper(pointlight)
const control = new OrbitControls(camera ,renderer.domElement);




scene.add(ambientLight,lighthelp,pointlight,greedHelper);
function animate()
{
  requestAnimationFrame(animate)
  torus.rotation.x +=0.01
  torus.rotation.y +=0.005
  torus.rotation.z +=0.01
  renderer.render(scene,camera)
  control.update()
}
animate()


function addStar() {
  const geometry = new Three.SphereGeometry(0.25, 24, 24);
  const material = new Three.MeshStandardMaterial({ color: 0xffffff });
  const star = new Three.Mesh(geometry, material);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => Three.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

Array(300).fill().forEach(addStar);

const spacetexture =  new Three.TextureLoader().load(space)
scene.background = spacetexture



/*texture mapping .............................*/


const myimg = new Three.TextureLoader().load(pic)  
const chait = new Three.Mesh(
  new Three.BoxGeometry(4,4,4),
  new Three.MeshBasicMaterial({map:myimg})
  

)
scene.add(chait)
chait.position.z = -5;
chait.position.x = 2;


const myimg2 = new Three.TextureLoader().load(moons)  

const moon = new Three.Mesh(
  new Three.SphereGeometry(3,32,32),
  new Three.MeshStandardMaterial({map:myimg2})
)
scene.add(moon)
moon.position.z=30
moon.position.setX(-10)

 /* function moveCamera() {
    const t =document.body.getBoundingClientRect().top
    moon.rotation.y +=0.005
    moon.rotation.x +=0.01
    moon.rotation.z +=0.01
  
    
    chait.rotation.y += 0.01;
    chait.rotation.z += 0.01;
  
    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
  
    
  }
  document.body.onscroll = moveCamera;
  moveCamera();*/
  
