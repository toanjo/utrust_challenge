import styled from 'styled-components';

export const Form = styled.div`
    padding: 2em 2em 0em 2em;
    border-top: 1px solid #E0E0F4;
    background: #F5F5FF;
`
export const Label = styled.label`
    font-size: 0.8em;
    padding: 0.5em;
    display: inline-block;
`

export const Input = styled.input`
    background: #FFFFFF;
    border: 1px solid #6932D4;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 0 0.5em;
    margin-bottom: 1em;
    font-size: 0.9em;
    &:focus{
        outline: none;
    }
    &:last-child {
        margin-bottom: none;
    }
    font-weight: ${props => props.bold ? "bold" : "normal"};
    &::placeholder {
        font-weight: normal;
    }
`
export const Footer = styled.footer`
    align-items: center;
    padding: 1em 1.5em;
    background: #F5F5FF;
    display: flex;
    flex-direction: row-reverse;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`
