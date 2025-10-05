// ===============================================
// ARCHIVO: index.ts
// -----------------------------------------------
// Este archivo es el **punto de entrada principal** del proyecto.
// Es el primero que se ejecuta cuando la app se inicia.
//
// Su función es “registrar” el componente raíz (`App.tsx`) 
// para que React Native lo reconozca como la aplicación completa.
//
// Expo usa este archivo internamente para lanzar la app
// tanto en el entorno de desarrollo (Expo Go) como en una build nativa.
// ===============================================

// -----------------------------------------------
// Importa la función registerRootComponent desde Expo.
// Esta función se encarga de registrar el componente principal (App)
// y asegurar que el entorno esté correctamente configurado.
// -----------------------------------------------
import { registerRootComponent } from 'expo';

// -----------------------------------------------
// Importa react-native-gesture-handler.
// Esta librería es necesaria para manejar gestos táctiles
// (deslizamientos, toques, navegación lateral, etc.)
// antes de cargar cualquier componente visual.
// -----------------------------------------------
import 'react-native-gesture-handler';

// -----------------------------------------------
// Importa el componente principal de la aplicación.
// Este archivo (`App.tsx`) contiene la raíz de toda la estructura:
// navegación, contextos globales, temas, etc.
// -----------------------------------------------
import App from './App';

// -----------------------------------------------
// Llamada a registerRootComponent(App)
// -----------------------------------------------
// 🔹 Registra “App” como el componente raíz.
// 🔹 Internamente, esto ejecuta:
//      AppRegistry.registerComponent('main', () => App)
// 🔹 Además, Expo ajusta el entorno automáticamente según
//    si la app se ejecuta en:
//      - Expo Go (modo desarrollo),
//      - o una build nativa (Android/iOS compilado).
// -----------------------------------------------
registerRootComponent(App);

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Función del archivo:
//   - Este archivo conecta el código de React Native con el entorno de ejecución de Expo.
//   - Sin este registro, la aplicación no sabría qué componente mostrar al iniciar.
//
// 🔹 Flujo de ejecución:
//   1. Se cargan las dependencias necesarias (`expo`, `react-native-gesture-handler`).
//   2. Se importa el componente raíz (`App.tsx`).
//   3. Se registra ese componente con `registerRootComponent()`.
//   4. Expo se encarga de inicializar toda la aplicación a partir de ese punto.
//
// 🔹 En resumen:
//
// Este archivo actúa como **el punto de inicio del proyecto “Mi Ciudad”**.
// Es el que **le dice a Expo qué componente renderizar primero**
// y **asegura que el entorno esté correctamente configurado** para Android, iOS o Web.
// ===============================================
