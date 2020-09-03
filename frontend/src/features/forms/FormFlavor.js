import React, {useState} from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Button,  Typography,  Grid, Box} from "@material-ui/core"
import{ Field, Form, Formik, FormikConfig, FormikValues, ErrorMessage } from "formik";
import{ Select, CheckboxWithLabel } from "formik-material-ui";
import * as Yup from "yup"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

 const FormFlavor = ({
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
            <FormControl component="fieldset" value={value} onChange={handleChange}>
             <FormLabel component="legend">What are your preferred flavor(s):</FormLabel>
             <Box>
                <Field 
                name="Chocolate"
                value="Chocolate" 
                type="checkbox"
                component={CheckboxWithLabel}
                label="Chocolate" 
                />
             </Box>
             <Box>
                <Field 
                name="Strawberry"
                value="Strawberry" 
                type="checkbox"
                component={CheckboxWithLabel}
                label="Strawberry" 
                />
             </Box>
             <Box>
                <Field 
                name="Vanilla"
                value="Vanilla" 
                type="checkbox"
                component={CheckboxWithLabel}
                label="Vanilla" 
                />
             </Box>
             <Box>
                <Field 
                name="Cookies 'n Creme"
                value="Cookies 'n'Creme" 
                type="checkbox"
                component={CheckboxWithLabel}
                label="Cookies 'n'Creme" 
                />
             </Box>
             <Box>
                <Field 
                name="Chocolate Peanut Butter"
                value="Chocolate Peanut Butter" 
                type="checkbox"
                component={CheckboxWithLabel}
                label="Chocolate Peanut Butter" 
                />
             </Box>
             <Box>
                <Field 
                name="Mocha"
                value="Mocha" 
                type="checkbox"
                component={CheckboxWithLabel}
                label="Mocha" 
                />
             </Box>
             <Box>
                <Field 
                name="Salted Caramel"
                value="Salted Caramel" 
                type="checkbox"
                component={CheckboxWithLabel}
                label="Salted Caramel" 
                />
             </Box>
             <Box>
                <Field 
                name="I'm open to explore new flavors"
                value="I'm open to explore new flavors" 
                type="checkbox"
                component={CheckboxWithLabel}
                label="I'm open to explore new flavors" 
                />
             </Box>
   
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
FormFlavor.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired
}
export default FormFlavor