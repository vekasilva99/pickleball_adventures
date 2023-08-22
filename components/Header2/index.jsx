import React from "react";
import styles from "./header.module.css";

export const Header = ({
  titleLine1,
  titleLine2,
  background,
  backgroundTop,
  whiteBackground,
  yellowBackground,
  dark,
}) => {
  return (
    <div className={styles.header}>
      {/* {whiteBackground &&
            <div className={styles.whiteGradient}></div>}
                 {yellowBackground &&
            <div className={styles.yellowGradient}></div>}
      <img src={background} className={styles.background}/>
      <div className={styles.backgroundTopContainer}>
      <img src={backgroundTop} className={styles.backgroundTop}/>
      <div className={dark ? styles.title2 : styles.title  }>
      <h2>{titleLine1}</h2>
      <h3>{titleLine2}</h3>
      </div>
      </div> */}
      {/* <img className={styles.example} src='/assets/2.svg'/> */}
      <div className={styles.title3}>
        <h3>About</h3>
        <h4>Us</h4>
      </div>
      <div className={styles.absolute1}>

      <svg xmlns="http://www.w3.org/2000/svg" width="495" height="614" viewBox="0 0 495 614">

  <path id="Color_Fill_3" data-name="Color Fill 3" className={styles.svgElem1} d="M72,273c23.176,0.968,41.686,29.2,59,23,9.555-3.471,13.028-10.52,16-19l4,1c3.683,3.282,5.365,5.746,4,9l-23,17c-23.586,5.847-34.03-19-50-23-19.027-4.765-39.132,6.385-53,10l21,45c3.747,17.064-11.938,45.066,4,56,12.381,8.494,50.622-3.753,59,7,14.16,18.174-2,48.884,21,59,11.227-.956,17.955-5.95,25-11,37.953,14.361,23.891,70.8,59,96,11.172-6.959,8.371-28.845,11-44,7.466-5.441,16.633-6.269,25-1,5.519,17.344,5.391,43.426,20,52l5-1c6.84-12.714,14.876-26.374,25-36,47.477,4.085,25.96-38.917,50-63l5,1c9.294,4.773,7.645,17.549,15,24l6-1c6.267-12.114,5.87-25.916,12-41,2.718-6.688,12.168-9.855,16-22q5.5-21.5,11-43c10.69-23.027,44.712-24.646,47-57h-2l-37-3c-29.758-5.18-53.742-11.68-72-28l-35,12c7.62-10.933,20.224-17.834,37-19,22.847,13.819,40.54,22.355,74,28,19.186,3.237,36.392-3.18,43,13-9.816,29.558-33.024,32.765-47,55l-17,59-11,7c-10.767,15.751,2.2,51.523-29,46-6.513-5.349-7.235-19.766-15-23-9.4,20.964-8.9,52.85-29,63-9.852,4.974-17.411-.992-24,3-3.756,10.507-18.21,40.913-34,32-13.789-7.784-15.868-34.443-19-53l-3-1H236c-4.028,17.744.762,40.028-14,47l-6,1c-17.809-12.356-29.878-30.137-35-55-2.248-10.913-.721-19.858-6-27-19.193-25.965-23.381,5.285-47-4-18.263-7.179-16-40.576-21-61-34.844.307-62.6,4.911-68-27l3-42c-3.963-13.754-15.251-28.135-21-43C28.934,275.928,55.462,279.756,72,273Zm130,15c9.7,0.138,9.194,3.02,17,5l42-9c7.255-2.016,14.837,3.767,23,2v-5c5.444,0.5,7.394,3.421,10,4,4.806,1.067,6.414-2.693,12-2v4l-5,7c-35.635-5.023-68.871,10.725-99,1v-7Z"></path>
  <path id="Color_Fill_2" data-name="Color Fill 2" className={styles.svgElem2} d="M267,56l11,2c5.43,6.937,10.664,9.433,11,22,12.526-1.456,19.239,3.043,25,11q0.5,7.5,1,15c17.777-7.5,38.018-8.483,54-15,8.247-3.363,8.891-10.722,21-12l9,7q-0.5,2.5-1,5c-13.829,24.218-47.218,24.34-65,44-1.579,19.416-1.56,34.523,4,49l-6,7c10.582,27.674-.744,52.676,5,90-3.13,8.322-6.625,9.167-16,11,17.372-23.68,7.332-85.845,1-108h8c-15.964-77.29,11.007-53.685,52-82,3.5-2.415,6.175-10.782,10-14h-2V86c-8.065,2.058-8.153,8.3-14,11-20.544,9.48-44.063,12.087-66,18,0.081-9.489-2.224-19.88-6-26-5.363-1.547-9.477-1.707-16-1-2.374,6.278-5.343,7.332-6,16l11,15-2,4c-6.934-2.415-22.344,4.556-30,9l-2-2c-2.465-12.021,1.916-25.124,5-34,4.69,0.138,6.841.184,9-2l10-17c-2.5-6.6-5.478-9.674-10-14l-5,1c-2.957,5.594-28.953,72.1-18,80,7.442,3.222,21.617.385,28-1l1,2q2,17.5,4,35c-0.961,6.509-6.663,10.44-4,21,1.891,7.5,17.033,21.553,12,28l-4,3c-4.069,13.332-21.554,33.05-18,46l3,9c5.39,0.654,7.926.226,13-1l1-2c-2.17-3.892-5.534-9.413-4-14,4.671-12.783,14.191-28.088,24-36,9.054,31.425,5.859,34.39-4,60a214.172,214.172,0,0,0-37-2c-8.5-23.638,5.583-48.847,18-67-4.347-10.994-14.771-21.319-13-35l4-13q-2-12.5-4-25l-21,1-8-5C239.31,117.619,248.833,68.734,267,56Zm4,47-6,14,7,2,8-3Zm31,147c-5.92,8.769-11.961,13.03-12,28l4,7,5-1C301.511,272.957,308.055,264.172,302,250Z"></path>
  <path id="Color_Fill_1" data-name="Color Fill 1" className={styles.svgElem3} d="M228,99c11.08-.341,15.825.657,22,3,0.245,20.052-13.007,62.529-21,68-6.191,4.238-13.709,1.83-18,8,5.665,6.374,24.028,39.608,16,51-3.734,5.3-13.553,8.254-18,14,1.627,15.594,2.01,38.761,3,52l-3,3-3-1-4-2c0.769-19.388,3.922-35.093-2-51,4.614-10.5,12.158-17.7,20-25l-3-22c-3.21-7.942-13.109-12.949-17-22,9.793-3.288,24.124-10.939,28-21-2.59-8.312,16.622-24.666,18-44l-3-2c-5.726-3.958-14.379-.9-19,2-3.273,11.959-6.2,20.238-3,32l-8,7c-11.795-3.476-17.768-9.056-31-10v-3l2-3-19-16c-5.053,2.3-9.734.406-16,3-8.949,3.7-8.887,11.854-21,14q0.5,1.5,1,3c10.474,1.091,13.16,10.007,16,18l6-1c-4.9,5.081-8.313,6.948-8,15,3.717,4.746,8.78,9.507,13,14l4-2c4.636,8.925,13.917,16.693,12,30-1.94,13.467-19.847,46.1-3,60l-1,2c-8.614-.106-11.833,1.774-15,7,2.31,4.532,3.661,2.937,2,7l-2,2c-5.546-.473-6.988-1.453-10-4v-1c4.544-6.576,7.3-11.739,13-17-8.462-24.721,19.756-60.462,1-77-6.056-.478-20.295-13.362-22-21q1-7.5,2-15c-3.785-8.573-13.076-10.893-17-20,12.533-16.687,32.1-22.2,53-23,12.956,10.583,18.837,26.411,39,30C207.416,124.012,216.292,106.428,228,99Zm-35,58,19,3v1l-1,1-15,4Zm-9,91c6.219,6.066,7.917,30.077,8,41l-19-7v-1l12-1q1-2.5,2-5c-5.32-4.689-7.519-8.163-9-17Z"></path>
</svg>






      </div>
      <div className={styles.absolute2}>
     



      </div>
      <div className={styles.absolute3}>
    
      </div>
    </div>
  );
};
