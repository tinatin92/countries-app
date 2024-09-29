import classes from "./Footer.module.css";
import { Container } from "../UI/container";
import footerLogo from "@/assets/Frame 44.svg";

export const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <div>
          <img src={footerLogo} alt="footerLogo" />
        </div>
      </Container>
    </footer>
  );
};
