import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wraper, Input, SearchButton } from './styled';

const SearchForm = ({ applyFilter }) => {

    const [filter, setFilter] = useState('');

    return (
        <Wraper>
            <Input onChange={(e) => setFilter(e.target.value)}/>
            <SearchButton onClick={() => { applyFilter(filter) }}>Search</SearchButton>
        </Wraper>
    )
}

SearchForm.propTypes = {
    applyFilter: PropTypes.func.isRequired,
}

export default SearchForm;