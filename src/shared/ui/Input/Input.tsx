import styled from "styled-components";

export const Input = styled.input`
    cursor: pointer;
    width: 100%;
    height: 50px;
    padding: 0 40px;
    border: 1px solid rgb(242 243 247);
    border-radius: 16px;
    background-color: #f2f3f7;
    transition: border 0.2s;
    font-weight: 400;
    font-size: 20px;
    color: #1d2023;
    &::placeholder {
        font-weight: 400;
        font-size: 1.0625rem;
    }
    &:hover {
        border: 0.5px solid #000;
    }
    // &:focus {
    //     border: 0.5px solid #2563eb;
    // }
`