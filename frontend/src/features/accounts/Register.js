import React, {useState} from "react";
import FormUserDetails from "../forms/FormUserDetails"
// import {FormGender} from "/src/features/forms/FormGender"
// import {FormGenderTwo} from "/src/features/forms/FormGenderTwo"
// import {FormFitnessGoals} from "/src/features/forms/FormFitnessGoals"
// import {FormAthleteType} from "/src/features/forms/FormAthleteType"
import FormProtein from "../forms/FormProtein"
import FormAllergy from "../forms/FormAllergy"
import FormFlavor from "../forms/FormFlavor"
import Success from "../forms/Success"
// import {Confirm} from "/src/features/forms/Confirm"




// Multi Step Form



export const Register = () => {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: ''
    })
    console.log(formData)
    const nextStep = () => setStep(prev => prev + 1)
    const prevStep = () => setStep(prev => prev - 1)

    switch(step) {
        case 1:
            return (
                <FormUserDetails
                 formData={formData}
                 setFormData={setFormData}
                 nextStep={nextStep}
                 />
            );
        // case 2:
        //     return (
        //         <FormGender
        //         formData={formData}
        //         setFormData={setFormData}
        //         nextStep={nextStep}
        //         prevStep={prevStep}
        //         />
        //     );
        // case 3:
        //     return (
        //         <FormGenderTwo
        //         formData={formData}
        //         setFormData={setFormData}
        //         nextStep={nextStep}
        //         prevStep={prevStep}
        //         />
        //     );
        // case 4:
        //     return (
        //         <FormFitnessGoals
        //         formData={formData}
        //         setFormData={setFormData}
        //         nextStep={nextStep}
        //         prevStep={prevStep}
        //         />
        //     );
        // case 5:
        //     return (
        //         <FormAthleteType
        //         formData={formData}
        //         setFormData={setFormData}
        //         nextStep={nextStep}
        //         prevStep={prevStep}
        //         />
        //     );
        case 2:
            return (
                <FormProtein
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
                prevStep={prevStep}
                />
            );
        case 3:
            return (
                <FormAllergy
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
                prevStep={prevStep}
                />
            );
        case 4:
            return (
                <FormFlavor
                formData={formData}
                setFormData={setFormData}
                nextStep={nextStep}
                prevStep={prevStep}
                />
            );
        // case 5:
        //     return (
        //         <Confirm
        //         formData={formData}
        //         setFormData={setFormData}
        //         nextStep={nextStep}
        //         prevStep={prevStep}
        //         />
        //      );
            
    
    default:
        return(
       <Success/>
    )
 }


};
export default Register

    

    

    



// export interface FormikStepProps extends Pick<FormikConfig<FormikValues>,'children' | 'validationSchema'> {
  
// }

// export function FormikStep({children}: FormikStepProps) {
//     return <>{children}</>
// }

// export function FormikStepper({children, ...props}: FormikConfig<FormikValues>){
//     const childrenArray = React.Children.toArray(children) 
//     const [step, setStep] = useState(0);
//     const currentChild = childrenArray[step] 
    

//     function isLastStep(){
//         return step === childrenArray.length -1
//     }

//     return (
//     <Formik {...props} 
//         validationSchema={currentChild.props.validationSchema}
//         onSubmit={async (values, helpers) => {
//         if(isLastStep()){
//             await props.onSubmit(values, helpers)
//         }else {
//             setStep(s=> s+1)
//         }
//     }}>
//         <Form autoComplete="off">
//             {currentChild}
//             {step > 0 ? <Button onClick={() => setStep(s=> s-1)}>Back</Button> : null}
//             <Button type="Submit">{isLastStep() ? 'Submit' : 'Next'}</Button>
//         </Form>
//     </Formik>
//     )
// };