import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Button, Typography, Step, StepLabel, Stepper, CircularProgress, Grid, Box} from "@material-ui/core"
import{ Field, Form, Formik, FormikConfig, FormikValues, ErrorMessage } from "formik";
import{ TextField } from "formik-material-ui";
import * as Yup from "yup"






const validationSchema = Yup.object().shape({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    username: Yup.string().required("Required"),
    email: Yup.string().email('Invalid email').required("Required"),
    password: Yup.string().min(8).required("Required"),
})

export const FormUserDetails = ({formData, setFormData, nextStep}) => {
    return(
        
          <Card>
             <CardContent>
                 Sign Up
                <Formik 
                initialValue={formData}
                validationSchema={validationSchema}
                 onSubmit={values => {
                     setFormData(values);
                     console.log(values)
                     nextStep()
                 }}>
                     {({errors, touched}) => (
                        <Form autoComplete="off">
                        <div>
                            <Field name="first_name" component={TextField} label="First Name" error={touched.first_name && errors.first_name} helperText={touched.first_name && errors.first_name} />
                            <Field name="last_name" component={TextField} label="Last Name" error={touched.last_name && errors.last_name} helperText={touched.last_name && errors.last_name}/>
                            <Field name="username" component={TextField} label="Username" error={touched.username && errors.username} helperText={touched.username && errors.username}/>
                            <Field name="email" component={TextField} label="Email" error={touched.email && errors.email} helperText={touched.email && errors.email}/>
                            <Field name="password" component={TextField} label="Password" error={touched.password && errors.password} helperText={touched.password && errors.password}/>
                        </div>
                            <Button type='submit'>
                                Continue
                            </Button>
                        
                        </Form>
                     )}
                 
                </Formik>
            </CardContent>
        </Card>
    )
};

FormUserDetails.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired
};
export default FormUserDetails