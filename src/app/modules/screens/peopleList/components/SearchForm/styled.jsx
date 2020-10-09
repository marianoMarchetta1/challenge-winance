import styled from 'styled-components'
import { Button } from '../CardsList/styled';

export const Wrapper = styled.div`
    width: 60%;
    display: inline-block;
`;

export const Input = styled.input`
    width: 80%;
    height: 30px;
    border: 1px solid darkgray;
    padding-left: 10px;
    outline: none;
    border-right: 0px;
    padding-right: 0;
    border-radius: 9px 0px 0px 9px;
`;

export const SearchButton = styled(Button)`
    box-shadow: none;
    height: 34px;
    width: 40px;
    border-left: 0px;
    cursor: pointer;
    border-radius: 0px 9px 9px 0px;

    svg {
        height: 12px;
    }

    &:hover {
        path {
            color: white;
        }
    }
`;