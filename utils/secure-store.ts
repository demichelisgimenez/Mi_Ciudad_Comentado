// ===============================================
// ARCHIVO: utils/secure-store.ts
// -----------------------------------------------
// Este archivo maneja el **almacenamiento seguro de datos sensibles**
// (como usuario, tokens, etc.) utilizando la librería “expo-secure-store”.
//
// “expo-secure-store” guarda información en un área cifrada del dispositivo,
// inaccesible para otras apps, ideal para credenciales o sesiones de usuario.
// ===============================================

// Importamos el módulo de almacenamiento seguro de Expo
import * as SecureStore from "expo-secure-store";

// Importamos la interfaz IUser para tipar correctamente el usuario guardado
import { IUser } from "@shared/models";

// Prefijo común para todas las claves de almacenamiento
// Esto evita posibles conflictos con otras apps o datos locales.
const STORAGE_NAME = "MI_CIUDAD_";

// -----------------------------------------------
// CLAVES DE ALMACENAMIENTO
// -----------------------------------------------
// Definimos las “keys” únicas para cada tipo de dato que queremos guardar.
export const STORAGE_KEYS = {
  JWT_TOKEN: "jwtToken",          // Token de autenticación
  USER: "user",                   // Datos del usuario logueado
  JWT_REFRESH_TOKEN: "jwtRefreshToken", // Token de refresco
  DEVICE_ID: "deviceId",          // Identificador del dispositivo
};

// -----------------------------------------------
// FUNCIONES BASE PRIVADAS
// -----------------------------------------------
// Estas funciones internas (_setItem, _getItem, _deleteItem)
// agregan automáticamente el prefijo STORAGE_NAME y manejan el acceso al SecureStore.

const _setItem = (key: any, value: any, options?: any) =>
  SecureStore.setItemAsync(`${STORAGE_NAME}${key}`, value, options);

const _getItem = (key: string) =>
  SecureStore.getItemAsync(`${STORAGE_NAME}${key}`);

const _deleteItem = (key: string) =>
  SecureStore.deleteItemAsync(`${STORAGE_NAME}${key}`);

// -----------------------------------------------
// FUNCIONES PÚBLICAS ESPECÍFICAS
// -----------------------------------------------
// Estas son las que se usan desde otros módulos del proyecto.

// 🔹 Guarda un usuario (objeto IUser) convertido a JSON
const setUser = (user: IUser) => _setItem(STORAGE_KEYS.USER, JSON.stringify(user));

// 🔹 Recupera el usuario almacenado (si existe) y lo convierte de vuelta a objeto
const getUser = async () => {
  const user = await _getItem(STORAGE_KEYS.USER);
  return user ? JSON.parse(user) : null; // Si no hay usuario, devuelve null
};

// 🔹 Elimina el usuario almacenado (por ejemplo, al cerrar sesión)
const deleteUser = () => _deleteItem(STORAGE_KEYS.USER);

// Exportamos las funciones públicas para que puedan usarse en otros archivos
export { setUser, getUser, deleteUser };


// ===============================================
// 🧭 EXPLICACIÓN PARA DEFENSA ORAL
// ===============================================
//
// 🔹 **Función del archivo**
// Este módulo encapsula el manejo del almacenamiento seguro.
// Guarda datos como el usuario o tokens dentro del “Secure Store” de Expo,
// que cifra la información y la protege del acceso externo.
//
// 🔹 **Librería usada**
// `expo-secure-store` — propia del ecosistema Expo/React Native.
//
// 🔹 **Por qué es importante**
// En una app con autenticación, los datos de sesión (usuario, token)
// no pueden almacenarse en texto plano ni en AsyncStorage, ya que
// podrían ser accesibles por otras apps o por el usuario.
//
// 🔹 **Cómo se usa**
// Desde el `AuthProvider` y el `root.tsx`:
//
// ```tsx
// import { setUser, getUser, deleteUser } from "@utils/secure-store";
//
// // Guardar usuario
// setUser(userData);
//
// // Obtener usuario al iniciar la app
// const user = await getUser();
//
// // Borrar usuario al cerrar sesión
// deleteUser();
// ```
//
// 🔹 **Resumen**
// - `setUser`: guarda el usuario logueado.
// - `getUser`: recupera la sesión activa.
// - `deleteUser`: limpia la sesión (logout).
//
// ✅ **Conclusión:** este archivo es clave para mantener la seguridad y
// persistencia de la sesión del usuario en la app “Mi Ciudad”.
// Permite que al reiniciar la app, el usuario siga autenticado
// hasta que decida cerrar sesión.
