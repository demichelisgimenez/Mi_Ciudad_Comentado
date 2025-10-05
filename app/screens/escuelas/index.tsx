// ===============================================
// ARCHIVO: app/screens/escuelas/index.tsx
// Este archivo funciona como punto de entrada (wrapper)
// para la pantalla principal "Escuelas".
// ===============================================

// Importamos el componente principal de la pantalla de Escuelas,
// que contiene toda la lógica y la interfaz (mapa, lista, etc.)
import Escuelas from "./escuelas";

// Definimos un componente contenedor llamado EscuelasScreen.
// Este componente no tiene lógica propia: simplemente devuelve <Escuelas />.
// Su función es mantener la estructura de carpetas limpia y uniforme
// dentro del sistema de navegación (Drawer o Stack Navigator).
export default function EscuelasScreen() {
  // Renderizamos el componente principal de Escuelas.
  return <Escuelas />;
}

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo se usa por organización del proyecto.
//    Permite importar la pantalla directamente desde la carpeta "escuelas"
//    sin tener que especificar el archivo "escuelas.tsx" en el import.
//
// 🔹 Ejemplo práctico:
//    En el DrawerNavigator se puede escribir:
//        import EscuelasScreen from "@app/screens/escuelas";
//    en lugar de:
//        import Escuelas from "@app/screens/escuelas/escuelas";
//
// 🔹 Esto mejora la legibilidad y permite agregar en el futuro
//    código adicional (por ejemplo, validaciones o loaders)
//    sin tener que modificar el componente principal.
//
// 🔹 En resumen:
//    Este index.tsx actúa como "puerta de entrada" a la pantalla,
//    manteniendo la estructura del proyecto organizada y profesional.
//
