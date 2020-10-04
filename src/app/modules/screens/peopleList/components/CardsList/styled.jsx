import styled from 'styled-components'

export const Wraper = styled.div`
    width: 450px;
    margin-left: 50px;
    height: 100%;
    position: absolute;
    padding-right: 20px;
    padding-bottom: 10px;
    margin-top: 50px;
`;

export const ListContainer = styled.div`
    height: 80%;
    overflow-y: scroll;
`;

export const SearchContainer = styled.div`
    margin-bottom: 20px;
`;

export const ButtonsContainer = styled.div`
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 10px;
`;

export const Button = styled.button `
    background-color: ${props => !props.disabled ? 'lightgray' : 'white'};
    appearance: none;
    color: ${props => !props.disabled ? 'black' : 'gray'};
    width: 80px;
    height: 30px;
    border: 1px solid gray;
    border-radius: 8px;
    -webkit-box-shadow: 5px 4px 5px 0px rgba(171,162,171,1);
    -moz-box-shadow: 5px 4px 5px 0px rgba(171,162,171,1);
    box-shadow: 5px 4px 5px 0px rgba(171,162,171,1);
    outline: none;

    &:hover {
        background-color: ${props => !props.disabled ? 'gray' : ''};
        color: ${props => !props.disabled ? 'white' : ''};
    }
`;

export const NextButton = styled(Button) `
    float:right;
`;