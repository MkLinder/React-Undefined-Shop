import * as S from './styles';
import { FiShoppingCart } from 'react-icons/fi';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export interface IProduct {
    id: string
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
                <S.AddToCartButton>
                    Adicionar ao carrinho
                    <FiShoppingCart />
                </S.AddToCartButton>
            </S.AddToCartButtonWrapper>
        </S.Card>
    )
}