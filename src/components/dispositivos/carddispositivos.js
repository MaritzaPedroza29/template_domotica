import { Card, Col, Row } from 'react-bootstrap';
import '../../css/index.css';
import Button from 'react-bootstrap/Button';
import { Botonapagar } from './botonapagar';
import { useState } from 'react';

function Carddispositivos({dispositivos, onEditName}){
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(dispositivos.nombre);

    const handleNameClick = () => {
        setIsEditing(true);
      };
    
      const handleNameChange = (event) => {
        setEditedName(event.target.value);
      };
    
      const handleNameSave = () => {
        onEditName(dispositivos.id, editedName);
        setIsEditing(false);
      };
    console.log(dispositivos);
    return (
        <Card className='mio-carddispositivos'>
            <Card.Body>
                <img src={dispositivos.imagen} alt="" className='mio-iconos' />
                {isEditing ? (
                <input
                    type="text"
                    value={editedName}
                    onChange={handleNameChange}
                />
                ) : (
                <Card.Title onClick={handleNameClick}>
                    {dispositivos.nombre}
                </Card.Title>
                )}
                {isEditing && (
                <Button onClick={handleNameSave} variant="success">Guardar</Button>
                )}
                <Botonapagar dispositivos={dispositivos} />
            </Card.Body>
        </Card>
      );
}
export {Carddispositivos};