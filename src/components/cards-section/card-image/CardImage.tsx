import classes from './CardImage.module.css'


const CardImage :React.FC<{image: string}> = ({image}) =>{
 
    return (
        <div className={classes.image}>
              <img src={image} alt="" />
            </div>
    )
}

export default CardImage