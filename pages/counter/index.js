import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '@/store/counterSlice'
import Image from 'next/image'
import Link from 'next/link'

const index = () => {
    const [product, setProduct] = useState([])
    const myProduct = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    const getProductData = () => {
        axios.get('https://fakestoreapi.com/products').then(res => {
            setProduct(res.data)
        })
    }
    useEffect(() => {
        getProductData();
    }, [])

    const handleClick = (itemDetails) => {
        dispatch(setProducts(itemDetails));
    }
    console.log("selected product", myProduct);

    return (
        <>
            <Link href={'/counter/CartItem'}>Cart Items</Link>
            <h2>cart: {myProduct.cart.length}</h2>
            <div style={{ display: "flex", flexWrap: 'wrap', gap: "10px" }}>
                {product &&
                    product.map(item => (
                        <div key={item.id} style={{ border: '1px solid black' }}>
                            <div className='image-div'>
                                <Image src={item.image} width={200} height={200} alt='aa' />
                            </div>
                            <div>
                                <h6 style={{ width: "120px" }}>{item.title}</h6>
                            </div>
                            <div>
                                <button onClick={() => handleClick(item)}>Add to cart</button>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    )
}

export default index;