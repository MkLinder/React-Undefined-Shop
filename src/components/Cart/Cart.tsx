import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';
import { BsTrash } from 'react-icons/bs';
import * as S from './styles';
import { removeProduct } from '../../redux/Cart/cart-slice';

interface ICartProps {
    showCart: boolean;
}

export const Cart: React.FC<ICartProps> = ({ showCart}) => {
    const dispatch = useDispatch()

    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)

    const total = cart.reduce((totalCart, product) => {
        return totalCart + product.price
    }, 0)


    return (
        <S.Container showCart={ showCart }>
            <S.Title>Carrinho</S.Title>
        
            <S.CartProductsList>
                { cart.map((product) => (
                    <S.CartProductItem key={product.id}>
                        <S.ProductOnCartDescription>
                            {product.title}
                        </S.ProductOnCartDescription>
                        <S.ProductPrice>
                            ${product.price}
                        </S.ProductPrice>
                        <S.RemoveProductCartButton onClick={
                                function handleRemoveProductFromCart() {
                                    dispatch(removeProduct(product))
                                }
                        }>
                            <BsTrash />
                        </S.RemoveProductCartButton>
                    </S.CartProductItem>
               )) }
            </S.CartProductsList>

            <S.CartTotal>Total: ${total}</S.CartTotal>
        </S.Container>
    )
}