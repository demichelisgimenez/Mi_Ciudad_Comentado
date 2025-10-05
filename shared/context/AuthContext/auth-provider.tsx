// ===============================================
// ARCHIVO: shared/context/AuthContext/auth-provider.tsx
// -----------------------------------------------
// Este archivo implementa el “Proveedor” (Provider) del contexto de autenticación.
// Se encarga de manejar el estado global del usuario (logueado / deslogueado),
// guardar o eliminar su sesión y exponer esos datos al resto de la app.
// ===============================================

// Importamos el contexto base que definimos en auth-context.ts
import AuthContext from "./auth-context";

// Importamos el hook useReducer de React para manejar el estado del contexto
import { useReducer } from "react";

// Importamos el tipo de usuario definido en la carpeta shared/models
import { IUser } from "@shared/models";

// Importamos las acciones permitidas (LOGIN, LOGOUT, etc.)
import { AUTH_ACTIONS } from "@shared/context/AuthContext/enums";

// Importamos funciones auxiliares para guardar o borrar el usuario del almacenamiento seguro
import { deleteUser, setUser } from "@utils/secure-store";

// ===============================================
// TIPADO DEL ESTADO Y DE LAS ACCIONES (TypeScript)
// -----------------------------------------------
// Esto mejora la seguridad del código y evita errores al despachar acciones.
// ===============================================

// Estructura que define cómo es una acción del reducer
interface Action {
  type: AUTH_ACTIONS; // tipo de acción (LOGIN o LOGOUT)
  payload?: any;      // datos adicionales (por ejemplo, user, token, etc.)
}

// Estructura del estado global del contexto
interface State {
  isLoading: boolean;        // indica si hay una carga en curso
  token: string | null;      // token de autenticación (si existe)
  user: IUser | null;        // información del usuario actual
  refreshToken: string | null; // token de refresco (opcional)
}

// ===============================================
// ESTADO INICIAL
// -----------------------------------------------
// Define cómo empieza el contexto antes de que el usuario inicie sesión.
// ===============================================
const initialState: State = {
  isLoading: false,
  token: null,
  user: null,
  refreshToken: null,
};

// ===============================================
// COMPONENTE PRINCIPAL: AuthProvider
// -----------------------------------------------
// Este componente envolverá la app completa para que el contexto
// esté disponible en todas las pantallas (Root, Drawer, etc.)
// ===============================================
const AuthProvider = (props: any) => {
  // useReducer recibe:
  //   1. una función reductora (reducer) que define cómo cambia el estado
  //   2. el estado inicial (initialState)
  //
  // Devuelve un arreglo con:
  //   [state] → el estado actual
  //   [dispatch] → función que ejecuta acciones para modificar el estado
  const [state, dispatch] = useReducer((prevState: State, action: Action) => {
    const { payload } = action; // extraemos el contenido de la acción (user, token, etc.)

    // Analizamos el tipo de acción recibida
    switch (action.type) {
      // ---------------------------------------
      // LOGIN → se ejecuta al iniciar sesión correctamente
      // ---------------------------------------
      case AUTH_ACTIONS.LOGIN:
        // Guardamos los datos del usuario en el almacenamiento seguro (persistencia local)
        setUser(payload.user);

        // Devolvemos un nuevo estado actualizado
        return {
          ...prevState,
          user: payload.user,              // guardamos el usuario
          token: payload.token,            // guardamos el token
          refreshToken: payload.refreshToken, // guardamos el token de refresco
        };

      // ---------------------------------------
      // LOGOUT → se ejecuta al cerrar sesión
      // ---------------------------------------
      case AUTH_ACTIONS.LOGOUT:
        // Borramos los datos del usuario del almacenamiento seguro
        deleteUser();

        // Reiniciamos todo el estado al valor inicial (sin sesión)
        return initialState;

      // ---------------------------------------
      // Cualquier otra acción no reconocida → no cambia el estado
      // ---------------------------------------
      default:
        return prevState;
    }

    // Fin del reducer
  }, initialState);

  // ===============================================
  // RENDER DEL PROVIDER
  // -----------------------------------------------
  // Exponemos el contexto (state y dispatch) a todos los hijos del componente.
  // ===============================================
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

// Exportamos el proveedor para usarlo en App.tsx o Root.tsx
export default AuthProvider;

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 ¿Qué hace este archivo?
// Este archivo implementa el sistema que **controla y mantiene el estado
// de autenticación global** de la aplicación.
//
// 🔹 ¿Cómo funciona internamente?
// 1️⃣ Se define un "estado global" con los datos del usuario y los tokens.
// 2️⃣ Se usa `useReducer` para manejar los cambios de ese estado.
// 3️⃣ El `AuthProvider` envuelve toda la app y permite acceder al contexto desde cualquier pantalla.
// 4️⃣ Cuando el usuario inicia sesión, se ejecuta `dispatch({ type: AUTH_ACTIONS.LOGIN, payload })`.
//     → Esto guarda los datos del usuario en memoria y en almacenamiento seguro (`setUser`).
// 5️⃣ Cuando el usuario cierra sesión, se ejecuta `dispatch({ type: AUTH_ACTIONS.LOGOUT })`.
//     → Esto borra la información del usuario y reinicia el estado (`deleteUser`).
//
// 🔹 Relación con otros archivos:
// - `auth-context.ts` → define el contenedor del contexto (el "espacio compartido").
// - `auth-provider.tsx` → administra la lógica (qué pasa al loguear / desloguear).
// - `@utils/secure-store` → guarda o elimina el usuario del almacenamiento persistente (async storage).
// - `@shared/models/IUser` → define la forma que debe tener el objeto “usuario”.
//
// 🔹 ¿Qué gana la app con esto?
// - Centraliza todo el control de sesión.
// - Permite que cualquier pantalla sepa si hay usuario activo (`state.user`).
// - Evita pasar props manualmente entre componentes.
// - Guarda los datos de sesión incluso si se cierra la app.
//
// 🔹 Conceptos claves a mencionar en la defensa:
//
// ✅ **useReducer:** Hook de React que maneja estados complejos mediante acciones.
// ✅ **Context + Provider:** Patrón de React para compartir estados globales.
// ✅ **Persistencia (setUser/deleteUser):** mantiene la sesión guardada localmente.
// ✅ **Desac acoplado:** separación entre la lógica (Provider), el modelo (IUser) y la vista (pantallas).
//
// 🔹 Ejemplo de uso dentro de la app:
// En `root.tsx`:
//
// ```tsx
// const { state, dispatch } = useContext(AuthContext);
//
// if (state.user) {
//   // Mostrar Drawer con las pantallas
// } else {
//   // Mostrar pantallas de autenticación (Login/Register)
// }
// ```
//
// Así, toda la app reacciona automáticamente si el usuario inicia o cierra sesión.
//
