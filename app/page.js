"use client";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import About from "../components/About";
import Contact from "../components/Contact";
import Homepage from "../components/Homepage";

const pages = [
 {
  title: "Homepage",
  component: <Homepage />,
  backgroundColor: "red",
 },
 {
  title: "About",
  component: <About />,
  backgroundColor: "green",
 },
 {
  title: "Contact",
  component: <Contact />,
  backgroundColor: "lightblue",
 },
];

const Mainpage = () => {
 const [activePageIndex, setActivePageIndex] = useState(0);
 return (
  <div>
   <nav>
    {pages.map((page, index) => {
     return (
      <button
       key={index}
       onClick={() => {
        setActivePageIndex(index);
       }}
      >
       {page.title}
      </button>
     );
    })}
   </nav>
   <main>
    <AnimatePresence>
     <motion.div
      key={activePageIndex}
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { delay: 1 } }}
      exit={{ x: -300, opacity: 0 }}
      style={{ backgroundColor: pages[activePageIndex].backgroundColor }}
     >
      {pages[activePageIndex].component}
     </motion.div>
    </AnimatePresence>
   </main>
  </div>
 );
};
export default Mainpage;
