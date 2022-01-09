import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "./context";


function Deposit(){
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [deposit, setDeposit] = React.useState(0);
    const userContext = useContext(UserContext);
    let users = userContext.state.users;
    let balance = users[0].balance;


  function validate(num){
      if (isNaN(parseFloat(num))) {
        setStatus('Error: Please enter a number');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }  

  function negValidate(num){
    if (num < 0 ) {
      setStatus('Error: You cannot deposit a negative amount. Please enter a number greater than 0.');
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    return true;
}  

function amountChanged(amount) {
  document.getElementById("depositButton").disabled = amount === "";
  setDeposit(amount);
}
  function handleSubmit() {
    console.log(deposit);
    if (!validate(deposit) || (!negValidate(deposit)))   
     return;
    balance += parseFloat(deposit);
      users[0].deposits.push(parseFloat(deposit));
      users[0].balance = balance;
    alert(`Success! Deposited ${deposit} : New balance ${balance}`);
    setShow(false);
  };

  function clearForm(){
    setDeposit(0);
    setShow(true);
  }
  
  
  return (
    <Card style={{ backgroundColor: "lightgreen", color: "black", width: "18rem" }}>
        <Card.Header>Deposit</Card.Header>
        <Card.Body>
            {show ? (  
                <>
                Your balance is currently: ${balance}<br/>
                <br/>
                Deposit Amount<br/>
                <input type="input" className="form-control" id="depositAmount" placeholder="Deposit Amount" value={deposit} onChange={e => amountChanged(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light" id="depositButton" disabled={deposit === "" || deposit === 0} onClick={handleSubmit}>Deposit</button><br/>
                {status}
                </>
                ):(
                <>
                <h5>Transaction Successful</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}>Make Another Deposit</button>
                </> 
                )}
        </Card.Body> 
    </Card>
  )
}

export default Deposit;