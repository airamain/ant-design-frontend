// eslint-disable-next-line
export default (state, action) => {
    switch (action.type) {
        case 'INICIAR_SESION': return {...action.payload};
        case 'ACTUALIZAR_USUARIO': return {...state, ...action.payload};
        case 'CERRAR_SESION': 
            localStorage.removeItem('user-token');
            return { username: '', token: '' };
        default: return state;
    }
}