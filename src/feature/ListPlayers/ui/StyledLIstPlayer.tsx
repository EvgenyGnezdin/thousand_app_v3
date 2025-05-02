import styled from "styled-components";

export const ListPlayersContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    row-gap: 10px;
    height: calc(100vh - 328px);
    width: 100%;
    padding: 50px 30px 50px 30px;
    @media (max-width: 500px) {
        padding: 25px 20px 25px 20px;
    }
`
export const ListPlayersItems = styled.div`
    border-radius: 14px;
    width: 80%;
    display: flex;
    justify-content: space-between;
    border: 1px solid rgba(188, 195, 208, 0.5);
    border-radius: 14px;
    align-items: center;
    padding: 15px 25px 15px 25px;
    transition: box-shadow 0.2s ease-in;
    &:hover {
        box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .08), 0 0 16px 0 rgba(0, 0, 0, .08);
    }
    @media (max-width: 500px) {
        padding: 10px 8px 10px 8px;
        width: 100%;
    }
`