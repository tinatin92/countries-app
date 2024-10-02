
import classes from './InfoBody.module.css'
import { PropsWithChildren } from 'react'

export const InfoBody:React.FC<PropsWithChildren> = ({children}) =>{

    return <div className={classes['countrie-info']}>{children}</div>
}

