import styled from 'styled-components'

export const CardBody = styled.div`
    height: 120px;
    border: 1px solid gray;
    margin-top: 15px;
    border-radius: 5px;
    -webkit-box-shadow: 7px 7px 5px 0px rgba(189,189,189,1);
    -moz-box-shadow: 7px 7px 5px 0px rgba(189,189,189,1);
    box-shadow: 7px 7px 5px 0px rgba(189,189,189,1);
    padding-left: 15px;
    padding-right: 15px;
`;

export const PersonName = styled.p`
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 5px;
    margin-top: 20px;
`;

export const PersonHeight = styled.p`
    margin-top: 0;
    font-size: 14px;
    margin-bottom: 5px;
`;

export const PersonGender = styled.p`
    margin-top: 0;
    font-size: 14px;
    margin-bottom: 5px;
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