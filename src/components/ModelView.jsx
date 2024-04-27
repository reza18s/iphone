import {
   Html,
   OrbitControls,
   PerspectiveCamera,
   View,
} from "@react-three/drei";
import Lights from "./Lights";
import { Suspense } from "react";
import { IPhone } from "./IPhone";
import * as THREE from "three";
import Loader from "./Loader";

export default function ModelView({
   index,
   groupRef,
   gsapType,
   controlRef,
   setRotationState,
   item,
   Size,
}) {
   return (
      <View
         index={index}
         id={gsapType}
         className={`absolute size-full ${index === 2 ? "-right-full" : ""}`}
      >
         <ambientLight
            // eslint-disable-next-line react/no-unknown-property
            intensity={0.3}
         ></ambientLight>

         <PerspectiveCamera
            makeDefault
            position={[0, 0, 4]}
         ></PerspectiveCamera>
         <Lights></Lights>
         <OrbitControls
            makeDefault
            ref={controlRef}
            enableZoom={false}
            enablePan={false}
            rotateSpeed={0.4}
            target={new THREE.Vector3(0, 0, 0)}
            onEnd={() =>
               setRotationState(controlRef.current.getAzimuthalAngle())
            }
         />

         <group
            ref={groupRef}
            name={`${index === 1} ? 'small' : 'large`}
            // eslint-disable-next-line react/no-unknown-property
            position={[0, 0, 0]}
         >
            <Suspense fallback={<Loader />}>
               <IPhone
                  scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
                  item={item}
                  Size={Size}
               />
            </Suspense>
         </group>
      </View>
   );
}
