// ===============================================
// ARCHIVO: shared/context/AuthContext/enums.ts
// -----------------------------------------------
// Este archivo define las “acciones” posibles del sistema de autenticación
// como un ENUM de TypeScript. 
// Los enums sirven para escribir nombres de acciones más claros,
// seguros y fáciles de mantener, evitando errores de escritura en strings.
// ===============================================

// Definimos un enumerado (enum) llamado AUTH_ACTIONS.
// Cada valor representa una acción que puede ejecutar el AuthProvider
// (por ejemplo: iniciar sesión, cerrar sesión, etc.)
export enum AUTH_ACTIONS {
  // Iniciar sesión del usuario (login)
  LOGIN = "LOGIN",

  // Cerrar sesión del usuario (logout)
  LOGOUT = "LOGOUT",

  // Guardar o actualizar el token de autenticación
  SET_TOKEN = "SET_TOKEN",

  // Guardar o actualizar los datos del usuario
  SET_USER = "SET_USER",

  // Cambiar el estado de “cargando” (por ejemplo, al iniciar sesión)
  SET_LOADING = "SET_LOADING",

  // Cambiar el estado de carga de recursos adicionales (imágenes, datos, etc.)
  SET_ASSETS_LOADING = "SET_ASSETS_LOADING",
}

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 ¿Qué es un ENUM?
// Un `enum` (enumeración) en TypeScript es una lista de valores constantes
// con nombres descriptivos. 
// En este caso, representa las distintas **acciones posibles**
// que puede ejecutar el sistema de autenticación.
//
// 🔹 ¿Por qué se usa?
// - Evita errores de escritura (por ejemplo, "logIn" vs "LOGIN").
// - Permite mantener todas las acciones en un solo lugar centralizado.
// - Hace que el código del reducer sea más legible y mantenible.
//
// 🔹 ¿Dónde se usa este enum?
// - Dentro del `auth-provider.tsx` para identificar las acciones del reducer.
//   Ejemplo:
//
//   ```tsx
//   switch (action.type) {
//     case AUTH_ACTIONS.LOGIN:
//       ...
//     case AUTH_ACTIONS.LOGOUT:
//       ...
//   }
//   ```
//
// - También se puede usar en cualquier parte de la app donde se dispare una acción,
//   por ejemplo:
//
//   ```tsx
//   dispatch({ type: AUTH_ACTIONS.SET_USER, payload: { user: data } });
//   ```
//
// 🔹 ¿Qué representa cada acción?
//
// | Acción | Descripción |
// |:-------------------|:------------------------------------|
// | **LOGIN** | Guarda los datos del usuario y sus tokens al iniciar sesión. |
// | **LOGOUT** | Borra la información del usuario (cierra sesión). |
// | **SET_TOKEN** | Actualiza o guarda el token actual sin cambiar el usuario. |
// | **SET_USER** | Cambia los datos del usuario (por ejemplo, si se editan). |
// | **SET_LOADING** | Controla el estado de carga general (pantalla de login o fetch inicial). |
// | **SET_ASSETS_LOADING** | Indica si la app está cargando recursos (como imágenes, íconos, etc.). |
//
// 🔹 Ventajas de este enfoque:
// - Código más claro y mantenible.
// - Facilita el trabajo en grupo (todos usan los mismos nombres de acciones).
// - Evita errores por strings mal escritos.
// - Mejora la integración con TypeScript (autocompletado y chequeo de tipos).
//
// 🔹 En resumen:
// Este archivo actúa como el “diccionario” de acciones que el AuthProvider
// entiende y puede ejecutar. Es una pieza pequeña pero fundamental
// dentro del sistema de autenticación global.
//
