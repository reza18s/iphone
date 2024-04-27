/* eslint-disable no-undef */
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Model from "./components/Model";
import NavBar from "./components/NavBar";
import * as sentry from "@sentry/react";

function App() {
   return (
      <div>
         <NavBar></NavBar>
         <Hero></Hero>
         <Highlights></Highlights>
         <Model></Model>
      </div>
   );
}

export default sentry.withProfiler(App);
