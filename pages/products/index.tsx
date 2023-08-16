import {useEffect, useState} from "react";
import Link from 'next/link';

export interface Product {
    id: number,
    name: string,
    description: string
}

export async function getProducts() {
    const result = await fetch('http://localhost:3004/products');
    const products: Product[] = await result.json();
    return products
}

export default function Products(props) {


    // const { products } = props;

    // const [products, setProducts] = useState<Products[]>([]);
    //
    // useEffect(() => {
    //     getProducts().then(products => setProducts(products));
    // }, [])

    // return (<div>
    //             <h1>Products !</h1>
    //             <ul>{products.map( (product: Product)  =>
    //                 <Link key={product.id} href={`products/${product.id}`}><li>{product.name}</li></Link>
    //             )}</ul>
    //         </ div>);

    return (<div>
        <h1>Products !</h1>
        <ul>
            <li>Product 1</li>
            <li>Product 2</li>
            <li>Product 3</li>
        </ul>
    </ div>);
};

// export async function getStaticProps(_context) {
//
//     const products = await getProducts();
//
//     console.log('running getStaticProps function for products page')
//
//     // if (!products) {
//     //     return {
//     //         redirect: {
//     //             destination: '/no-data'
//     //         }
//     //     }
//     // }
//     //
//     // if(products.length === 0) {
//     //     return {notFound: true}
//     // }
//
//     return {
//         props: {
//             products,
//             // revalidate: 10
//         }
//     }
// }
