import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { createOffer } from "../../services/offerService";
import { getAllAdverts} from "../../services/advertService";

export const AddOffer = () => {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [values, setValues] = useState({
        product_name: "",
        discount_rate: "",
        advertisements: [],
        advertisement_id: "",
        createdOffer: "",
        loading: false,
        
        });

    const {
        product_name,
        discount_rate,
        advertisements,
        advertisement_id,
        createdOffer,
        loading
            
        } = values;

    const init = () => {
        getAllAdverts().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    advertisements: data
                   // formData: new FormData()
                });
            }
        });
    };

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    };

    useEffect(() => {
        
        init();
    }, []);
    const clickSubmit = event => {
        event.preventDefault();
        setValues({ ...values, error: "",loading: true });

        createOffer({ product_name,discount_rate,advertisement_id }).then(data => {
            console.log("Values", values);
            if (data.error) {
                setValues({ ...values, error: data.error, success: false,loading: false });
            } else {
                setValues({
                    ...values,
                    loading: false,
                    createdProduct: data.name
                });
                setError("");
                setSuccess(true);
            }
        });
    };
    const showSuccess = () => {
        if (success) {
            return <h5 className="text-success">{product_name} Is SuccessFully Created</h5>;
        }
    };

    const showError = () => {
        if (error) {
            return <h5 className="text-danger">Product Name Should Be Unique</h5>;
        }
    };

    const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h2>Loading...</h2>
            </div>
        );

 
  return (
    <Form onSubmit={clickSubmit}>
      <FormGroup>
        <Label>Product Name</Label>
        <Input type="text" id="product_name"  onChange={handleChange("product_name")}  autoFocus required placeholder="" required name="product_name"></Input>
      </FormGroup>
    <br/>
    <FormGroup>
        <Label>Discount Rate</Label>
        <Input type="text" id="discount_rate" onChange={handleChange("discount_rate")} autoFocus required placeholder="" required name="discount_rate"></Input>
      </FormGroup>
    <br/>
    <FormGroup>
        <Label>Advertisement</Label>
        <select  className="form-control form-control-lg" onChange={handleChange("advertisement_id")} >
                <option>Please select</option>
                    {advertisements && advertisements.map((c, i) => (
                <option key={i} value={c.id}> {c.title}
                </option>
        ))}
        </select>
      </FormGroup>
    <br/>
    
      <Button type="submit">Add Offer</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
      {showSuccess()}
      {showError()}   
      {showLoading()}               
  
      
    </Form>
  )
}