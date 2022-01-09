import Deposit from "./deposit";
import React from "react";
import { Card } from "react-bootstrap";


function Login(){
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleLogin(){
    console.log(email,password);
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    // ctx.users.push({email,password});
    setShow(false);
  }    

  function clearForm(){
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card style={{ backgroundColor: "lavender", color: "black", width: "18rem" }}>
        <Card.Header>Login</Card.Header>
        <Card.Body>
            {show ? (  
                <>
                Email address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" onClick={handleLogin}>Login</button>
                </>
                ):(
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}></button>
                </>
                )}
        </Card.Body>
    </Card>
  )
}

export default Login;