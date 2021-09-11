import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/advert/Home";
import { AddAdvert } from "./components/advert/AddAdvert";
import { EditAdvert } from "./components/advert/EditAdvert";
import { OfferList } from "./components/offer/OfferList";
import { AddOffer } from "./components/offer/AddOffer";
//import { EditOffer } from "./components/offer/EditOffer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div style={{ maxWidth: "50rem", margin: "4rem auto" }}>
      
        <Router>
          <Switch>
           
            <Route exact path="/" component={Home} />
            <Route path="/AddAdvert" component={AddAdvert} />
            <Route path="/EditAdvert/:id" component={EditAdvert} />
             <Route path="/Offer/:id" component={OfferList} />
             <Route path="/AddOffer" component={AddOffer} />
         
          </Switch>
        </Router>
      
    </div>
  )
}

export default App