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
import { useWindowSize } from "~/hooks/ScreenSizer";

function easeOutCirc(x: number) {
  return Math.sqrt(1 - Math.pow(x - 1, 4));
}

const VoxelHi = () => {
  const refContainer = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useState(true);
  const {
    width,
    height,
  }: { width: undefined | number; height: undefined | number } =
    useWindowSize();

  const refRenderer = useRef<ReturnType<typeof setTimeout> | null>(null);
  /* const urlDogGLB =
    (process.env.NODE_ENV === "production"
      ? "https://craftzdog.global.ssl.fastly.net/homepage"
      : "") + "/dog.glb"; */

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;

    if (container && renderer) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;
    }
  }, []);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (container && typeof window !== undefined) {
      const scW = width! / 1.5;
      const scH = width! / 1.5;
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

      const target = new THREE.Vector3(2, 10, -10);
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      );

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.008 + 4.8;
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
      controls.autoRotate = false;
      controls.target = target;

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
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

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
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  );
};

export default VoxelHi;
