import React, { useState, useContext, useEffect } from 'react';
import { Link, useHistory, Redirect, withRouter } from "react-router-dom";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { updateAdvert, getAdvertById } from "../../services/advertService";


export const EditAdvert = ({ match }) => {
    console.log("Match",match);
    const [values, setValues] = useState({
        title: '',
        error: '',
        redirectToProfile: false,
        formData: ''
    });
    

    const { title, error, redirectToProfile } = values;
    //const advertId=2;
    const init =advertId => {
        console.log("Initial", advertId);
        getAdvertById(advertId).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                // populate the state
                //const copied=[...data];
                //console.log("Copied", copied[0].title);
                setValues({
                    ...values,
                    title: data[0].title
                });
            }
        });
    };

    useEffect(() => {
        init(match.params.id);
    }, []);
    //this.props.match.params.id
    const handleChange = title => event => {
        setValues({ ...values, error: false, [title]: event.target.value });
    };

    const submitAdvertForm = e => {
        e.preventDefault();
        // update with ? you should send Advert Title otherwise what to update?
        const advert = {
            title: title
        };
        updateAdvert(advert, match.params.id).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({
                    ...values,
                    title: data.title,
                    error: false,
                    redirectToProfile: true
                });
            }
        });
    };


const UpdateAdvertForm = () => (
  
    <Form onSubmit={submitAdvertForm}>
      <FormGroup>
        <Label>Title</Label>
        <Input onChange={handleChange('title')} value={title} className="input100" type="text" required name="title"></Input>
      </FormGroup>
      <br/>
      <Button type="submit">Update</Button>
      <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
    </Form>
  );
  const showError = () => (
        <div className={'alert alert-danger'} role="alert" style={{ display: error ? '' : 'none' }}>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            {error}
        </div>
    );

    const redirectAdvert = () => {
        if (redirectToProfile) {
            if (!error) {
                return <Redirect to="/" />;
            }
        }
    };

    const goBackBTN = () => {
        return (
            <div className="mt-5">
                <Link to="/" className="text-info">
                    Back To Advert List
                </Link>
            </div>
        );
    };

    return (
        <>
            <div className="row">
                <div className="col-md-8 offset-md-2 m-b-250 mb-5">
                    {showError()}
                    {UpdateAdvertForm()}
                    {goBackBTN()}
                    {redirectAdvert()}
                </div>
            </div>
        </>
      
    );
};
//export default EditUser;
