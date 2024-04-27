import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "../utils";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations";

export default function Model() {
   const [Size, setSize] = useState("small");
   const [Color, setColor] = useState({
      id: 1,
      title: "iPhone 15 Pro in Natural Titanium",
      color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
      img: yellowImg,
   });
   const cameraControlSmall = useRef();
   const cameraControlLarge = useRef();

   const small = useRef(new THREE.Group());
   const large = useRef(new THREE.Group());

   const [smallRotation, setSmallRotation] = useState(0);
   const [largeRotation, setLargeRotation] = useState(0);
   useGSAP(() => {
      gsap.to("#heading", {
         opacity: 1,
         y: 0,
      });
   });
   const tl = gsap.timeline();
   useEffect(() => {
      if (Size === "large") {
         animateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
            transform: "translateX(-100%)",
            duration: 2,
         });
      }

      if (Size === "small") {
         animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
            transform: "translateX(0)",
            duration: 2,
         });
      }
   }, [Size]);
   return (
      <section className="common-padding">
         <div className="screen-max-width">
            <h1 id="heading" className="section-heading">
               Take a close look.
            </h1>
            <div className="mt-5 flex flex-col items-center ">
               <div className="relative h-[75vh] w-full overflow-hidden md:h-[90vh]">
                  <ModelView
                     index={1}
                     groupRef={small}
                     gsapType="view1"
                     controlRef={cameraControlSmall}
                     setRotationState={setSmallRotation}
                     item={Color}
                     Size={Size}
                  ></ModelView>
                  <ModelView
                     index={2}
                     groupRef={large}
                     gsapType="view2"
                     controlRef={cameraControlLarge}
                     setRotationState={setLargeRotation}
                     item={Color}
                     Size={Size}
                  ></ModelView>
                  <Canvas
                     className="size-full"
                     style={{
                        position: "fixed",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        overflow: "hidden",
                     }}
                     eventSource={document.getElementById("root")}
                  >
                     <View.Port></View.Port>
                  </Canvas>
               </div>
               <div className="mx-auto w-full">
                  <p className="mb-5 text-center text-sm font-light">
                     {Color.title}
                  </p>
                  <div className="flex-center">
                     <ul className="color-container">
                        {models.map((el, i) => (
                           <li
                              key={i}
                              className="mx-2 size-6 cursor-pointer rounded-full"
                              style={{ backgroundColor: el.color[0] }}
                              onClick={() => setColor(el)}
                           ></li>
                        ))}
                     </ul>
                     <div className="size-btn-container">
                        {sizes.map(({ label, value }) => (
                           <button
                              key={label}
                              className="size-btn"
                              style={{
                                 backgroundColor:
                                    Size === value ? "white" : "transparent",
                                 color: Size === value ? "black" : "white",
                              }}
                              onClick={() => setSize(value)}
                           >
                              {label}
                           </button>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
