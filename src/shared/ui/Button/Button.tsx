import styled from "styled-components";
import { Tabs } from "./ButtonProps";

export const Button = styled.button<Tabs>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => props.width ? props.width : 200}px;
    height: ${props => props.height ? props.height : 72}px;
    cursor: pointer;
    padding: 0 10px;
    border-radius: 30px;
    border: ${props => props.activetab == 'true'? 'none' : '1px solid #2563eb'};
    background-color: ${props => props.activetab == 'true' ? '#2563eb' : 'transparent'};
    color: ${props => props.activetab == 'true'? '#fff' : '#2563eb'};
    font-size: 18px;
    font-weight: 600;
    @media(max-width: 768px) {
        width: ${props => props.width ? props.width : 150}px;
        height: ${props => props.height ? props.height : 50}px;
        font-size: 14px;
        border-radius: 16px;
    }
    @media(max-width: 576px) {
        width: ${props => props.width ? props.width : 100}px;
        
    }
`


