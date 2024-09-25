import classes from './HeroInfo.module.css'



const HeroInfo: React.FC<{title: string, text: string}> = ({title, text}) => {
  return (
    <div className={classes['hero-section__info']}>
      <h1>{title}</h1>
      <div>{text}</div>
    </div>
  );
};

export default HeroInfo