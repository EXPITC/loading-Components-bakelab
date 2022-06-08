import { useEffect, useState } from 'react';
import styles from '../Loading.style.module.css';
import { props } from '../index';
interface theme {
  opacity: number,
  color: string
}

export default function TextAndLoad({ text, isLoading, theme }: props) {
  const loadingType = typeof isLoading === 'boolean' ? true : false;
  const [show, setShow] = useState<boolean>(false);
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    const timeFrame = (): void => {
      switch (count) {
        case 0:
          setShow(true);
          break;
        case 1:
          setShow(false);
          break;
        case 2:
          setShow(true);
          break;
        case 4:
          setShow(false);
          break;
        case 5:
          setShow(true);
          break;
        case 6:
          setShow(false);
          break;
        default:
          setShow(true);
          break;
      }
    };
    timeFrame(); //check count and change show value depends to the number

    // timeout role like clock ,change count with 1ms value per change
    let timeout: ReturnType<typeof setTimeout>;
    timeout = setTimeout(() => {
      if (count <= 60) return setCount(count + 1);
      setCount(0);
    }, 100);

    // unMount
    return () => clearTimeout(timeout);
  }, [count]);
  const process = () => {
    // if (!loadingType) return; can't use this seem typescript don't understand;
    // create new checking type again
    const maxVW = 50; 
    const percent = 100;
    if (typeof isLoading != 'number') return 0
    if(isLoading >= percent) return maxVW
    return isLoading / percent * maxVW;
  }

  const colorTheme = ():theme => {
    return {
      opacity: show ? 1 : 0,
      color: theme === 'dark' ? '#021722' : '#083c56',
  };
  }
  return (
    <div className={styles.kindGreet} >
      <h1 style={colorTheme()}>Please</h1>
      <h1 style={colorTheme()}>Wait.</h1>
      <div className={styles.load}>
        <h2>{text}</h2>
        <span className={loadingType ? styles.booleanType : null} style={{width: `${process()}vw`}} />
      </div>
    </div>
  );
}
