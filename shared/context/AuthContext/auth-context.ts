// ===============================================
// ARCHIVO: shared/context/AuthContext.ts
// Rol: Definir el CONTEXTO de Autenticación para toda la app.
// Un "Context" permite compartir datos globales (ej: usuario logueado)
// sin tener que pasarlos como props por todos los componentes.
// ===============================================

import { Context, createContext } from "react";

// (OPCIONAL PERO RECOMENDADO) Tipos para mejorar DX y evitar 'any'.
// Podés reemplazar estos 'types' por los que uses en tu proyecto real.
type AuthUser = {
  id?: string;
  nombre?: string;
  email?: string;
  // ...otros campos que manejes para el usuario
} | null;

type AuthState = {
  user: AuthUser;       // usuario actual (null si no hay sesión)
};

type AuthAction =
  | { type: "SET_USER"; payload: { user: AuthUser } }
  | { type: "LOGOUT" }; // ejemplo de otra acción típica

type AuthContextValue = {
  state: AuthState;                     // estado global de auth
  dispatch: (action: AuthAction) => void; // función para enviar acciones al reducer
};

// ===============================================
// VALOR POR DEFECTO DEL CONTEXTO
// -----------------------------------------------
// OJO: este valor SOLO se usa si algún componente
// intenta leer el contexto SIN estar envuelto por un Provider.
// Lo normal es envolver tu app con <AuthProvider> y sobreescribir esto.
//
// Antes tenías: Context<any> y state: {}, dispatch: () => {}
// Acá lo tipamos y damos un estado inicial predecible.
// ===============================================
const defaultValue: AuthContextValue = {
  state: { user: null },
  dispatch: () => {
    // Esta función "vacía" evita errores si alguien usa el contexto
    // sin Provider. En tiempo de ejecución hará nothing,
    // pero en desarrollo te conviene envolver SIEMPRE con el Provider real.
  },
};

// ===============================================
// CREACIÓN DEL CONTEXTO
// -----------------------------------------------
// createContext recibe un valor inicial (defaultValue) y
// retorna un objeto Context que vas a consumir con useContext(AuthContext).
// ===============================================
const AuthContext: Context<AuthContextValue> = createContext(defaultValue);

// Export por defecto: lo vas a importar donde necesites usar useContext(AuthContext)
export default AuthContext;

/*
===============================================
CÓMO SE USA (RESUMEN RÁPIDO)
===============================================

1) Crear un Provider (en otro archivo, ej: shared/context/AuthProvider.tsx):

import React, { useReducer } from "react";
import AuthContext from "./AuthContext";

const initialState = { user: null };

function authReducer(state: typeof initialState, action: any) {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload.user };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

2) Envolver tu app con el Provider (por ejemplo en App.tsx o app/_layout.tsx):
   <AuthProvider>
     <Root />  // tu navegación raíz
   </AuthProvider>

3) Leer/actualizar en cualquier componente:
   import { useContext } from "react";
   import AuthContext from "@shared/context/AuthContext";

   const { state, dispatch } = useContext(AuthContext);
   console.log(state.user);

   // Para setear usuario:
   dispatch({ type: "SET_USER", payload: { user: { id: "1", email: "a@b.com" } } });

   // Para cerrar sesión:
   dispatch({ type: "LOGOUT" });

NOTA: En tu root.tsx ya estás usando { state, dispatch } desde AuthContext.
      Este archivo define SOLO el "contenedor" (el Context).
      La lógica real vive en el Provider + reducer (que tal vez ya tengas).
*/
