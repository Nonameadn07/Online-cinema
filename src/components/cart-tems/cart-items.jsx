import './cart-items.css'
import { FaDeleteLeft} from 'react-icons/fa6'
import { useDispatch } from 'react-redux'
import { deleteItemsFromCart } from '../../redux/cart/cart'

export default function CartItems({ film }) {

    const dispatch = useDispatch()

    return(
        <div className='cart-item'>
            <img src={film.image} className='cart-image' alt="" />
            <div className='cart-title'>
                <span className='cart-title'>{film.title}</span>
                <div className='cart-itemPrice'>
                    <span>{film.price} сом</span>
                </div>
            </div>
            <FaDeleteLeft onClick={() => dispatch(deleteItemsFromCart(film.id))} />
        </div>
    )
}