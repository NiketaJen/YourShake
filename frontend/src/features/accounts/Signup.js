import React, {useState} from "react"
import { useHistory } from 'react-router';
import { Card, CardContent, Button} from "@material-ui/core"
import{ Field, Form, Formik, FormikConfig, FormikValues, ErrorMessage } from "formik";
import{ TextField } from "formik-material-ui";
// import * as Yup from "yup"

function Signup(props){
    let history = useHistory()

    const [user, changeUser] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: ''
    });

    let newUser = (event) => {
        event.preventDefault()

        fetch('http://localhost:3000/users',{
            credentials:"include",
            method: 'POST',
            headers:{
                'Content-type': "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                user: {   first_name: user.first_name,
                   last_name: user.last_name,
                   username: user.username,
                   email: user.email,
                   password: user.password}
            })
        })
        .then(response => response.json())
        .then(history.push('/account/login'))
        // debugger
    }

    // const validationSchema = Yup.object().shape({
    //     first_name: Yup.string().required("Required"),
    //     last_name: Yup.string().required("Required"),
    //     username: Yup.string().required("Required"),
    //     email: Yup.string().email('Invalid email').required("Required"),
    //     password: Yup.string().min(8).required("Required"),
    // })

    return(
        <div>
              {/* <Card>
             <CardContent>
                 Sign Up
                <Formik 
                initialValue={{
                    first_name: '',
                    last_name: '',
                    username: '',
                    email: '',
                    password: ''
                }}
                validationSchema={validationSchema}
                 onSubmit={(event) => {
                     newUser(event)
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
                                Submit
                            </Button>
                        
                        </Form>
                     )}
                 
                </Formik>
            </CardContent>
        </Card> */}
        <h1>Signup Form</h1>
            <div>
                <form onSubmit={ (event) => newUser(event)}>
                    <input name="first_name" type='text' placeholder="First Name" value={user.first_name} onChange={(e) => changeUser({...user, first_name: e.target.value})}></input>
                    <br/>
                    <br/>
                    <input name="last_name" type='text' placeholder="Last Name" value={user.last_name} onChange={(e) => changeUser({...user, last_name: e.target.value})}></input>
                    <br>
                    </br>
                    <br>
                    </br>
                    <input name="username" type='text' placeholder="Username" value={user.username} onChange={(e) => changeUser({...user, username: e.target.value})}></input>
                    <br/>
                    <br/>
                    <input name="email" type='text' placeholder="Email" value={user.email} onChange={(e) => changeUser({...user, email: e.target.value})}></input>
                    <br>
                    </br>
                    <br>
                    </br>
                    <input name="password" type='text' placeholder="Password" value={user.password} onChange={(e) => changeUser({...user, password: e.target.value})}></input>
                    <br/>
                    <br/>
                    <input type='submit' value='Create Account'></input>
                </form>
            </div>
 
        </div>
    )

};
export default Signup
