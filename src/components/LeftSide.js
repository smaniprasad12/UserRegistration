import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const Leftside = () => {

    const initialValues = { username: "", password: "", email: "", mobile: "", firstname: "", lastname: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = {};
        const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
        if (!values.firstname) {
            errors.firstname = "First Name is required!";
        } else if (values.firstname.length > 50) {
            errors.firstname = "First Name must be less than 50 characters!";
        }
        if (!values.lastname) {
            errors.lastname = "Last Name is required!";
        } else if (values.lastname.length > 50) {
            errors.lastname = "Last Name must be less than 50 characters!";
        }
        if (!values.email) {
            errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid Email format!";
        }
        if (!values.mobile) {
            errors.mobile = "Mobile Number is required!";
        } else if (values.mobile.length < 10 || values.mobile.length > 10) {
            errors.mobile = "Mobile Number must be 10 digits!";
        }
        if (!values.username) {
            errors.username = "User Name is required!";
        } else if (values.username.length < 5) {
            errors.username = "User name must be minimum 5 characters!";
        }
        if (!values.password) {
            errors.password = "Password is required!";
        } else if (values.password.length < 8) {
            errors.password = "Password must be more than 7 characters!";
        } else if (values.password.length > 12) {
            errors.password = "Password cannot exceed more than 12 characters!";
        }
        return errors;
    };
    return (
        <div className='container'> <br />
            {Object.keys(formErrors).length === 0 && isSubmit ? ( 
                <div className="Registration successful" style={{marginLeft: "20%"}}><h4>Registration successful</h4></div>
            ) : (
                <div className="Registration in Progress"></div>)}

            <form onSubmit={handleSubmit} style={{ width: "30%", marginLeft: "10%", narginTop: "10%" }}>
                <br />
                
                <div className='field'>
                    <label>First Name</label>
                    <input type="text" name="firstname" placeholder='First Name' value={formValues.firstname} onChange={handleChange} />
                    <p>{formErrors.firstname}</p>
                </div>

                <div className='field'>
                    <label>Last Name</label>
                    <input type="text" name="lastname" placeholder='Last Name' value={formValues.lastname} onChange={handleChange} />
                    <p>{formErrors.lastname}</p>
                </div>

                <div className='field'>
                    <label>Email</label>
                    <input type="email" name="email" placeholder='Email' value={formValues.email} onChange={handleChange} />
                    <p>{formErrors.email}</p>
                </div>

                <div className='field'>
                    <label>Mobile Number</label>
                    <input type="number" name="mobile" placeholder='Mobile Number' value={formValues.mobile} onChange={handleChange} />
                    <p>{formErrors.mobile}</p>
                </div>

                <div className='field'>
                    <label>User Name</label>
                    <input type="text" name="username" placeholder='User Name' value={formValues.username} onChange={handleChange} />
                    <p>{formErrors.username}</p>
                </div>

                <div className='field'>
                    <label>Password</label>
                    <input type="password" name="password" placeholder='Password' value={formValues.password} onChange={handleChange} />
                    <p>{formErrors.password}</p>
                </div>

                <br />
                <Button type='submit' style={{color:"black",backgroundColor:"green"}}>Register</Button>
                <Button type='reset' style={{ marginLeft: "25%",color:"black",backgroundColor:"green" }}>Reset</Button>
            </form>
        </div>
    )
}

export default Leftside
