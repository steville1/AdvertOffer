import React, { useContext, useState, useEffect  } from 'react';
import { Link } from "react-router-dom";
import {
  ListGroup,
  ListGroupItem,
  Button
} from "reactstrap";
import { getAllAdverts, deleteAdvert } from "../../services/advertService";

export const AdvertList = () => {
   
    const [AllAdverts, setAllAdverts] = useState([]);//Get State and Set state for Adverts 
    
   
    //Getting Adverts
    const loadAllAdverts = () => {
        getAllAdverts().then(data => {
            if (data.error) {
             
            } else {
                console.log("Data", data);
                setAllAdverts(data);
            }
        });
    };
    const destroy = advertId => {
        deleteAdvert(advertId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadAllAdverts();
            }
        });
    };
    //
    useEffect(() => {
        loadAllAdverts();
         }, []);


  return (     
        <>
          <div className="table-responsive">
           
              <table className="table">
                <thead className="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Action</th>
                    <th scope="col">Action</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
               
                {AllAdverts.map((p, i) => (
                     
                    <tr key={i}>
                    <th scope="row">{p.id}</th>
                    
                    <td>{p.title}</td>
                    
                    <td><Link to={`/EditAdvert/${p.id}`} color="warning" className="btn btn-warning mr-1">Edit</Link></td>
                    <td><Button  color="danger" onClick={() => destroy(p.id)}>Delete</Button></td>
                    <td><Link to={`/Offer/${p.id}`}  color="secondary" className="btn btn-secondary mr-1">View Offer of(Advert)</Link></td>
                    </tr>
                ))}  
                    
                   
                </tbody>
                </table>
               </div>      
               
        </>  
  )
}