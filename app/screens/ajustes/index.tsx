// ===============================================
// ARCHIVO: app/screens/ajustes/index.tsx
// Este archivo funciona como punto de entrada (wrapper)
// para la pantalla principal "Ajustes".
// ===============================================

// Importamos el componente principal AjustesScreen
// (que contiene toda la interfaz y la lógica del archivo ajustes.tsx)
import AjustesScreen from "./ajustes";

// Exportamos directamente el componente como default.
// Esto permite importar la pantalla desde la carpeta "ajustes"
// sin tener que especificar el archivo interno.
export default AjustesScreen;

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este index.tsx sirve solo como "puerta de entrada" a la pantalla Ajustes.
//    Gracias a él, en el Drawer o en el Stack se puede importar así:
//
//        import AjustesScreen from "@app/screens/ajustes";
//
//    en lugar de:
//
//        import AjustesScreen from "@app/screens/ajustes/ajustes";
//
// 🔹 Esto mantiene la estructura de carpetas ordenada,
//    y te permite agregar lógica adicional más adelante (por ejemplo,
//    comprobaciones de sesión o temas globales) sin modificar el archivo principal.
//
// 🔹 En resumen:
//    Este index no agrega funcionalidad nueva,
//    pero mejora la organización, la legibilidad y la escalabilidad del proyecto.
//
