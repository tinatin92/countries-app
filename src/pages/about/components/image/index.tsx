import classes from "./index.module.css";

const AboutImage: React.FC<{ title: string; image: string }> = ({
  title,
  image,
}) => {
  return (
    <div className={classes.image}>
      <img src={image} alt={title} />
    </div>
  );
};
export default AboutImage;
