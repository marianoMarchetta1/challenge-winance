import httpClientApi from '../../../../core/httpClientApi';

export const getPeopleList = async () => {
    return httpClientApi.get('/people/');
}

export const getPeoplePage = async (page) => {
    return httpClientApi.get(`${page}`);
}

export const getPeopleFiltered = async (filter) => {
    return httpClientApi.get(`/people/?search=${filter}`);
}