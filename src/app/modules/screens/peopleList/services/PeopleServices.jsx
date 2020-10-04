import httpClientApi from '../../../../core/httpClientApi';

export const getPeopleList = async () => {
    return httpClientApi.get('/people/');
}