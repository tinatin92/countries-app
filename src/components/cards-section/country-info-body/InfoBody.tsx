
import classes from './InfoBody.module.css'
import { PropsWithChildren } from 'react'

const InfoBody:React.FC<PropsWithChildren> = ({children}) =>{

    return <div className={classes['countrie-info']}>{children}</div>
}

export default InfoBody