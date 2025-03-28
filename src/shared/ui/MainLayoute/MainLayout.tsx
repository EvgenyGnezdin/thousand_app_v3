import { Outlet } from "react-router-dom";
import { Tabs } from "../../../featers/Tabs/ui/Tabs";
import styled from "styled-components";

const MainLayouteContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    row-gap: 80px;
    width: 100%;
    height: 100vh;
`

export const MainLayoute = () => {
    return (
        <MainLayouteContainer>
            <Outlet/>
            <Tabs/>
        </MainLayouteContainer>
    );
};

