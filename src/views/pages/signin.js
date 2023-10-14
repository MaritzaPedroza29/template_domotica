import {SigninFormulario} from '../componentes/signinformulario.js';
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

function Signin () {
    const navegar=useNavigate();
   
    const login=() =>{
        console.log("llama a la función login");
            navegar("/pagina-principal");
    }
    return(
        <Container className="mt-3 mb-3">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <Card.Body>
                        <SigninFormulario callback={login}></SigninFormulario>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}
export {Signin}
