import {SignupFormulario} from '../componentes/signupformulario.js';
import { Alert, Card, Col, Container, Row } from "react-bootstrap";

function Signup () {
    return(
        <Container className="mt-4 mb-4">
            <Row className="justify-content-md-center">
                <Col sm="12" md="8" lg="6">
                    <Card.Body>
                        <SignupFormulario></SignupFormulario>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    )
}
export {Signup}