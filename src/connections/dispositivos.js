import aireacondicionado from "../assets/images/dispositivos/aireacondicionado.png";
import televisor from "../assets/images/dispositivos/monitor-de-tv.png";
import puerta from "../assets/images/dispositivos/puerta.png";

const Dispositivos_data = [
    {
        "bloque": "bloqueA",
        "data": {
          "id": 1,
          "salones": [
            {
                "id":1,
                "nombresalon":"A101",
                "dispositivos":[
                    {
                        "id":1,
                        "nombre":"aire A101",
                        "imagen":aireacondicionado,
                        "estado": 1
                    },{
                        "id":2,
                        "nombre":"Puerta A101",
                        "imagen":puerta,
                        "estado":0
                    },{
                        "id":3,
                        "nombre":"televisor A101",
                        "imagen":televisor,
                        "estado":1
                    }
                ]
            },{
                "id": 2,
                "nombresalon":"A102",
                "dispositivos":[
                    {
                        "id":1,
                        "nombre":"televisor A102",
                        "imagen":televisor,
                        "estado":0
                    },{
                        "id":2,
                        "nombre":"aire A102",
                        "imagen":aireacondicionado,
                        "estado":0
                    },{
                        "id":3,
                        "nombre":"puerta A102",
                        "imagen":puerta,
                        "estado":0
                    }
                ]
            },{
                "id": 3,
                "nombresalon": "A103",
                "dispositivos":[
                    {
                        "id":1,
                        "nombre":"televisor A103",
                        "imagen":televisor,
                        "estado":1
                    },{
                        "id":2,
                        "nombre":"aire A103",
                        "imagen":aireacondicionado,
                        "estado":1
                    },{
                        "id":3,
                        "nombre":"puerta A103",
                        "imagen":puerta,
                        "estado":1
                    }
                ]
            },{
                "id": 4,
                "nombresalon": "A104",
                "dispositivos":[
                    {
                        "id":1,
                        "nombre":"televisor A104",
                        "imagen":televisor,
                        "estado":0
                    },{
                        "id":2,
                        "nombre":"aire A104",
                        "imagen":aireacondicionado,
                        "estado":0
                    },{
                        "id":3,
                        "nombre":"puerta A104",
                        "imagen":puerta,
                        "estado":0
                    }
                ] 
            },{
                "id": 5,
                "nombresalon":"A105",
                "dispositivos":[
                    {
                        "id":13,
                        "nombre":"televisor A105",
                        "imagen":televisor,
                        "estado":1
                    },{
                        "id":14,
                        "nombre":"aire A105",
                        "imagen":aireacondicionado,
                        "estado":1
                    },{
                        "id":15,
                        "nombre":"puerta A105",
                        "imagen":puerta,
                        "estado":0
                    }
                ]
            }
        ]
        }
    }
]
export default Dispositivos_data;