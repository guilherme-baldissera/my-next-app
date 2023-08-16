import {getProducts, Product} from "../index";

export async function getProductById(id: string) {
    const result = await fetch(`http://localhost:3004/products/${id}`);
    const product: Product = await result.json();
    return product
}

export default function ProductsDetailPage(props) {


    const { product } = props;

    return (<div>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
            </ div>);
};

export async function getStaticPaths() {

    // const products = await getProducts();
    // products.map(product => ( { params : { pid: product.id } })),

    return {
        paths:
            [
                { params: { pid: '1'} },
                { params: { pid: '2'} },
                { params: { pid: '3'} },
            ],
        fallback: 'blocking' //false, true or blocking
    }
}

export async function getStaticProps(context) {


    const productId = context.params?.pid;
    const product = await getProductById(productId);

    console.log(`running getStaticProps function for product ${productId}`)


    if(!product) {
        return { notFound: true }
    }

    return {
        props: {
            product,
        }
    }
}

// export async function getServerSideProps(context) {
//
//
//     // here you also have access to req and res
//     // you could extract info from the request, set up header in the response
//     // console.log(context.req, context.res);
//
//     const productId = context.params?.pid;
//     const product = await getProductById(productId);
//
//     console.log(`running getServerSideProps function for product ${productId}`)
//
//
//     if(!product) {
//         return { notFound: true }
//     }
//
//     return {
//         props: {
//             product,
//         }
//     }
// }