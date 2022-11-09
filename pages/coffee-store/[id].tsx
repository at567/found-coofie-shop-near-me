import { useRouter } from "next/router";
import Link from 'next/link'

const CoffeeStore = () => {
const router = useRouter();
console.log("router",router);
return (
<div>
coffee store page {router.query.id}
<Link href="/">Back To Home</Link>
</div>
);


}

export default CoffeeStore;