import React, {useState} from 'react';
import {Form, Button, Container} from "react-bootstrap";
import {ReactComponent as LogoIcon} from "./deloittenewsmall.svg";
import {Link} from "react-router-dom";
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

const Login = (props) => {
    const { showPageHeader } = props;
    const history = useHistory();
    const [email, setEmail] = useState('');
    return (
        <Container className={"d-flex align-items-center justify-content-center flex-column h-100"} style={{marginTop: 100}}>
            <LogoIcon className={"mb-4"}/>
            <h2 style={{marginBottom: 20}}>
                Log in
            </h2>
            <Form style={{minWidth: 300}}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter email"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>

                    <Button  onClick={()=>{
                        showPageHeader(email)
                        Cookies.set('email',email)
                        history.push('/')}} style={{minWidth: 300, backgroundColor: "#0076ce"}} variant="primary" type="submit">
                        Log in
                    </Button>

                <Link to="/">
                    <h6 style={{color: "#000000", marginTop: 20, textAlign: "center"}}>
                        <span>Forgot your password?</span>
                    </h6>
                </Link>

            </Form>
        </Container>
    );
};

export default Login;