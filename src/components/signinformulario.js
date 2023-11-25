import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link,} from "react-router-dom";
import { useState } from 'react';
import "../css/index.css"
import miImagen from '../img/smartfesc.png';

function SigninFormulario({callback}){
    
    const enviarFormulario = (e) => {
      e.preventDefault();
      callback();
    }
    return(
        <div className="mio-signin template d-flex justify-content-center align-items-center 100-w vh-100">
            <div className="mio-center">
                <img
                    src={miImagen}
                    alt=""
                    className='mio-imagen'
                />
            </div>
            <div className="50-w p-2 rounded background mt-4">
                <Form onSubmit={enviarFormulario}>
                    <h3 className="text-center">Iniciar sesión</h3>
                    <div className="mb-2">
                        <Form.Label htmlFor="email">usuario</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese su usuario"
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
                        <Button type="submit" className="">Iniciar sesión</Button>
                    </div>
                    <p className="text-end mt-2">
                        Olvido <a href="">su Contraseña?</a><Link to="/signup" className="ms-2 link">Registrarse</Link>
                    </p>
                </Form>
            </div>
        </div>
    )
}
export {SigninFormulario}