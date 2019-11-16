import styled from 'styled-components';

export const ListElement = styled.div`
    background-color: #F5F5FF;
    padding: 0.5em 1em;
    border-top: 1px solid #E0E0F4;
    border-bottom: 1px solid #E0E0F4;
`

export const Footer = styled.footer`
    align-items: center;
    justify-content: space-between;
    display: flex;
    padding: 0.5em;
    font-size: 0.8em;
    margin: 1em;
`

export const Fallback = styled.div`
    min-height: 160px;
    line-height: 160px;
    text-align: center;
    font-weight: ${props => props.error ? "bold" : "normal"};
`