import { useState } from "react";

import Image from "next/image";

import styles from "./BigImageScroll.module.scss";

const BigImageScroll = () => {
 const [activeIndex, setActiveIndex] = useState(0);
 return (
  <section className={styles.bigImageScroll}>
   <ul
    className={styles.bigImageScroll__list}
    style={{
     transform: `translateX(-${activeIndex * 400}px)`,
     width: "300vw",
    }}
   >
    <li className={styles.bigImageScroll__list__item}>
     <Image
      src="https://via.placeholder.com/1600x900"
      alt="placeholder"
      width={1600}
      height={900}
      className={styles.bigImageScroll__image}
     />
    </li>
    <li className={styles.bigImageScroll__list__item}>
     <Image
      src="https://via.placeholder.com/1600x900"
      alt="placeholder"
      width={1600}
      height={900}
      className={styles.bigImageScroll__image}
     />
    </li>
    <li className={styles.bigImageScroll__list__item}>
     <Image
      src="https://via.placeholder.com/1600x900"
      alt="placeholder"
      width={1600}
      height={900}
      className={styles.bigImageScroll__image}
     />
    </li>
   </ul>
  </section>
 );
};
export default BigImageScroll;
