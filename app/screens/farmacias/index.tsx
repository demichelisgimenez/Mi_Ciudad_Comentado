// ===============================================
// ARCHIVO: app/screens/farmacias/index.tsx
// Este archivo actúa como "puente" o punto de entrada de la pantalla Farmacias.
// ===============================================

// Importamos el componente principal Farmacias desde el archivo farmacias.tsx
// (que contiene toda la lógica y la interfaz de la pantalla)
import Farmacias from "./farmacias";

// Creamos un componente intermedio llamado FarmaScreen.
// Este componente simplemente devuelve <Farmacias />.
// Es una práctica común para mantener nombres consistentes entre las pantallas
// y la configuración del Drawer o Navigator.
export default function FarmaScreen() {
  // Renderizamos el componente principal Farmacias.
  // No tiene lógica adicional, solo encapsula y exporta.
  return <Farmacias />;
}

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo existe por organización y claridad:
//    - Mantiene la estructura de carpetas limpia.
//    - Permite que el Drawer (o Stack Navigator) importe la pantalla
//      directamente desde la carpeta "farmacias" sin tener que especificar "farmacias.tsx".
//
// 🔹 Ejemplo:
//    En el Drawer podés poner:
//        import FarmaScreen from "@app/screens/farmacias";
//    en lugar de:
//        import Farmacias from "@app/screens/farmacias/farmacias";
//
// 🔹 Es básicamente un “alias” o “wrapper” del componente principal.
//
// 🔹 Ventajas:
//    - Facilita reestructurar carpetas sin romper los imports.
//    - Si más adelante quisieras agregar lógica previa (por ejemplo,
//      comprobar conexión o permisos antes de mostrar el mapa),
//      podrías hacerlo acá sin modificar el componente principal Farmacias.
//
