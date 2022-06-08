import { useEffect} from 'react';
import styles from './Loading.style.module.css';
import Blob from './asset/blob';
import lottie from 'lottie-web/build/player/lottie_light';
import chefPrepare from './asset/chef-preparing-food.json';
import TextAndLoad from './asset/textAndLoad';


export interface props {
  text?: string; 
  theme?: 'light' | 'dark'; // by default light | lowercase
  isLoading?: boolean | number; // by default boolean:true, limit number values 100 above 100 will be ignored;
}

// default values for props
const def = {
  text: 'Our staff is prepare best Ingredients to serve~',
  theme: 'light', // idk why seems typescript convert string twice to check
  isLoading: false
};

/**
 * @typedef {Object<string, any>} Props
 * @property {string} text text have by default but you can change with urs
 * @property {string} theme by default light | lowercase
 * @property { boolean | number } isLoading by default boolean:true, limit number values 100 above 100 will be ignored;
 */
const Loading = ({
  text = def.text,
  theme = 'light',
  isLoading = def.isLoading,
}: props): React.ReactElement => {
  // theme = theme.toLowerCase() // same here typescript seems convert string twice I can't make validation here
  
  // validation
  text = typeof text != 'string' ? def.text : text;
  theme = typeof theme != 'string' ? 'light' : theme;
  isLoading = typeof isLoading != ('number' || 'boolean') ? def.isLoading : isLoading;

  // chef-prepare animation
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector('#chef-prepare')!,
      animationData: chefPrepare,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
    
    return lottie.destroy
  }, []);
  
  return (
    <div className={styles.Wrapper}>
      <TextAndLoad text={text} isLoading={isLoading} theme={theme} />
      <div id='chef-prepare' className={styles.chefPrepare} />
      <Blob theme={theme} isLoading={isLoading}/>
    </div>
  );
};

export default Loading;
