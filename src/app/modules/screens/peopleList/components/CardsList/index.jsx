import React, { useEffect } from 'react';
import '../../../../../../App.css';
import { getPeopleList, getPeoplePage, getPeopleFiltered } from '../../services/PeopleServices';
import Card from '../Card';
import SearchForm from '../SearchForm';
import { Wraper, ListContainer, SearchContainer, ButtonsContainer, Button, NextButton, Spinner, SpinnerText } from './styled';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PEOPLE_LIST, SET_FETCHING } from '../../../../redux/People/constants';

const List = () => {
    const dispatch = useDispatch()
    const { list, next, previous, isFetching } = useSelector(state => state.People)

    useEffect(() => {
        const call = async () => {
            dispatch({ type: SET_FETCHING })
            const response = await getPeopleList();
            dispatch({ type: SET_PEOPLE_LIST, list: response.response.data.results, previous: response.response.data.previous, next: response.response.data.next })
        }
        call()
    }, [dispatch])

    function removeFunction(index){
        let newList = list;
        newList.splice(index, 1);
        dispatch({ type: SET_PEOPLE_LIST, list: newList, previous: previous, next: next })
    }

    async function getPage(page){
        dispatch({ type: SET_FETCHING });
        const nextpage = page.replace(process.env.REACT_APP_API, '');
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
            {!isFetching ? <ListContainer>
                {list.map((person, index) => {
                    return <Card key={`card_${index}`} name={person.name} gender={person.gender} height={person.height} removeFunction={removeFunction} index={index}/>;
                })} </ListContainer> : <Spinner><SpinnerText>Loading...</SpinnerText></Spinner> }
            <ButtonsContainer>
                <Button disabled={!previous} onClick={() => getPage(previous)}>
                    Previous
                </Button>
                <NextButton disabled={!next} onClick={() => getPage(next)}>
                    Next
                </NextButton>
            </ButtonsContainer>
        </Wraper>
    );
}

export default List;