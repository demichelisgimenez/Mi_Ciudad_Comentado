// ===============================================
// ARCHIVO: app/screens/radios/index.tsx
// Este archivo funciona como punto de entrada (wrapper)
// para la pantalla principal "Radios".
// ===============================================

// Importamos el componente principal de la pantalla de Radios,
// que contiene toda la interfaz (emisoras, controles, presets, etc.)
import RadiosScreen from "./radios";

// Exportamos el componente como default.
// Esto permite importar la pantalla directamente desde la carpeta "radios"
// sin necesidad de indicar el archivo interno "radios.tsx".
export default RadiosScreen;

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo sirve para mantener la estructura del proyecto limpia y uniforme.
//    Gracias a él, en el Drawer o en el Stack podés importar así:
//
//        import RadiosScreen from "@app/screens/radios";
//
//    en lugar de:
//
//        import RadiosScreen from "@app/screens/radios/radios";
//
// 🔹 Este patrón se repite en todas las pantallas (Farmacias, Escuelas, Notas, Ajustes, QR)
//    y facilita futuras modificaciones.
//
// 🔹 En caso de necesitar agregar lógica adicional (por ejemplo,
//    comprobar conexión a internet antes de cargar las emisoras),
//    este index.tsx sería el lugar correcto para hacerlo.
//
// 🔹 En resumen:
//    No agrega código nuevo, pero mantiene el proyecto bien organizado,
//    mejora la legibilidad y hace más profesional la estructura general.
//
