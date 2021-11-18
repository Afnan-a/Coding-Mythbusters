import React, {useEffect, useState, useRef } from 'react' 
import { auth, signInWithEmailAndPassword } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { Form, Button, Card } from 'react-bootstrap'
import { Link, useHistory } from "react-router-dom";



export default function Signin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const history = useHistory();
    useEffect(() => {
      if (loading) return;
      if (user) history.replace("/dashboard");
    }, [user, loading]);


    return (
        <><Card>
            <Card.Body>
                <h2 className="text-center mb-4">Sign In</h2>
                <Form>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button className="w-100" type="submit" onClick={() => signInWithEmailAndPassword(email, password)}>
                        Sign In
                    </Button>
                </Form>
            </Card.Body>
        </Card></>
    )

}
 