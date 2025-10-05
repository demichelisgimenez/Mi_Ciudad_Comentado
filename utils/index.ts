// ===============================================
// ARCHIVO: utils/index.ts
// -----------------------------------------------
// Este archivo actúa como un **punto de entrada central (index barrel)**,
// es decir, reúne y reexporta (exporta nuevamente) varios módulos
// ubicados dentro de la carpeta “utils”.
//
// Gracias a esto, otras partes del proyecto pueden importar desde "@utils"
// sin necesidad de escribir rutas largas o complicadas.
//
// Ejemplo:
//    ✅ import { colors, sizes } from "@utils";
//    en lugar de:
//    ❌ import { colors } from "../../utils/colors";
// ===============================================

// -----------------------------------------------
// Importación de módulos internos
// -----------------------------------------------

// Paleta de colores generales de la app
import { colors } from "./colors";

// Escalas de tamaños globales (fuentes, márgenes, paddings, etc.)
import { sizes } from "./sizes";

// Estilos específicos de distintas pantallas
import { farmaciasStyles } from "./styles/farmacias";
import { inicioStyles } from "./styles/inicio";
import { qrStyles } from "./styles/qr";
import { radiosStyles } from "./styles/radios";

// -----------------------------------------------
// Reexportación de todos los módulos
// -----------------------------------------------
// De esta forma, otros archivos pueden importar todo directamente desde "@utils"
export { colors, sizes, farmaciasStyles, inicioStyles, qrStyles, radiosStyles };


// ===============================================
// 🧭 EXPLICACIÓN PARA DEFENSA ORAL
// ===============================================
//
// 🔹 **Función principal del archivo**
// Este `index.ts` agrupa y reexporta todos los utilitarios del proyecto.
// Cumple el rol de “barrel file”: un archivo que centraliza exportaciones.
//
// 🔹 **Ventajas**
//   ✅ Simplifica los imports en todo el proyecto.
//   ✅ Aumenta la legibilidad y la organización del código.
//   ✅ Facilita el mantenimiento: si se cambia la estructura interna,
//      las importaciones externas no se ven afectadas.
//
// 🔹 **Ejemplo práctico**
//   En vez de hacer esto:
//   ```tsx
//   import { farmaciasStyles } from "../../utils/styles/farmacias";
//   ```
//
//   Se puede hacer así (más limpio y profesional):
//   ```tsx
//   import { farmaciasStyles } from "@utils";
//   ```
//
// 🔹 **Resumen para decir en el oral**
// “El archivo `utils/index.ts` sirve para centralizar las exportaciones
// de estilos, colores y tamaños. De esta forma, cualquier parte del proyecto
// puede acceder fácilmente a ellos desde un único lugar (`@utils`),
// manteniendo un código más ordenado y escalable.”
