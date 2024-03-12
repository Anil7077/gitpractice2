import React from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';

const myItem = ({ pData }) => {
    const router = useRouter()
    const itemNo = router.query.itemNo;
    console.log(itemNo);
    console.log(pData);
    return (
        <>
            <h1 style={{textAlign: "center"}}>Everything about the product</h1>
            <div className='prod-description'>
                <div className='product-image'>
                    <Image src={pData.image} alt="aa" width={200} height={200} />
                </div>
                <div className='about-product'>
                    <h1>{pData.title}</h1>
                    <p>{pData.description}</p>
                    <h4>Price: {pData.price}</h4>

                </div>
            </div>
        </>
    )
}

export default myItem;

export const getServerSideProps = async (context) => {
    const { query } = context;
    const itemNo = query.itemNo;
    const res = await fetch(`https://fakestoreapi.com/products/${itemNo}`)
    const pData = await res.json()
    return {
        props: { pData }
    }
}