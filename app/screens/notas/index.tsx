// ===============================================
// ARCHIVO: app/screens/notas/index.tsx
// Este archivo funciona como punto de entrada (wrapper)
// para la pantalla principal "Notas".
// ===============================================

// Importamos el componente principal de la pantalla de Notas,
// que contiene toda la interfaz (input, botones, lista, etc.)
import NotasScreen from "./notas";

// Exportamos el componente como default.
// Esto permite importar la pantalla directamente desde la carpeta "notas"
// sin tener que especificar el archivo interno "notas.tsx".
export default NotasScreen;

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo existe por organización del proyecto.
//    Facilita que las rutas del Drawer o Stack puedan importar así:
//
//        import NotasScreen from "@app/screens/notas";
//
//    en lugar de:
//
//        import NotasScreen from "@app/screens/notas/notas";
//
// 🔹 Es una buena práctica en proyectos con muchas pantallas,
//    porque mantiene la estructura más limpia y profesional.
//
// 🔹 Si en el futuro se necesitara agregar lógica adicional
//    (por ejemplo, verificar permisos antes de abrir la pantalla,
//     o cargar datos desde una API),
//    este archivo sería el lugar ideal para hacerlo.
//
// 🔹 En resumen:
//    No agrega código funcional, pero sí mejora la legibilidad,
//    la escalabilidad y la organización del proyecto.
//
