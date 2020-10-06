import styled from 'styled-components'

export const CardBody = styled.div`
    height: 120px;
    margin-top: 15px;
    -webkit-box-shadow: 5px 4px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 5px 4px 0px rgba(0, 0, 0, 0.2);
    padding-left: 15px;
    padding-right: 15px;
    background: #FFFFFF;
    border: 1px solid #A1A1A1;
    box-sizing: border-box;
    box-shadow: 5px 4px 0px rgba(0, 0, 0, 0.2);
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
    margin-top: 20px;
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
    -webkit-box-shadow: 5px 4px 5px 0px rgba(171,162,171,1);
    -moz-box-shadow: 5px 4px 5px 0px rgba(171,162,171,1);
    box-shadow: 5px 4px 5px 0px rgba(171,162,171,1);
    outline: none;

    &:hover {
        background-color: gray;
        color: white;
    }
`;