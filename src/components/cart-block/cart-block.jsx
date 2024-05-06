import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BiCartAlt } from 'react-icons/bi'
import ItemsInCart from "../items-cart/items-cart";
import CartMenu from "../cart-menu/cart-menu";


export default function CartBlock() {

    const [modal, setModal] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/order')
        setModal(false)
    }

    return (
        <div className="cart-block">
            <ItemsInCart count={items.length} />
            <BiCartAlt className='cartBlock-icon' size={40} onClick={() => setModal(!modal)} />
            {modal && <CartMenu items={items} handleClick={handleClick} />}
        </div>
    )
}

