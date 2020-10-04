import styled from 'styled-components'

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

export const SearchButton = styled.button`
    float: right;
    background-color: lightgray;
    appearance: none;
    color: black;
    width: 80px;
    height: 30px;
    border: 1px solid gray;
    border-radius: 8px;
    -webkit-box-shadow: 5px 4px 5px 0px rgba(171,162,171,1);
    -moz-box-shadow: 5px 4px 5px 0px rgba(171,162,171,1);
    box-shadow: 5px 4px 5px 0px rgba(171,162,171,1);
    outline: none;

    &:hover {
        background-color: gray;
        color: white;
    }
`;