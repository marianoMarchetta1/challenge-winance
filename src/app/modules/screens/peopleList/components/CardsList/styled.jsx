import styled from 'styled-components'

export const Wraper = styled.div`
    width: 450px;
    margin-left: 50px;
    height: 90%;
    position: absolute;
    padding-right: 20px;
    padding-bottom: 10px;
    margin-top: 50px;
`;

export const ListContainer = styled.div`
    height: 80%;
    overflow-y: scroll;
    padding-right: 15px;
    padding-bottom: 15px;

    &::-webkit-scrollbar {
        width: 6px;
        height: 6px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
        background: rgba(0,0,0,0.1);
    }
    &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background: rgba(0,0,0,0.2);
    }
    &::-webkit-scrollbar-thumb:hover{
        background: rgba(0,0,0,0.4);
    }
    &::-webkit-scrollbar-thumb:active{
        background: rgba(0,0,0,.9);
    }
`;

export const SearchContainer = styled.div`
    margin-bottom: 20px;
`;

export const ButtonsContainer = styled.div`
    margin-top: 30px;
    padding-left: 10px;
    padding-right: 35px;
`;

export const Container = styled.div`
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center
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

export const Spinner = styled(Container)`
    background-color: darkgrey;
    opacity: 0.4;
    padding-bottom: 15px;
`;

export const SpinnerText = styled.p`
    color: black;
`;

export const ErrorMessage = styled.p`
    color: red;
`;

export const NoDataText = styled.p`
    color: black;
`;