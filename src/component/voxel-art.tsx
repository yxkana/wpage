import {
  useState,
  useEffect,
  useRef,
} from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { LoadGLTFModel } from "~/model/Voxel-Object";
import { DogSpinner, DogContainer } from "~/component/voxel-loader";

import { useMediaQuery } from "usehooks-ts";

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const VoxelHi = () => {
  const refContainer = useRef<HTMLInputElement>(null);

  const ultraWide = useMediaQuery("(min-width: 2400px)");
  const Wide = useMediaQuery("(min-width: 2000px)");
  const notebook = useMediaQuery("(min-width: 1400px)");
  const tablet = useMediaQuery("(min-width: 1024px)");
  const mobile = useMediaQuery("(min-width: 414px)");


  const [loading, setLoading] = useState(true);

  const refRenderer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (container && typeof window !== undefined) {
      const scW = ultraWide ? 1120 : Wide ? 1000 : notebook ? 900 : tablet ? 750 : mobile ? 560 : 380;
      const scH = ultraWide ? 1120 : Wide ? 1000 : notebook ? 900 : tablet ? 750 : mobile ? 560 : 380;
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

      const target = new THREE.Vector3(3.5, 10, -5);
      const initialCameraPosition = new THREE.Vector3(
        0 * Math.sin(0.2 * Math.PI),
        200,
        200 * Math.cos(0.2 * Math.PI)
      );

      // 640 -> 240
      // 8   -> 6

      const scale = 8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.1,
        200
      );
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);
      const ambientLight = new THREE.AmbientLight(0xcccccc, 1);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;
      controls.enableZoom = false;
      controls.autoRotateSpeed = 0.2;
      controls.enablePan = false;

      

      void LoadGLTFModel({
        scane: scene,
        glbPath: "obj.glb",
        options: { castShadow: true, receiveShadow: true },
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req = 0;
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
  }, [ultraWide,Wide,notebook,tablet,mobile]);

  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  );
};

export default VoxelHi;
