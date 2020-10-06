import React from 'react';
import PropTypes from 'prop-types';
import { DataContainer, ButtonContainer, CardBody, PersonName, PersonDataField, DeleteButton } from './styled';

const Card = ({name, gender, height, removeFunction, index}) => {
    return (
        <CardBody>
            <DataContainer>
                <PersonName>
                    {name}
                </PersonName>
                <PersonDataField>
                    {`Height: ${height}`}
                </PersonDataField>
                <PersonDataField>
                    {`Gender: ${gender}`}
                </PersonDataField>
            </DataContainer>
            <ButtonContainer>
                <DeleteButton onClick={() => removeFunction(index)}>Delete</DeleteButton>
            </ButtonContainer>
        </CardBody>
    )
}

Card.propTypes = {
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    removeFunction: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

export default Card;