import React from 'react';
import PropTypes from 'prop-types';
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

Card.propTypes = {
    name: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    removeFunction: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

export default Card;