import React, { useState } from 'react';
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

export default SearchForm;