import axios from 'axios';

const BASE_URL= 'https://run.mocky.io/v3';
// https://run.mocky.io/v3/0bb7a930-8f77-4add-9f4c-b7805fb7f15f

export const fetchEvents=async ()=> {

    try{
    //    const response= await axios.get(`${BASE_URL}/da6e67c3-f709-45f2-a46c-5050cfea73f0`);
    const response= await axios.get(`${BASE_URL}/0bb7a930-8f77-4add-9f4c-b7805fb7f15f`);
       return response.data.events;
    //    return [];
    }
    catch(error){
        // Handle the error appropriately in your app
        console.error('There was an error fetching the events:', error);
        throw error;
    }

};