import classes from "./index.module.css";

const About: React.FC<{
  
  title: string;
  description: string;
}> = ({ title, description }) => {
  return (
    <div className={classes.description}>
    <h1>{title}</h1>
    <div>{description}</div>
    
  </div>
    
  );
};

export default About;
