
import classes from './Row.module.css'
import React, { PropsWithChildren } from 'react'

interface RowProps extends PropsWithChildren {
    className?: string; 
  }

export const Row :React.FC<RowProps> = ({children, className}) =>{

  const  classe = `${classes.flex} ${className}`

    return <div className={classe}>{children}</div>
}

