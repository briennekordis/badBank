import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { UserContext } from "./context";


function AllData(){
  const userContext = useContext(UserContext);
  let users = userContext.state.users;
  console.log(JSON.stringify(users));

  return (
    <Card style={{ backgroundColor: "lightsalmon", color: "black", width: "44rem" }}>
      <Card.Header>All Data in Store</Card.Header>
      <Card.Body>
        {JSON.stringify(users)}<br/> 
      </Card.Body>

    </Card>
    
  );
}

export default AllData;