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
<h2>{name}</h2>
<Image  alt="Coffie shop" src={imgUrl} width={260} height={160} />
</Link>);
};

export default Card;