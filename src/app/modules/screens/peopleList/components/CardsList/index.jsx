import React, { useEffect } from 'react';
import '../../../../../../App.css';
import { getPeopleList } from '../../services/PeopleServices';
import Card from '../Card';
import SearchForm from '../SearchForm';
import { Wraper, ListContainer, SearchContainer } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PEOPLE_LIST, SET_FETCHING } from '../../../../redux/People/constants';

const List = () => {
    const dispatch = useDispatch()
    const peopleList = useSelector(state => state.People.list)

    useEffect(() => {
        const call = async () => {
            dispatch({ type: SET_FETCHING })
            const response = await getPeopleList();
            dispatch({ type: SET_PEOPLE_LIST, list: response.response.data.results })
        }
        call()
    }, [dispatch])

    function removeFunction(index){
        let newList = peopleList;
        newList.splice(index, 1);
        dispatch({ type: SET_PEOPLE_LIST, list: newList })
    }

    return (
        <Wraper>
            <SearchContainer>
                <SearchForm/>
            </SearchContainer>
            <ListContainer>
                {peopleList.map((person, index) => {
                    return <Card key={`card_${index}`} name={person.name} gender={person.gender} height={person.height} removeFunction={removeFunction} index={index}/>;
                })}
            </ListContainer>
        </Wraper>
    );
}

export default List;