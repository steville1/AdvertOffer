import React, { useState, useContext } from 'react';
import { Link, useHistory } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { createAdvert } from "../../services/advertService";

export const AddAdvert = () => {
    
    const [title, setTitle] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = e => {
        setError("");
        setTitle(e.target.value);
    };

    const clickSubmit = e => {
        e.preventDefault();
        setError("");
        setSuccess(false);
        setLoading(true);
      
        createAdvert({ title }).then(data => {
            console.log("Data", data);
            if (data.error) {
                setError(data.error);
            } else {
                setError("");
                setLoading(false);
                setSuccess(true);
            }
        });
    }; 
    const showSuccess = () => {
        if (success) {
            return <h5 className="text-success">{title} Is SuccessFully Created</h5>;
        }
    };

    const showError = () => {
        if (error) {
            return <h5 className="text-danger">Title Should Be Unique</h5>;
        }
    };
  const showLoading = () =>
        loading && (
            <div className="alert alert-success">
                <h5>Loading...</h5>
            </div>
        );
    const goBack = () => (
        <div className="mt-5">
            <Link to="/" className="text-warning"><a> Back to Advert Listing</a>
               
            </Link>
        </div>
    );
 
  return (
    <Form onSubmit={clickSubmit}>
      <FormGroup>
        <Label>Title</Label>
        <Input type="text" id="name" onChange={handleChange} autoFocus required placeholder="Enter Title" required></Input>
      </FormGroup>
    <br/>
    
      <Button type="submit">Add Advert</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
      {showSuccess()}
      {showError()} 
      {showLoading()}                   
      {goBack()}
      
    </Form>
  )
}