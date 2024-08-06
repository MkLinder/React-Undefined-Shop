import styled from "styled-components";

export const Container = styled.main`
    max-width: 1024px;
    margin: 6rem auto 4rem auto;
    padding: 0 2rem;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: stretch;
    gap: 1rem;

    & > * {
        flex: 1 300px;
    }
`