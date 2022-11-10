import styles from "./card.module.css";
import Image from 'next/image';
import Link from "next/link";
import cls from "classnames";
interface CardProps {
name:string,
imgUrl:string,
href:string,
className:string
} 

const Card:React.FC<CardProps> = ({name,imgUrl,href}) => {
return (
<Link href={href} > 
<div  className={styles.cardLink} >
<div className={cls("glass",styles.container) }>
<div className={styles.cardHeaderWrapper} >    
<h2 className={styles.cardHeader} >{name}</h2>
<div className={styles.cardImageWrapper} >
<Image className={styles.cardImage}  alt="Coffie shop" src={imgUrl} width={260} height={160} />
</div>
</div>
</div>
</div>
</Link>);
};

export default Card;