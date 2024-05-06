import Button from '../button/button'
import CartItems from '../cart-tems/cart-items'
import { calcTotalPrice } from '../utils'
import './cart-menu.css'

export default function CartMenu({ items, handleClick }) {
    return (
        <div className='cart-menu'>
            <div className='cart-menu__film-list'>
                {
                    items.length > 0 ? items.map(film => <CartItems film={film} />) : "Корзина пуста"
                }
                {
                    items.length > 0 ? (
                        <div className='cart-modal__total-price'>
                            <div>
                                <span>Итого :</span>
                                <span>{calcTotalPrice(items)} сом</span>
                            </div>
                            <Button onClick={handleClick} type="primary" size='m'>
                                Оформить заказ
                            </Button>
                        </div>

                    ) : ""
                }
            </div>
        </div>
    )
}