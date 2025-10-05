// ===============================================
// ARCHIVO: shared/context/AuthContext/index.ts
// -----------------------------------------------
// Este archivo actúa como un “índice central” (barrel file) 
// que reexporta todos los elementos clave del sistema de autenticación.
//
// Su función es simplificar los imports en el resto del proyecto.
// En lugar de importar cada módulo por separado, 
// se pueden importar todos directamente desde esta carpeta.
// ===============================================

// Exporta el contexto base (donde se guarda el estado global del usuario)
export { default as AuthContext } from "./auth-context";

// Exporta el proveedor (lógica del reducer y actualización del contexto)
export { default as AuthProvider } from "./auth-provider";

// Exporta las constantes de acciones (enum con LOGIN, LOGOUT, etc.)
export { AUTH_ACTIONS } from "./enums";

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo reúne y expone todos los módulos del sistema de autenticación.
//    Es lo que se llama un **"barrel file"** (archivo barril),
//    porque “empaqueta” varias exportaciones en un solo punto.
//
// 🔹 Sin este archivo, tendrías que importar así:
//
//    ```tsx
//    import AuthContext from "@shared/context/AuthContext/auth-context";
//    import AuthProvider from "@shared/context/AuthContext/auth-provider";
//    import { AUTH_ACTIONS } from "@shared/context/AuthContext/enums";
//    ```
//
// 🔹 Con este archivo, podés hacerlo de forma más limpia:
//
//    ```tsx
//    import { AuthContext, AuthProvider, AUTH_ACTIONS } from "@shared/context/AuthContext";
//    ```
//
// 🔹 Esto mejora la organización, la lectura del código
//    y hace que los imports sean mucho más cortos y consistentes.
//
// 🔹 En resumen:
//
// | Exportación | Rol principal |
// |--------------|-----------------------------|
// | **AuthContext** | Contiene el estado global de autenticación. |
// | **AuthProvider** | Maneja la lógica (useReducer, login, logout, etc.). |
// | **AUTH_ACTIONS** | Define las acciones posibles (LOGIN, LOGOUT, etc.). |
//
// 🔹 Este patrón también se usa en otras partes del proyecto
// (por ejemplo, en `app/screens/index.tsx` o `auth/screens/index.tsx`),
// lo que demuestra una estructura ordenada, modular y profesional.
//
// OBJETIVO EN LA DEFENSA:
//
// Explicar que este archivo sirve para **organizar y centralizar** todo el sistema
// de autenticación, facilitando el mantenimiento y evitando imports largos
// o repetitivos en el resto del código.
//
