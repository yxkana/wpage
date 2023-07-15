import { Mesh, Object3D } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

interface face {
  scane: THREE.Scene;
  glbPath: string;
  options: { receiveShadow: boolean; castShadow: boolean };
}

export function LoadGLTFModel(inter: face) {
  const { receiveShadow, castShadow } = inter.options;
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      inter.glbPath,
      (gltf) => {
        const obj = gltf.scene;
        obj.name = "Hi-object";
        obj.position.y = 0;
        obj.position.x = 0;
        obj.receiveShadow = receiveShadow;
        obj.castShadow = castShadow;
        inter.scane.add(obj);

        obj.traverse(function (child) {
          if ((child instanceof Mesh)) {
            child.castShadow = castShadow;
            child.receiveShadow = receiveShadow;
          }
        });
        resolve(obj);
      },
      undefined,
      function (error) {
        reject(error);
      }
    );
  });
}
