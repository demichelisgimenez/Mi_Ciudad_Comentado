// ===============================================
// ARCHIVO: app/screens/qr/index.tsx
// Este archivo funciona como punto de entrada (wrapper)
// para la pantalla principal "QR".
// ===============================================

// Importamos el componente principal de la pantalla QR
// (el archivo qr.tsx que contiene toda la lógica del escaneo)
import QR from "./qr";

// Exportamos el componente por defecto.
// Esto permite importar la pantalla directamente desde la carpeta "qr"
// sin tener que especificar el archivo interno.
export default QR;

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo no agrega nueva lógica, pero mejora la organización del proyecto.
//    Permite importar la pantalla QR de forma más limpia, por ejemplo:
//
//        import QR from "@app/screens/qr";
//
//    en lugar de:
//
//        import QR from "@app/screens/qr/qr";
//
// 🔹 Este patrón se repite en todas las pantallas del proyecto
//    (Farmacias, Escuelas, Notas, Ajustes...) para mantener coherencia
//    y hacer más fácil la configuración de navegación.
//
// 🔹 En un futuro, si quisieras agregar lógica previa antes de mostrar la cámara
//    (por ejemplo, verificar permisos globales o mostrar un loader),
//    podrías hacerlo en este archivo sin modificar el componente principal.
//
// 🔹 En resumen:
//    Este index.tsx actúa como un “puente” o “entrada limpia” a la pantalla QR,
//    manteniendo la estructura del proyecto prolija y escalable.
//
