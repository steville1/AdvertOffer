import { apiUrl } from "../config.json";
//import queryString from "query-string";
export const getAllOffers = () => {
    return fetch(`${apiUrl}/offers`, {
        method: "GET"
    })
        .then(response => {
             return response.json();
        })
        .catch(err => console.log(err));
};


export const createOffer = (offer) => {
    return fetch(`${apiUrl}/createOffer`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
            
        },
        body: JSON.stringify(offer)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};
export const getOfferById = offerId => {
    return fetch(`${apiUrl}/getOfferById/${offerId}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const updateOffer = (offer, offerId) => {
    return fetch(`${apiUrl}/updateOffer/${offerId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
            
        },
        body: JSON.stringify(offer)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
export const deleteOffer = (offerId) => {
    return fetch(`${apiUrl}/deleteOffer/${offerId}`, {
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
