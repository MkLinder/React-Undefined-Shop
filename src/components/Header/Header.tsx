import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi'
import * as S from "./styles"

export const Header = () => {
    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>Undefined Shop.</S.HeaderTitle>

                <S.ButtonWrapper>
                    <S.AuthButton>
                        Login
                        <FiLogIn />
                    </S.AuthButton>
                    <S.CartButton>
                        Carrinho
                        <FiShoppingCart />
                    </S.CartButton>
                </S.ButtonWrapper>
            </S.Wrapper>
        </S.StyledHeader>
    )
}