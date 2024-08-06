import * as S from "./styles"
import { useState } from 'react'
import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi'
import { Cart } from '../Cart/Cart'
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../redux/root-reducer"
import { login, logout } from "../../redux/User/user-slice"

export const Header = () => {
    const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer)
    console.log(user);

    const dispatch = useDispatch()
    
    const [ showCart, setShowCart ] = useState(false)
    const isLogged = user !== null

    function handleUserAuth() {
        // Usuário não está logado:
        if (user === null) {
            dispatch(login({
                name: 'Mike Linder',
                email: 'mike@email.com',
            }))

            // !Forma antiga de fazer o dispatch()
            // //despachar a action de login
            // dispatch({
            //     type: 'user/login',
            //     payload: {
            //         name: 'Mike Linder',
            //         email: 'mike@email.com',
            //     },
            //});
        }else {
            dispatch(logout({}))
        }
    }
    console.log(user);
    

    return (
        <S.StyledHeader>
            <S.Wrapper>
                <S.HeaderTitle>Undefined Shop.</S.HeaderTitle>

                <S.ButtonWrapper>
                    <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
                        { isLogged ? 'Logout' : 'Login'}
                        { isLogged ? <FiLogOut /> : <FiLogIn />}
                    </S.AuthButton>
                    <S.CartButton onClick={() => setShowCart(!showCart)}>
                        Carrinho
                        <FiShoppingCart />
                    </S.CartButton>
                </S.ButtonWrapper>
            </S.Wrapper>
            <Cart showCart={showCart} />
        </S.StyledHeader>
    )
}