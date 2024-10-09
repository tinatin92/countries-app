import classes from "./index.module.css";
import likeImage from "@/assets/svgexport-15 (3).svg";

const LikeBox: React.FC<{ like: number, onClick : () => void }> = ({ like, onClick }) => {
  return (
    <div className={classes["like-box"]}>
      <div className={classes.num}>
        <div>Like:</div>
        <div>{like}</div>
      </div>
      <div className={classes.button}>
        <button onClick={onClick}>
          <img src={likeImage} alt="Like button" />
        </button>
      </div>
    </div>
  );
};

export default LikeBox;
