import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 450px;
    height: 90%;
    position: absolute;
    padding-right: 20px;
    padding-bottom: 10px;
    margin-top: 50px;
    left: calc(50% - 225px);
`;

export const ListContainer = styled.div`
    height: 80%;
    overflow-y: scroll;
    padding-right: 25px;
    padding-bottom: 15px;

    &::-webkit-scrollbar {
        width: 4px;
        height: 6px;
    }
    &::-webkit-scrollbar-track {
        border-radius: 10px;
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
    width: 45px;
    height: 35px;
    border: 1px solid gray;
    border-radius: 20px;
    -webkit-box-shadow: 5px 4px 5px 0px rgba(171,162,171,1);
    -moz-box-shadow: 5px 4px 5px 0px rgba(171,162,171,1);
    box-shadow: 5px 4px 5px 0px rgba(171,162,171,1);
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: ${props => !props.disabled ? 'gray' : ''};
        
        polyline {
            stroke: ${props => !props.disabled ? 'white' : ''};
        }
    }

    svg {
        height: 10px;
    }

    polyline {
        stroke: ${props => !props.disabled ? 'black' : 'gray'};
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