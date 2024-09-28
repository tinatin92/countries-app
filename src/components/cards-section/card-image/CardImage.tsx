import classes from './CardImage.module.css'
import { PropsWithChildren } from 'react'


const CardImage :React.FC<PropsWithChildren> = ({children}) =>{
 
    return (
        <div className={classes.image}>
             {children}
            </div>
    )
}

export default CardImage