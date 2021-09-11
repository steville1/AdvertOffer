import { apiUrl } from "../config.json";
//import queryString from "query-string";
export const getAllAdverts = () => {
    return fetch(`${apiUrl}/advertisements`, {
        method: "GET"
    })
        .then(response => {
             return response.json();
        })
        .catch(err => console.log(err));
};


export const createAdvert = (advert) => {
    return fetch(`${apiUrl}/createAdvertisement`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
            
        },
        body: JSON.stringify(advert)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};
export const getAdvertById = advertId => {
    return fetch(`${apiUrl}/getAdvertById/${advertId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const updateAdvert = (advert, advertId) => {
    return fetch(`${apiUrl}/updateAdvert/${advertId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
            
        },
        body: JSON.stringify(advert)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const deleteAdvert = (advertId) => {
    return fetch(`${apiUrl}/deleteAdvert/${advertId}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'          
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
