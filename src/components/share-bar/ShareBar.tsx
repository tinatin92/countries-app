import classes from './ShareBar.module.css'
import facebookIcon from "@/assets/facebook.svg";
import instagramIcon from "@/assets/instagram.svg";
import twitterIcon from "@/assets/twitter.svg";


const ShareBar: React.FC = () =>{
    return (
        <div className={classes['share-bar']}>
        <div className={classes.share}>
          <a href="#">
            <img src={facebookIcon} alt="facebook" />
          </a>
          <a href="#">
            <img src={instagramIcon} alt="instagram" />
          </a>
          <a href="#">
            <img src={twitterIcon} alt="twitter" />
          </a>
        </div>
      </div>
    )
}

export default ShareBar