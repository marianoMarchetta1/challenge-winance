import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Input, SearchButton } from './styled';
import { BsSearch as SearchIcon} from 'react-icons/bs'

const SearchForm = ({ applyFilter }) => {

    const [filter, setFilter] = useState('');

    function handleChange(e){
        if(e.target.value.length > 0)
            setFilter(e.target.value);
        else
            applyFilter('');
    }

    return (
        <Wrapper>
            <Input onChange={handleChange} onKeyPress={(e) => { if (e.key === 'Enter' || e.keyCode === 13) applyFilter(filter)}}/>
            <SearchButton onClick={() => { applyFilter(filter) }}><SearchIcon/></SearchButton>
        </Wrapper>
    )
}

SearchForm.propTypes = {
    applyFilter: PropTypes.func.isRequired,
}

export default SearchForm;