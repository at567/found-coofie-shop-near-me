import { useRouter } from "next/router";
import Link from 'next/link'
import  CoffieConisorData  from '../../data/coffee-stores.json';
import { CardCoffieShopData } from "../../dataModel/cardCoffieShopData";
import { ParsedUrlQuery } from 'querystring';

import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
  export const getStaticProps: GetStaticProps = async (context:any) => {


 


    return {
      props: {CardCoffieShopData:CoffieConisorData.find( coffieStore   => {
     return  coffieStore.id === context.params.id;
    } ) || null }, // will be passed to the page component as props
    }
  };
  export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [{ params: { id: '0' } }, { params: { id: '1' } }],
        fallback: false, // can also be true or 'blocking'
      }
    
  };
interface CoffeStoreProps {
CardCoffieShopData:CardCoffieShopData
} 
const CoffeeStore:React.FC<CoffeStoreProps> = (({CardCoffieShopData}) => {
const router = useRouter();

console.log("router",CardCoffieShopData);
return (
<div>
coffee store page {router.query.id}
<Link href="/">Back To Home</Link>ssssss
<p>{CardCoffieShopData.address}</p>
<p>{CardCoffieShopData.name}</p>
<p>{"aaaaaa"}</p>
</div>
);


})

export default CoffeeStore;