import classes from './CardImage.module.css'
import { PropsWithChildren } from 'react'


export const CardImage :React.FC<PropsWithChildren> = ({children}) =>{
 
    return (
        <div className={classes.image}>
             {children}
            </div>
    )
}

