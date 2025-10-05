// ===============================================
// ARCHIVO: babel.config.js
// -----------------------------------------------
// Configura **Babel**, el compilador que transforma
// código moderno (ES6+/TS/JSX) a una versión compatible
// con los entornos nativos de React Native (Android/iOS)
// y con Expo.
//
// En este proyecto sirve para:
//  - Definir el preset de Expo
//  - Configurar alias de importación (module-resolver)
//  - Habilitar el plugin de Reanimated (DEBE ir al final)
// ===============================================

module.exports = function (api) {
  // Activa la caché de Babel para compilar más rápido.
  api.cache(true);

  return {
    // ---------------------------------------------
    // PRESETS
    // ---------------------------------------------
    // Incluye transformaciones necesarias para proyectos Expo.
    presets: ["babel-preset-expo"],

    // ---------------------------------------------
    // PLUGINS
    // ---------------------------------------------
    // Plugins que amplían el comportamiento del compilador.
    plugins: [
      // -------------------------------------------
      // Plugin: module-resolver
      // -------------------------------------------
      // Permite usar alias en imports para evitar rutas relativas largas.
      // Ej.:  import { sizes } from "@utils";
      // en vez de: import { sizes } from "../../utils";
      [
        "module-resolver",
        {
          alias: {
            "@components": "./components", // Componentes reutilizables
            "@utils": "./utils",           // Utils, constantes, estilos globales
            "@app": "./app",               // Navegación y pantallas
            "@assets": "./assets",         // Imágenes, fuentes, etc.
            "@shared": "./shared",         // Contextos y modelos compartidos
          },
        },
      ],

      // -------------------------------------------
      // Plugin: react-native-reanimated/plugin
      // -------------------------------------------
      // Necesario para que Reanimated funcione correctamente.
      // ⚠️ Debe ser el ÚLTIMO plugin de la lista.
      "react-native-reanimated/plugin",
    ],
  };
};

// ===============================================
// EXPLICACIÓN (para defensa oral)
// -----------------------------------------------
// - `babel-preset-expo`: aplica transformaciones estándar para Expo.
// - `module-resolver`: crea alias de importación (@utils, @app, etc.)
//   para tener código más limpio y mantenible.
// - `react-native-reanimated/plugin`: requerido por Reanimated;
//   siempre va al final de la lista de plugins.
//
// Ejemplo de alias:
//   import { inicioStyles } from "@utils/styles/inicio";
//   import AuthProvider from "@shared/context/AuthContext/auth-provider";
//
// En resumen: este archivo asegura que el proyecto compile bien,
// con imports ordenados y compatibilidad con Reanimated.
// ===============================================
