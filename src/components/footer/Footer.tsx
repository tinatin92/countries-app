
import classes from './Footer.module.css'
import Container from '../UI/container/Container'
import footerLogo from '@/assets/Frame 44.svg'

const Footer :React.FC = () =>{

    return (
        <footer className={classes.footer}>
            <Container>
                <div>
                    <img src={footerLogo} alt="footerLogo" />
                </div>

            </Container>
        </footer>
    )
}

export default Footer