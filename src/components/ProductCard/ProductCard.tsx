import * as S from './styles';
import { FiShoppingCart } from 'react-icons/fi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';
import { addProduct, removeProduct } from '../../redux/Cart/cart-slice';

export interface IProduct {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: { rate: number, count: number}
}

interface IProductCardProps {
    product: IProduct
}

export const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
    const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)
    const dispatch = useDispatch()

    const isProductOnCart = cart.find((productOnCart) => product.id === productOnCart.id) !== undefined

    function handleAddProductToCart(){
        // despachar a action de adicionar o produto ao carrinho
        dispatch(addProduct(product))
    }

    function handleRemoveProductFromCart() {
        dispatch(removeProduct(product))
    }

    return (
        <S.Card>
            <S.ProductImage src={product.image} alt={product.description} />

            <S.ProductTitle>{ product.title }</S.ProductTitle>

            <S.ReviewPriceContainer>
                <S.Review>
                    { Array.from({ length: 5}).map((_, index) => index < Math.round(product.rating.rate) ? <AiFillStar key={index}/> : <AiOutlineStar key={index} />)}
                    {`(${product.rating.rate})`}
                </S.Review>

                <S.Price>{`$${ product.price }`}</S.Price>
            </S.ReviewPriceContainer>

            <S.AddToCartButtonWrapper>
                { isProductOnCart ? (
                    <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
                    Remover do carrinho
                    <FiShoppingCart />
                </S.RemoveFromCartButton>
                ) : (
                    <S.AddToCartButton onClick={handleAddProductToCart}>
                    Adicionar ao carrinho
                    <FiShoppingCart />
                </S.AddToCartButton>
                )}
            </S.AddToCartButtonWrapper>
        </S.Card>
    )
}