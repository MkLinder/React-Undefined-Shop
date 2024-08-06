import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    top: 0px;
    right: 0px;
    left: 0px;
    
    background-color: navy;
    box-shadow: 0px 0px 3px 2px #0000006b;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 1024px;
    height: 60px;
    margin: 0 auto;
    padding: 0 2rem;
`

export const HeaderTitle = styled.h1`
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 500;
`

export const ButtonWrapper = styled.div`
    display: flex;
    gap: 1rem;
`
interface AuthButtonProps {
    isLogged: boolean;
}
export const AuthButton = styled.button<AuthButtonProps>`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 1rem;
    background-color: ${(props) => (props.isLogged ? "red" : "green")};
    color: #ffffff;
    font-size: 0.75rem;

    display: flex;
    align-items: center;
    gap: 0.3rem;

    svg{
        font-size: 0.75rem;
    }
`

export const CartButton = styled.button`
    border: none;
    border-radius: 5px;
    height: 30px;
    padding: 0 1rem;
    background-color: violet;
    color: #000000;

    display: flex;
    align-items: center;
    gap: 0.3rem;

    svg{
        font-size: 0.75rem;
    }
`
