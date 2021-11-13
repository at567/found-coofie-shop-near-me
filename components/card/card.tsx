import styles from "./card.module.css";
import Image from 'next/image';
import Link from "next/link";

interface CardProps {
name:string,
imgUrl:string,
href:string
} 

const Card:React.FC<CardProps> = ({name,imgUrl,href}) => {
return (
<Link href={href} > 
<a className={styles.cardLink} >
<div className={styles.container}>
<div className={styles.cardHeaderWrapper} >    
<h2 className={styles.cardHeader} >{name}</h2>
<div className={styles.cardImageWrapper} >
<Image className={styles.cardImage}  alt="Coffie shop" src={imgUrl} width={260} height={160} />
</div>
</div>
</div>
</a>
</Link>);
};

export default Card;