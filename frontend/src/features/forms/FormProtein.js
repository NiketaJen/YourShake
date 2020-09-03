import React, {useState} from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Button, Typography, Step, StepLabel, Stepper, CircularProgress, Grid, Box} from "@material-ui/core"
import{ Field, Form, Formik, FormikConfig, FormikValues, ErrorMessage } from "formik";
import{ Select } from "formik-material-ui";
import * as Yup from "yup"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

 const FormProtein= ({
    formData, 
    setFormData,
    nextStep,
    prevStep
}) => {
    const [direction, setDirection] = useState('back')
    const [value, setValue] = React.useState('Yes');

    const handleChange = (event) => {
        event.preventDefault()
      setValue(event.target.value);
    };

    return(
        <Card>
        <CardContent>
           <Formik 
           initialValue={formData}
        //    validationSchema={validationSchema}
            onSubmit={values => {
                setFormData(values);
                direction === 'back' ? prevStep() : nextStep()
            }}>
            <FormControl component="fieldset">
             <FormLabel component="legend">What type of protein do you prefer?</FormLabel>
            <RadioGroup aria-label="protein" name="protein" value={value} onChange={handleChange} >
            <FormControlLabel value="Whey" control={<Radio />} label="Whey" />
             <FormControlLabel value="Casein" control={<Radio />} label="Casein" />
             <FormControlLabel value="Soy" control={<Radio />} label="Soy" />
             <FormControlLabel value="Plant Based" control={<Radio />} label="Plant Based" />

            </RadioGroup>
            <Button type='submit' onClick={()=> setDirection('back')}>
                           Back
                       </Button>
                       <Button type='submit' onClick={()=> setDirection('forward')}>
                           Continue
                       </Button>
             </FormControl>
                     
                   </Formik>
                </CardContent>
                </Card>
                )
};
FormProtein.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired
}
export default FormProtein