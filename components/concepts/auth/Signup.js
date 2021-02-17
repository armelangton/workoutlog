import React, {Component} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {AuthContext} from '../auth/AuthContext'

class Signup extends Component {
    constructor (props) {
        super(props)
        this.state = {
            username:'',
            password:'',
        };
    }

    handleChange= (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
   handleSubmit=event =>{
        fetch("http://localhost:3000/user/register", {
            method: 'POST',
            body: JSON.stringify({user:this.state}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => { 
           this.props.auth.setToken(data.sessionToken)
            })
            event.preventDefault()
    }
    validateSignup =(event) => {
       this.setState({
           errorMessage: 'Fields must not be empty'
       })
       event.preventDefault();
    }
    render() {
        const submitHandler =!this.state.username ? this.validateSignUp : this.handleSubmit
   return (
<div>
<h1>Signup</h1>
<h6>Lorem ipsum dolor sit amet consectetur adipsisicin elit. Minus repellat, atque nulla, sluta vero reprehenderit numaqua incidunt, rem quareat quos volupt atum perferemdi. Distincitio culpa iste atque blanditis placeat qui ipsa? </h6>
<Form onSubmit={submithandler}>
    <FormGroup>
        <Label for="username"> username</Label>
            <Input id="username" type="text" name= "username" placeholder = "enter username" onChange ={this.handleChange} /> {this.state.errorMessage && <span className ="error"> user name is required </span>}</FormGroup><FormGroup> 
            <Label for ="password">Password</Label> 
            <Input id="su_password" type="password" name="password" placeholder= "enter password" onChange={this.handleChange} /></FormGroup>
            <Button type="submit">Submit</Button> 
            </Form>
        </div>
    )
}
}
export default props => (
    <AuthContext.Consumer>
    {auth => <Signup {...props} auth={auth} />
   </AuthContext.Consumer>
);
