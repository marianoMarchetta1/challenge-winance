import React, { useEffect } from 'react';
import '../../../../../../App.css';
import { getPeopleList, getPeoplePage, getPeopleFiltered } from '../../services/PeopleServices';
import Card from '../Card';
import SearchForm from '../SearchForm';
import { Wraper, ListContainer, SearchContainer, ButtonsContainer, Button, NextButton } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PEOPLE_LIST, SET_FETCHING } from '../../../../redux/People/constants';

const List = () => {
    const dispatch = useDispatch()
    const peopleList = useSelector(state => state.People.list)
    const nextPage = useSelector(state => state.People.next)
    const previousPage = useSelector(state => state.People.previous)

    useEffect(() => {
        const call = async () => {
            dispatch({ type: SET_FETCHING })
            const response = await getPeopleList();
            dispatch({ type: SET_PEOPLE_LIST, list: response.response.data.results, previous: response.response.data.previous, next: response.response.data.next })
        }
        call()
    }, [dispatch])

    function removeFunction(index){
        let newList = peopleList;
        newList.splice(index, 1);
        dispatch({ type: SET_PEOPLE_LIST, list: newList })
    }

    async function getPage(page){
        dispatch({ type: SET_FETCHING });
        const nextpage = page.replace('http://swapi.dev/api', '');
        const response = await getPeoplePage(nextpage);
        dispatch({ type: SET_PEOPLE_LIST, list: response.response.data.results, previous: response.response.data.previous, next: response.response.data.next })
    }

    async function applyFilter(filter){
        dispatch({ type: SET_FETCHING });
        const response = await getPeopleFiltered(filter);
        dispatch({ type: SET_PEOPLE_LIST, list: response.response.data.results, previous: response.response.data.previous, next: response.response.data.next })
    }

    return (
        <Wraper>
            <SearchContainer>
                <SearchForm applyFilter={applyFilter}/>
            </SearchContainer>
            <ListContainer>
                {peopleList.map((person, index) => {
                    return <Card key={`card_${index}`} name={person.name} gender={person.gender} height={person.height} removeFunction={removeFunction} index={index}/>;
                })}
            </ListContainer>
            <ButtonsContainer>
                <Button disabled={!previousPage} onClick={() => getPage(previousPage)}>
                    Previous
                </Button>
                <NextButton disabled={!nextPage} onClick={() => getPage(nextPage)}>
                    Next
                </NextButton>
            </ButtonsContainer>
        </Wraper>
    );
}

export default List;