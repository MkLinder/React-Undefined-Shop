import styled from "styled-components";

interface IContainerProps {
    showCart: boolean;
}

export const Container = styled.aside<IContainerProps>`
    position: fixed;
    top: 0;
    right: ${(props) => props.showCart ? '0' : '-350px'};

    width: 350px;
    height: 100vh;
    padding: 2rem;

    background-color: #ffffff;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.25);

    transition: right 0.5s;
`;

export const Title = styled.h1``;

export const CartProductsList = styled.ul`
    padding: 2rem 0;
    list-style: none;

    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const CartProductItem = styled.li`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const ProductOnCartDescription = styled.strong`

`;

export const ProductPrice = styled.p``;

export const RemoveProductCartButton = styled.button`
    width: 20%;
    font-size: 1rem;
    font-weight: 600;
    border: none;

    color: red;
    background-color: transparent;
`;

export const CartTotal = styled.strong``;