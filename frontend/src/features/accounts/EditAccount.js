import React from 'react'
import {useHistory} from 'react-router'

const EditAccount = (props) => {
    let history = useHistory()

    let editUser = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3000/users/${props.currentUser.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username:e.target.username.value,
                password:e.target.password.value
            })
        }).then(resp => resp.json()).then(history.push('/account/useraccount'))
    }
    return(
        <div>
            <h1>Edit Your Account</h1>
            <p>{props.currentUser.first_name}</p>
            <div>
                <form onSubmit={(e)=> editUser(e)}>
                    <input name="username" type='text' placeholder='Edit Username'></input>
                    <br/><br/>
                    <input name="password" type='text' placeholder='Edit Password'></input>
                    <br/><br/>
                    <input type='submit' value='Save Changes'></input>
                </form>
            </div>
        </div>
    )
}
export default EditAccount





