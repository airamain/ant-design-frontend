import React, { useReducer } from 'react';
import userContext from './userContext';
import userReducer from './userReducer';

export default function UserState(props) {
  const initialState = { username: '', token: '' },
  [state, dispatch] = useReducer(userReducer, initialState),

  // iniciar sesión
  iniciarSesion = user => 
    dispatch({
      type: 'INICIAR_SESION',
      payload: user
    }),

  // actualizar usuario
  actualizarUsuario = user => dispatch({ type: 'ACTUALIZAR_USUARIO', payload: user }),

  // cerrar sesión
  cerrarSesion = () => dispatch({ type: 'CERRAR_SESION' });

  return (
    <userContext.Provider
      value={{ 
        user: state,
        iniciarSesion,
        actualizarUsuario,
        cerrarSesion,
      }}
    >
      { props.children }
    </userContext.Provider>
  );
}