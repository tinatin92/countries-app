/* import { PropsWithChildren } from 'react' */
import classes from './H1.module.css'

export const H1:React.FC<{heading : string}>= ({heading}) =>{
  return <h1 className={classes.h1}>{heading}</h1>
}




