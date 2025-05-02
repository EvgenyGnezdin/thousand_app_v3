import styled from "styled-components";
import { Tabs } from "./ButtonProps";

export const Button = styled.button<Tabs>`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 14px 20px;
    border-radius: 14px;
    border: none;
    background-color: ${props => props.activetab == 'true' ? '#2563eb' : 'transparent'};
    color: ${props => props.activetab == 'true'? '#fff' : '#2563eb'};
    font-size: 14px;
    font-weight: 600;
    @media(max-width: 768px) {
        font-size: 12px;
    }
`


