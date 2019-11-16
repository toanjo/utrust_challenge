import styled from 'styled-components';

export const Balance = styled.span`
    font-weight:bold;
    float:right;
`

export const Address = styled.span`
    cursor: copy;
    font-size: 0.85em;
    font-weight: 400;
`

export const Item = styled.div`
    background-color: #F5F5FF;
    padding: 1em;
    display: block;
    border-bottom: 1px solid #E0E0F4;
    &:last-child {
        border-bottom: none;
    }
`