import { useState, Fragment } from "react";

import styles from "./ImageSlider.module.scss";

const ImageSlider = () => {
 const [activeIndex, setActiveIndex] = useState(0);
 return (
  <Fragment>
   <div className={styles.imageSlider}>
    <ul
     className={styles.imageSlider__list}
     style={{
      transform: `translateX(-${activeIndex * 400}px)`,
     }}
    >
     <li className={styles.imageSlider__list__item}>
      <img src="https://via.placeholder.com/400x225" alt="placeholder" />
     </li>
     <li className={styles.imageSlider__list__item}>
      <img src="https://via.placeholder.com/400x225" alt="placeholder" />
     </li>
     <li className={styles.imageSlider__list__item}>
      <img src="https://via.placeholder.com/400x225" alt="placeholder" />
     </li>
    </ul>
   </div>
   <button
    onClick={() => {
     setActiveIndex(activeIndex <= 0 ? 0 : activeIndex - 1);
    }}
   >
    Previous
   </button>
   <button
    onClick={() => {
     setActiveIndex(activeIndex >= 2 ? 2 : activeIndex + 1);
    }}
   >
    Next
   </button>
  </Fragment>
 );
};
export default ImageSlider;
