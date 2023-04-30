import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const {createUser} = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);


  const handelRegister = (event) =>{
    event.preventDefault();
     const form = event.target
     const name = form.name.value;
     const photo = form.photo.value;
     const email = form.email.value;
     const password = form.password.value;
     console.log(name, password, email, photo)

     createUser(email, password)
      .then(result =>{
        const createUser = result.user;
        console.log(createUser)
         form.reset();
      })
      .catch(error =>{
        console.log(error)
      })
  }

const handleAcc = event =>{
  setAccepted(event.target.checked);
}

  return (
    <Container className="w-25 mx-auto">
      <h3>Please register</h3>
      <Form onSubmit={handelRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo url</Form.Label>
          <Form.Control
            type="text"
            name="photo"
            placeholder="Photo url"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
          onClick={handleAcc}
            name="accept"
            type="checkbox"
            label={<>Accept <Link to="/terms">Terms an condition</Link></>}
          />
        </Form.Group>
        <Button variant="primary" 
        disabled={!accepted} 
        type="submit">
          Register
        </Button>
        <br />
        <Form.Text className="text-success">
          Already Have an account? <Link to="/login">Login</Link>
        </Form.Text>
        <br />
        <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
