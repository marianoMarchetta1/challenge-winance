import React from 'react';
import { DataContainer, ButtonContainer, CardBody, PersonName, PersonHeight, PersonGender, DeleteButton } from './styled';

const Card = ({name, gender, height, removeFunction, index}) => {
    return (
        <CardBody>
            <DataContainer>
                <PersonName>
                    {name}
                </PersonName>
                <PersonHeight>
                    {`Height: ${height}`}
                </PersonHeight>
                <PersonGender>
                    {`Gender: ${gender}`}
                </PersonGender>
            </DataContainer>
            <ButtonContainer>
                <DeleteButton onClick={() => removeFunction(index)}>Delete</DeleteButton>
            </ButtonContainer>
        </CardBody>
    )
}

export default Card;