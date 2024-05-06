import { useSelector } from 'react-redux'
import './order-page.css'
import { calcTotalPrice } from '../../components/utils'
import OrderItem from '../../components/order-items/order-item'

export default function OrderPage() {

    const items = useSelector(state => state.cart.itemsInCart)

    if(items.lendth < 1){
        return <h1 className='order-not'>Ваша корзина пуста</h1>
    }

    return (
        <div className='order-page'>
            <div className='order-page_left'>
                {items.map(film => <OrderItem film={film} /> )}
            </div>
            <div className='order-page__right'>
                <span>{items.lendth} товаров на сумму {calcTotalPrice(items)} сом</span>
                <button className='buy-btn'>Купить</button>
            </div>
        </div>
    )
}