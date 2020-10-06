import styled from 'styled-components'
import { Button } from '../CardsList/styled';

export const Wraper = styled.div`
    width: 60%;
    display: inline-block;
`;

export const Input = styled.input`
    width: 60%;
    height: 30px;
    border: 1px solid darkgray;
    border-radius: 10px;
    padding-left: 10px;
    outline: none;
`;

export const SearchButton = styled(Button)`
    float: right;
`;