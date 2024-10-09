
import classes from './index.module.css'

const SortButton:React.FC<{onClick: () => void}> = ({onClick}) =>{
    return <button onClick={onClick} className={classes.button}>Sort by likes</button>
}

export default SortButton