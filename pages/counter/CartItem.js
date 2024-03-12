import Link from 'next/link'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '@/store/counterSlice'

const CartItem = () => {
    const myProduct = useSelector((state) => state.counter)
    const selectedItems = myProduct.cart;
    console.log(myProduct.cart);
    const dispatch = useDispatch()

    const handleClick = (itemsId) => {
        // console.log(itemsId.id);
        dispatch(remove(itemsId.id))
    }
    return (
        <>
            <Link href={'/counter'}>products</Link>
            {selectedItems &&
                selectedItems.map(item => (
                    <>
                        <div style={{ display: 'flex' }}>
                            <h5>{item.title}</h5>
                            <button onClick={() => handleClick(item)}>X</button>
                        </div>
                    </>
                ))}
        </>
    )
}

export default CartItem;