import { REQUEST_TEST_API_DATA, RECEIVE_TEST_API_DATA } from '../types/test_for_api';

export const requestTestApiData = () => ({type: REQUEST_TEST_API_DATA});
export const receiveTestApiData = data => ({type: RECEIVE_TEST_API_DATA, data});