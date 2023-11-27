const API_URL="http://localhost:3000/"

export const SIGNUP_GET_ENDPOINT= API_URL+"user";
export const CREARUSUARIOS_POST_ENDPOINT= API_URL+"user";
export const ELIMINARUSUARIOS_DELETE_ENDPOINT= API_URL+"user";
export const ACTUALIZARUSUARIO_PATCH_ENDPOINT= API_URL+"user";
export const OBTENERIDDISPOSITIVOS_GET_ENDPOINT= API_URL+"dispositivos";
export const OBTENERSALONES_GET_ENDPOINT= API_URL+"salones";
export const OBTENERINFODISPOSITIVOS_GET_ENDPOINT= API_URL+"dispositivos/datadevice"
export const APIDEVICE_POST_ENDPOINT = API_URL+"switchbot/send-command";
export const COMANDOS_POST_ENDPOINT =  API_URL+"dispositivos/comando";
export const COMANDOSAIRE_POST_ENDPOINT = API_URL+"dispositivos/comandoaire";
export const SIGIN_POST_ENDPOINT = API_URL+"auth/login";
export const AUTORIZADO_GET_ENDPOINT = API_URL+"auth/profile";
/*export const SIGIN_POST_ENDPOINT= API_URL+"/usuario/login"
export const MISPARTIDOS_GET_ENDPOINT= API_URL+"/usuario/mispartidos";
export const CREARPARTIDO_POST_ENDPOINT= API_URL+"/partido";
export const PARTIDOSCREADOS_GET_ENDPOINT= API_URL+"/partido";
export const PARTIDODETALLE_GET_ENDPOINT= API_URL+"/partido";
export const ELIMINARPARTIDO_DELETE_ENDPOINT= API_URL+"/partido";
export const ACTUALIZARPARTIDO_PUT_ENDPOINT= API_URL+"/partido";*/

