import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

export default function Highlights() {
   useGSAP(() => {
      gsap.to("#title", {
         opacity: 1,
         y: 0,
      });
      gsap.to(".link", {
         opacity: 1,
         y: 0,
         stagger: 0.5,
         delay: 0.3,
      });
   });
   return (
      <section
         id="highlights"
         className="common-padding h-full w-screen overflow-hidden bg-zinc"
      >
         <div className="screen-max-width">
            <div className="mb-12 w-full items-end justify-between md:flex">
               <h1 id="title" className="section-heading">
                  Get the highlights
               </h1>
               <div className="flex gap-3">
                  <p className="link">
                     watch the film
                     <img src={watchImg} alt="watch" className="ml-2"></img>
                  </p>
                  <p className="link">
                     watch the event
                     <img src={watchImg} alt="watch" className="ml-2"></img>
                  </p>
               </div>
            </div>
            <VideoCarousel></VideoCarousel>
         </div>
      </section>
   );
}
