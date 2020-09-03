import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Button, Typography, Step, StepLabel, Stepper, CircularProgress, Grid, Box} from "@material-ui/core"
import{ Field, Form, Formik, FormikConfig, FormikValues, ErrorMessage } from "formik";
import{ Select } from "formik-material-ui";
import * as Yup from "yup"

export const FormGender = ({
    formData, 
    setFormData,
    nextStep,
    prevStep
}) => {
    const [direction, setDirection] = useState('back')
    return(
        <Card>
        <CardContent>
            Sign Up
           <Formik 
           initialValue={formData}
           validationSchema={validationSchema}
            onSubmit={values => {
                setFormData(values);
                direction === 'back' ? prevStep() : nextStep()
            }}>
                   <Form >
                   <div>
                       <Field name="male" component={Button} label="Male"  />
                       <Field name="female" component={Button} label="Female" />
                      
                   </div>
                        <Button type='submit' onClick={()=> setDirection('back')}>
                           Back
                       </Button>
                       <Button type='submit' onClick={()=> setDirection('forward')}>
                           Continue
                       </Button>
                   
                   </Form>
                   </Formik>
                </CardContent>
                </Card>
                )
};
FormGender.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired
}

