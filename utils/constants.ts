// ===============================================
// ARCHIVO: utils/constants.ts
// -----------------------------------------------
// Este archivo define **constantes globales** con los nombres de las rutas
// utilizadas en la navegación de la aplicación “Mi Ciudad”.
//
// Sirve para centralizar y mantener consistencia entre todas las pantallas,
// evitando errores por escribir los nombres de rutas manualmente (hardcodeados).
//
// Se usa tanto en:
//   - app/root.tsx (Stack principal)
//   - app/drawer/index.tsx (menú lateral)
//   - app/auth/index.tsx (pantallas de Login/Register)
// ===============================================

// -----------------------------------------------
// 1️⃣ RUTAS RAÍZ (ROOT_ROUTES)
// -----------------------------------------------
// Estas rutas controlan la navegación principal del proyecto.
// Se usan en el archivo “app/root.tsx”.
export const ROOT_ROUTES = {
  AUTH: "Auth",      // Pila de autenticación (Login/Register)
  SCREENS: "Screens" // Pila principal (con Drawer y pantallas internas)
} as const; // "as const" evita modificaciones accidentales

// -----------------------------------------------
// 2️⃣ RUTAS DE AUTENTICACIÓN (AUTH_ROUTES)
// -----------------------------------------------
// Usadas dentro de “app/auth/index.tsx”
// para definir las pantallas del stack de autenticación.
export const AUTH_ROUTES = {
  LOGIN: "Login",       // Pantalla de inicio de sesión
  REGISTER: "Register", // Pantalla de registro
} as const;

// -----------------------------------------------
// 3️⃣ RUTAS DEL DRAWER (DRAWER_ROUTES)
// -----------------------------------------------
// Definen todas las pantallas accesibles desde el menú lateral (DrawerNavigator).
// Se usan en “app/drawer/index.tsx”.
export const DRAWER_ROUTES = {
  INICIO: 'Inicio',       // Pantalla principal
  ESCUELAS: 'Escuelas',   // Mapa y listado de escuelas
  FARMACIAS: 'Farmacias', // Mapa y listado de farmacias
  RADIOS: 'Radios',       // Emisoras FM locales
  QR: 'QR',               // Escáner de códigos QR
  LOGIN: 'Login',         // (opcional) acceso al login desde el menú
  NOTAS: 'Notas',         // Notas personales del usuario
  AJUSTES: 'Ajustes',     // Configuraciones y preferencias
};

// ===============================================
// 🧭 EXPLICACIÓN PARA DEFENSA ORAL
// ===============================================
//
// 🔹 **Objetivo del archivo**
//    Centralizar los nombres de rutas de navegación.
//    Si el nombre cambia, solo se actualiza aquí y no en cada pantalla.
//
// 🔹 **Ventajas**
//    ✅ Evita errores de tipeo (por ejemplo “Farmacia” ≠ “Farmacias”)
//    ✅ Mejora la legibilidad del código
//    ✅ Permite mantener el proyecto escalable
//
// 🔹 **Ejemplo de uso**
//    ```tsx
//    import { DRAWER_ROUTES } from "@utils/constants";
//
//    navigation.navigate(DRAWER_ROUTES.FARMACIAS);
//    ```
//
// 🔹 **Estructura de navegación**
//    - **ROOT_ROUTES** → controla si el usuario ve AuthStack o DrawerNavigator
//    - **AUTH_ROUTES** → pantallas dentro del Stack de autenticación
//    - **DRAWER_ROUTES** → pantallas principales del menú lateral
//
// 🔹 **Conclusión**
//    Este archivo cumple un rol organizativo clave: permite una navegación coherente,
//    mantenible y libre de errores, ya que todos los nombres de rutas están definidos
//    en un solo lugar.
