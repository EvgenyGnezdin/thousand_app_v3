import styled from "styled-components";

export const ListPlayersContainer = styled.div`
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    row-gap: 20px;
    height: calc(100vh - 328px);
    width: 100%;
    padding: 50px 30px 50px 30px;
    overflow: hidden;
    overflow-y: scroll;
`
export const ListPlayersItems = styled.div`
    border-radius: 16px;
    box-shadow: 0 4px 16px 0 rgba(0, 0, 0, .08), 0 0 16px 0 rgba(0, 0, 0, .08);
    border: 1px solid rgba(188, 195, 208, .5);
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 15px 15px 30px;
`