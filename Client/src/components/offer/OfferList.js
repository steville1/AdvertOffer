import React, { useContext, useState, useEffect  } from 'react';
import { Link,useHistory, Redirect, withRouter  } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";
import { Heading } from "./Heading";
import { getAllOffers, deleteOffer } from "../../services/offerService";
import { getAdvertById } from "../../services/advertService";

export const OfferList = ({ match }) => {
   console.log("OfferMatch",match);
    const [AllOffers, setAllOffers] = useState([]);//Get State and Set state for Adverts 
    const [AllOffersByAdvert, setAllOffersByAdvert] = useState([]);//Get State and Set state for Adverts 
    
   const init =id => {
        //console.log("Initial", advertId);
        getAdvertById(id).then(data => {
            if (data.error) {
               // setValues({ ...values, error: data.error });
            } else {
                console.log("DataOffer", data[0].offers);

                setAllOffersByAdvert(data[0].offers);
            }
        });
    };
    //Getting Adverts
    const loadAllOffers = () => {
        getAllOffers().then(data => {
            if (data.error) {
             
            } else {
               // console.log("Data", data);
                setAllOffers(data);
            }
        });
    };
    const destroy = offerId => {
        deleteOffer(offerId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                init(match.params.id);;
            }
        });
    };
    //
    useEffect(() => {
        //loadAllOffers();
        
       init(match.params.id);
        //
        //init(match.params.id);
         }, []);


  return (     
        <>
        <Heading />
          <div className="table-responsive">
           
              <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">Id</th>
                    <th scope="col">AdvertisementID</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Discount Rate</th>
                    <th scope="col">Action</th>
                    <th scope="col">Action</th>
                    
                    </tr>
                </thead>
                <tbody>
               
                {AllOffersByAdvert.map((p, i) => (
                     
                    <tr key={i}>
                    <th scope="row">{p.id}</th>
                    
                    <td>{p.advertisement_id}</td>
                    <td>{p.product_name}</td>
                    <td>{p.discount_rate}</td>
                    
                    <td><Link to={`/EditOffer/${p.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link></td>
                    <td><Button  color="danger" onClick={() => destroy(p.id)}>Delete</Button></td>
                   
                    </tr>
                ))}  
                    
                   
                </tbody>
                </table>
               </div>      
               
        </>  
  )
}