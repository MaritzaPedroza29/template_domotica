import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../css/index.css';

function SignupFormulario (){
    return(
        <div className="mio-signup template d-flex justify-content-center align-items-center 100-w vh-100">
            <div className="50-w p-2 rounded background mt-4">
                <Form>
                    <h3 className="text-center">Registrarse</h3>
                    <div className="mb-2">
                        <Form.Label htmlFor="lname">Nombre</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su nombre"
                                className="form-control"
                            />
                    </div>
                    <div className="mb-2">
                        <Form.Label htmlFor="email">correo</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Ingrese su correo"
                                className="form-control"
                            />
                    </div>
                    <div className="mb-2">
                        <Form.Label htmlFor="password">Contraseña</Form.Label>
                            <Form.Control
                            type="password"
                            placeholder="Ingrese su contraseña"
                            className="form-control"
                        />
                    </div>
                    <div className="mio-botones d-grid">
                        <Button className="">Registrarse</Button>
                    </div>
                    <p className="text-end mt-2">
                        ya se ha registrado!<Link to="/" className="ms-2">Iniciar sesión</Link>
                    </p>
                </Form>
            </div>
        </div>
    )
}
export {SignupFormulario}