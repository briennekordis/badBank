import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "./context";

<style>

</style>

function CreateAccount() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const userContext = useContext(UserContext);
    let users = userContext.state.users;
    let nav = document.getElementById("nav1");
    if (nav !== null) {
        document.getElementById("nav1").className = "nav-item active";
        document.getElementById("nav2").className = "nav-item";
        document.getElementById("nav3").className = "nav-item";
        document.getElementById("nav4").className = "nav-item";    
    }
    
    function validate(field, label){
        if (!field) {
          setStatus(`Error: ${label} must be filled out`);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }

    function validatePassword(password) {
        if (password.length < 8) {
            setStatus(`Error: password must be at least 8 characters`);
            setTimeout(() => setStatus(''),3000);
            return false;
          }
          return true;           
    }
  
    function handleCreate(){
        if (!validate(name,     'name'))     return;
        if (!validate(email,    'email'))    return;
        if (!validatePassword(password, 'password')) return;
        users.push({name, email, password, balance:0});
        userContext.setUsers(users);
        setShow(false);
    }    
  
    function clearForm(){
      setName('');
      setEmail('');
      setPassword('');
      setShow(true);
    }

    return (
        <Card style={{ backgroundColor: "lightgray", color: "black", width: "18rem" }}>
            <Card.Header>Create Account</Card.Header>
            <Card.Body>
                {show ? ( 
                    <>
                        Name<br/>
                        <input type="input" className="form-control" id="name" placeholder="Enter name" onChange={e => setName(e.currentTarget.value)} /><br/>
                        Email address<br/>
                        <input type="input" className="form-control" id="email" placeholder="Enter email" onChange={e => setEmail(e.currentTarget.value)}/><br/>
                        Password<br/>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={e => setPassword(e.currentTarget.value)}/><br/>
                        <button type="submit" className="btn btn-light" id="createButton" disabled={name === "" && email === "" && password === ""} onClick={handleCreate}>Create Account</button><br/>
                        {status}
                    </>
                    ):( 
                    <>
                        <h5>Success</h5>
                        <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button> 
                    </> 
                    )}
            </Card.Body>
        </Card>
    );
    }

export default CreateAccount;
