import classes from "./ShareBar.module.css";
import facebookIcon from "@/assets/facebook.svg";
import instagramIcon from "@/assets/instagram.svg";
import twitterIcon from "@/assets/twitter.svg";

import { Link } from "react-router-dom";

const ShareBar: React.FC = () => {
  return (
    <div className={classes["share-bar"]}>
      <div className={classes.share}>
        <Link to="#">
          <img src={facebookIcon} alt="facebook" />
        </Link>
        <Link to="#">
          <img src={instagramIcon} alt="instagram" />
        </Link>
        <Link to="#">
          <img src={twitterIcon} alt="twitter" />
        </Link>
      </div>
    </div>
  );
};

export default ShareBar;
