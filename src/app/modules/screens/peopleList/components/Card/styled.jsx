import styled from 'styled-components'

export const CardBody = styled.div`
    height: 120px;
    margin-top: 15px;
    -webkit-box-shadow: 0 0 15px #ddd;;
    -moz-box-shadow: 0 0 15px #ddd;;
    padding-left: 30px;
    padding-right: 15px;
    background: #FFFFFF;
    box-sizing: border-box;
    box-shadow: 0 0 15px #ddd;;
    border-radius: 9px;
`;

export const PersonName = styled.p`
    color: #535353;
    margin-bottom: 5px;
    margin-top: 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 17px;
    line-height: 20px;
`;

export const PersonDataField = styled.p`
    margin-top: 9px;
    margin-bottom: 5px;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
`;

export const DataContainer = styled.div`
    width: 70%;
    display: inline-block;
`;

export const ButtonContainer = styled.div`
    width: 30%;
    display: inline-block;
    vertical-align: top;
    margin-top: 40px;
`;

export const DeleteButton = styled.button`
    float: right;
    background-color: lightgray;
    appearance: none;
    color: black;
    width: 80px;
    height: 30px;
    border: 1px solid gray;
    border-radius: 8px;
    -webkit-box-shadow: 4px 3px 6px -2px rgba(171,162,171,1);
    -moz-box-shadow: 4px 3px 6px -2px rgba(171,162,171,1);
    box-shadow: 4px 3px 6px -2px rgba(171,162,171,1);
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: gray;
        color: white;
    }
`;