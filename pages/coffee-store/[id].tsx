import { useRouter } from "next/router";
import Link from 'next/link'
import  CoffieConisorData  from '../../data/coffee-stores.json';
import { CardCoffieShopData } from "../../dataModel/cardCoffieShopData";
import { ParsedUrlQuery } from 'querystring';
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/coffie-store.module.css";
import cls from "classnames";

interface CoffeStoreProps {
  CardCoffieShopData:CardCoffieShopData
  } 
export const getStaticProps: GetStaticProps = async (context:any) => {
   return {
      props: {CardCoffieShopData:CoffieConisorData.find( coffieStore   => {
     return  coffieStore.id === context.params.id;
    } ) || null }, // will be passed to the page component as props
    }
  };
  export const getStaticPaths: GetStaticPaths = async () => {
   const paths = CoffieConisorData.map(CoffeeStore => {
    return {
    params: {
      id:CoffeeStore.id,
    } 
    }  
   });
 
   return {
   paths,
   fallback: true, // can also be true or 'blocking'
   }
    
  };

const CoffeeStore:React.FC<CoffeStoreProps> = (({CardCoffieShopData}) => {
const router = useRouter();
if(router.isFallback){
return <div>Loading....</div>;
}



console.log("router",CardCoffieShopData);
return (
<div className={styles.layout} >
<Head>
<title>{CardCoffieShopData.name}</title>  
</Head>
<div className={styles.cointainer} >
<div className={styles.col1} >
<div className={styles.backToHome} >  
<Link href="/">Back To Home</Link>
</div>
<p>{CardCoffieShopData.address}</p>
</div>
<div className={styles.col2} >
<div className={styles.nameWrapper} >  
<h1 className={styles.name}  >{CardCoffieShopData.name}</h1>
</div>
<Image  src={CardCoffieShopData.imgUrl}  width={600} height={300} className={styles.storeImg} alt={CardCoffieShopData.name} />
<p>{CardCoffieShopData.neighbourhood}</p>
</div>
</div>
</div>
);


})

export default CoffeeStore;