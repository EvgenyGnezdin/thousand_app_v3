import styled from "styled-components";

export const TabsList = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 30px;
    padding: 10px 30px 150px 30px;
    height: 232px;
    width: 80%;
    @media (max-width: 432px) {
        column-gap: 15px;
        padding: 5px 15px 50px 15px;
        height: 132px;
    }
`