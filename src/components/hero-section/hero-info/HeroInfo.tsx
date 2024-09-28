import { PropsWithChildren } from 'react';
import classes from './HeroInfo.module.css'



const HeroInfo: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={classes['hero-section__info']}>
       {children}
    </div>
  );
};

export default HeroInfo