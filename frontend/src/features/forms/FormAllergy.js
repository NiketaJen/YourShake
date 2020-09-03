import React, {useState} from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Button,  Typography,  Grid, Box} from "@material-ui/core"
import{ Field, Form, Formik, FormikConfig, FormikValues, ErrorMessage } from "formik";
import{ Select, CheckboxWithLabel } from "formik-material-ui";
import * as Yup from "yup"
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

  const FormAllergy = ({
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
         //   validationSchema={validationSchema}
            onSubmit={values => {
                setFormData(values);
                direction === 'back' ? prevStep() : nextStep()
            }}>
            <FormControl component="fieldset" value={value} onChange={handleChange}>
             <FormLabel component="legend">Any Allergies?</FormLabel>
             <Box>
                <Field 
                name="Coconut"
                value="Coconut" 
                type="checkbox"
                component={CheckboxWithLabel}
                label="Coconut" 
                />
             </Box>
             <Box>
                <Field 
                name="Eggs"
                value="Eggs" 
                type="checkbox"
                component={CheckboxWithLabel}
                label="Eggs" 
                />
             </Box>
             <Box>
                <Field 
                name="Fish"
                value="Fish" 
                type="checkbox"
                component={CheckboxWithLabel}
                label="Fish" 
                />
             </Box>
             <Box>
                <Field 
                name="Gluten"
                value="Gluten" 
                type="checkbox"
                component={CheckboxWithLabel}
                label="Gluten" 
                />
             </Box>
             <Box>
                <Field 
                name="Iron"
                value="Iron" 
                type="checkbox"
                component={CheckboxWithLabel}
                label="Iron" 
                />
             </Box>
             <Box>
                <Field 
                name="Milk"
                value="Milk" 
                type="checkbox"
                component={CheckboxWithLabel}
                label="Milk" 
                />
             </Box>
             <Box>
                <Field 
                name="Peanut"
                value="Peanut" 
                type="checkbox"
                component={CheckboxWithLabel}
                label="Peanut" 
                />
             </Box>
             <Box>
                <Field 
                name="Soy"
                value="Soy" 
                type="checkbox"
                component={CheckboxWithLabel}
                label="Soy" 
                />
             </Box>
             <Box>
                <Field 
                name="Wheat"
                value="Wheat" 
                type="checkbox"
                component={CheckboxWithLabel}
                label="Wheat" 
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
FormAllergy.propTypes = {
    formData: PropTypes.object.isRequired,
    setFormData: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired
}

export default FormAllergy