
import styles from './banner.module.css';


interface BannerProps {
buttonText:string;
handleOnClick: () => void;
} 

 const  Banner:React.FC<BannerProps> = ({buttonText,handleOnClick}) =>  {
  return (
    <div className={styles.container} >
    <h1 className={styles.title} >
      <span className={styles.title1} >Coffie</span>
    <span className={styles.title2} >Connisseur</span>
     </h1>
    <p className={styles.subTitle} >Discover Your Local Coffie Shop</p>
    <div className={styles.buttonWrapper} ></div>    
    <button className={styles.button} onClick={handleOnClick} >{buttonText}</button>
  

    </div>
  )
}
export default Banner;