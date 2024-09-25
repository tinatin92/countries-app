import { PropsWithChildren } from 'react';
import classes from './Card.module.css'


const Card:React.FC<PropsWithChildren> = ({children}) => {

    return <div className={classes['country-box']}>{children}</div>
    
}

export default Card