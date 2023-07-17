import {
  useState,
  useEffect,
  useRef,
  useCallback,
  MutableRefObject,
} from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { LoadGLTFModel } from "~/model/Voxel-Object";
import { DogSpinner, DogContainer } from "~/component/voxel-loader";
import { type } from "os";
import { useWindowSize } from "rooks";

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const VoxelHi = () => {
  const refContainer = useRef<HTMLInputElement>(null);

  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();

  
 

  const [loading, setLoading] = useState(true);

  const refRenderer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (container && typeof window !== undefined) {

      
      const scW = innerWidth! < 1600 ? innerWidth! / 1.5 : innerWidth! < 820 ? innerWidth! :2500 / 2;
      const scH = innerWidth! < 1600 ? innerWidth! / 1.5 : innerWidth! < 820 ? innerWidth! :2500 / 2;
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      if (refRenderer.current) {
        clearTimeout(refRenderer.current);
      }
      const scene = new THREE.Scene();

      const target = new THREE.Vector3(3.5, 10, -10);
      const initialCameraPosition = new THREE.Vector3(
        0 * Math.sin(0.2 * Math.PI),
        200,
        100 * Math.cos(0.2 * Math.PI)
      );

      // 640 -> 240
      // 8   -> 6

      
      const scale =  innerWidth! < 1600 ? 13 : innerWidth! < 820 ? 11 : 10;
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        60000
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      controls.enableZoom = false;
      controls.autoRotateSpeed = 0.1;
      controls.enablePan = false;
      
      
      

      LoadGLTFModel({
        scane: scene,
        glbPath: "obj.glb",
        options: { castShadow: true, receiveShadow: true },
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req: number = 0;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 6;

          camera.position.y = 0;
          camera.position.x =
            p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z =
            p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
  }, [innerWidth! < 820 || innerWidth! < 1500]);

  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  );
};

export default VoxelHi;
