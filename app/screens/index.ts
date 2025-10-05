// ===============================================
// ARCHIVO: app/screens/index.tsx
// Este archivo centraliza y exporta todas las pantallas de la aplicación.
// Gracias a esto, se pueden importar fácilmente desde un solo lugar.
// ===============================================

// Importamos cada pantalla principal del proyecto.
// Esto incluye tanto las pantallas base (Inicio) como las funcionales (Escuelas, Farmacias, etc.)
import InicioScreen from "./inicio";               // Pantalla de inicio principal
import Escuelas from "./escuelas/index";           // Pantalla de escuelas
import Farmacias from "./farmacias/index";         // Pantalla de farmacias
import QR from "./qr/index";                       // Pantalla del lector de códigos QR
import RadiosScreen from "./radios/index";         // Pantalla de radios locales
import NotasScreen from "./notas/index";           // Pantalla de notas personales
import AjustesScreen from "./ajustes/index";       // Pantalla de ajustes o preferencias del usuario

// Exportamos todas las pantallas juntas.
// Esto permite que en otros archivos (por ejemplo, el DrawerNavigator)
// podamos importarlas con una sola línea:
//
//    import { InicioScreen, Farmacias, Escuelas, QR, RadiosScreen, NotasScreen, AjustesScreen } from "@app/screens";
//
export {
  InicioScreen,
  Escuelas,
  Farmacias,
  QR,
  RadiosScreen,
  NotasScreen,
  AjustesScreen,
};

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo actúa como un “índice global” de pantallas.
//    Su función es reunir todas las exportaciones de pantallas
//    en un solo lugar, simplificando los imports del resto del proyecto.
//
// 🔹 Por ejemplo, sin este archivo tendrías que importar cada pantalla así:
//
//      import InicioScreen from "@app/screens/inicio";
//      import Farmacias from "@app/screens/farmacias";
//      import Escuelas from "@app/screens/escuelas";
//
//    Con este index.tsx, solo escribís:
//
//      import { InicioScreen, Farmacias, Escuelas } from "@app/screens";
//
// 🔹 Esto hace que el código sea más limpio, más fácil de mantener,
//    y evita errores por rutas largas o repetitivas.
//
// 🔹 En resumen:
//    - Centraliza todas las pantallas en un solo punto.
//    - Mejora la organización del proyecto.
//    - Hace más fácil la configuración de navegación (Drawer, Stack o Tabs).
//    - Mantiene el mismo patrón profesional que el resto del código.
//
