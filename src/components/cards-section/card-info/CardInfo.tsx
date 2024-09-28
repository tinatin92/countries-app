import classes from './CardInfo.module.css'
import { PropsWithChildren } from 'react';

const CardInfo:React.FC<PropsWithChildren> = ({children}) => {

    return (
        <div className={classes.info}>{children}</div>
    )
}

export default CardInfo