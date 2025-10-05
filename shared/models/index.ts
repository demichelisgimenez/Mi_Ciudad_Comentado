// ===============================================
// ARCHIVO: shared/models/index.ts
// -----------------------------------------------
// Este archivo centraliza y reexporta todos los modelos de datos del proyecto.
//
// Los “modelos” definen la estructura (o forma) que tienen los objetos
// que maneja la aplicación: por ejemplo, un Usuario o un Lugar.
//
// Este patrón se conoce como "barrel file" (archivo índice),
// y permite importar los modelos desde un solo punto.
// ===============================================

// Exporta el modelo y la interfaz del Usuario
// User → clase o función que representa un usuario
// IUser → interfaz (estructura de tipo) del objeto usuario
export { User, IUser } from "./user";

// Exporta el modelo y la interfaz de los Lugares (por ejemplo, farmacias, escuelas, etc.)
// Place → clase o función que representa un lugar
// IPlace → interfaz (estructura de tipo) del objeto lugar
export { Place, IPlace } from "./place";

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo es un **índice de modelos**.
//    Su función es reunir y exportar todos los modelos definidos en la carpeta `models`.
//
// 🔹 Gracias a esto, el resto de la app puede importar modelos con una sola línea:
//
//    ```tsx
//    import { IUser, IPlace } from "@shared/models";
//    ```
//
//    En lugar de:
//
//    ```tsx
//    import { IUser } from "@shared/models/user";
//    import { IPlace } from "@shared/models/place";
//    ```
//
// 🔹 Esto mejora la organización del código, 
//    facilita los imports y mantiene un estilo uniforme con el resto del proyecto
//    (por ejemplo, `app/screens/index.tsx` o `context/AuthContext/index.ts`).
//
// 🔹 Conceptos clave:
//
// | Elemento | Descripción |
// |-----------|-------------|
// | **User / IUser** | Define cómo es un usuario dentro de la app (nombre, email, token, etc.). |
// | **Place / IPlace** | Define cómo es un lugar (nombre, dirección, coordenadas, etc.). |
// | **index.ts** | Centraliza la exportación de todos los modelos para una mejor organización. |
//
// 🔹 En resumen:
// Este archivo no contiene lógica, pero **organiza y simplifica** el uso
// de todos los modelos de datos del proyecto,
// siguiendo un patrón modular, limpio y escalable.
//
// OBJETIVO EN LA DEFENSA:
//
// Explicar que los modelos definen la “estructura de datos” del sistema,
// y que este `index.ts` funciona como un punto de acceso central
// para importar cualquiera de esos modelos de forma clara y profesional.
//
