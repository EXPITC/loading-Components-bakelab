import React from 'react';
import styles from '../Loading.style.module.css';
import { props } from '../index'

function Blob({ theme, isLoading }: props) {

  return (
    <div className={styles.svgContainer} style={{backgroundColor:theme === 'dark'? '#021722' : '#083c56'}}>
      <svg
        id='visual'
        viewBox='-30 0 960 540'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        version='1.1'
      >
        <path className={styles.blob} fill='#e2b783'>
          <animate
            attributeName='d'
            dur='7s'
            repeatCount='indefinite'
            values='M129 -65.6C161.1 -19 176.7 46 152.4 94.8C128.2 143.7 64.1 176.3 -6.9 180.3C-77.9 184.3 -155.9 159.7 -180.1 110.8C-204.4 62 -174.9 -11 -136 -61.6C-97 -112.3 -48.5 -140.5 0 -140.5C48.5 -140.5 97 -112.3 129 -65.6;
           M133.5 -80.4C169.6 -14.6 193.1 55.2 168.7 109.3C144.3 163.3 72.2 201.7 5.5 198.5C-61.2 195.3 -122.4 150.7 -151.7 93.8C-181 36.8 -178.4 -32.3 -147.8 -95C-117.2 -157.7 -58.6 -213.8 -4.9 -211C48.7 -208.1 97.4 -146.3 133.5 -80.4;
           M180.2 -105.9C204.6 -61.9 175.4 11.3 136.4 64.9C97.4 118.6 48.7 152.8 -1.2 153.5C-51.1 154.2 -102.2 121.3 -127.2 75.8C-152.1 30.2 -151 -28.2 -125.4 -72.9C-99.9 -117.7 -49.9 -148.8 14 -156.9C77.9 -165 155.9 -150 180.2 -105.9;
           M129 -65.6C161.1 -19 176.7 46 152.4 94.8C128.2 143.7 64.1 176.3 -6.9 180.3C-77.9 184.3 -155.9 159.7 -180.1 110.8C-204.4 62 -174.9 -11 -136 -61.6C-97 -112.3 -48.5 -140.5 0 -140.5C48.5 -140.5 97 -112.3 129 -65.6;
          '
          />
        </path>
      </svg>
    </div>
  );
}

export default Blob;
