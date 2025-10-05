// ===============================================
// ARCHIVO: app/auth/screens/index.tsx
// Este archivo centraliza las exportaciones de las pantallas
// de autenticación (Login y Register) para simplificar los imports.
// ===============================================

// Exporta la pantalla de Login como "Login"
// (desde el archivo login.tsx)
export { default as Login } from "./login";

// Exporta la pantalla de Registro como "Register"
// (desde el archivo register.tsx)
export { default as Register } from "./register";

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo actúa como un “índice” dentro de la carpeta de autenticación.
//    Su función es reunir las exportaciones de las pantallas Login y Register
//    para que puedan importarse fácilmente desde otros lugares del proyecto.
//
// 🔹 Ejemplo práctico:
//    En lugar de escribir:
//
//        import Login from "@app/auth/screens/login";
//        import { Register } from "@app/auth/screens/register";
//
//    Se puede hacer directamente:
//
//        import { Login, Register } from "@app/auth/screens";
//
// 🔹 Esto mejora la organización y mantiene un patrón coherente
//    con el resto de las carpetas del proyecto (por ejemplo, app/screens).
//
// 🔹 En resumen:
//    Este archivo no contiene lógica ni componentes visuales,
//    pero cumple un rol importante en la estructura del código:
//    👉 hace que el sistema de imports sea más limpio, profesional y fácil de mantener.
//
