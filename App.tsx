// ===============================================
// ARCHIVO: App.tsx
// -----------------------------------------------
// Este es el punto de entrada principal de toda la aplicación “Mi Ciudad”.
// Aquí se configura la navegación, el contexto global de autenticación
// y la pantalla inicial que se renderiza al abrir la app.
//
// Es el equivalente al “main” de un programa.
// ===============================================

// -----------------------------------------------
// Importaciones necesarias
// -----------------------------------------------

// Permite el uso de gestos en la navegación (requerido por React Navigation)
import 'react-native-gesture-handler';

// Contenedor principal de navegación (maneja rutas y pantallas)
import { NavigationContainer } from "@react-navigation/native";

// Importa el componente raíz que define la estructura general (auth o drawer)
import Root from "./app/root";

// SafeAreaProvider y SafeAreaView protegen el contenido de las zonas
// no seguras del dispositivo (notch, barra de estado, bordes redondeados)
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Contexto global de autenticación (maneja login, logout y usuario actual)
import { AuthProvider } from "./shared/context/AuthContext";

// Control del splash screen de Expo (pantalla inicial de carga)
import * as SplashScreen from 'expo-splash-screen';

// Importación de React (necesaria para usar JSX)
import React from "react";

// Elementos visuales nativos para el estilo de la pantalla
import { StatusBar, StyleSheet } from "react-native";


// -----------------------------------------------
// CONFIGURACIÓN INICIAL DEL SPLASH SCREEN
// -----------------------------------------------
// Evita que la pantalla de carga (Splash) se oculte automáticamente
// hasta que todo el contenido de la app esté listo para mostrarse.
SplashScreen.preventAutoHideAsync();


// -----------------------------------------------
// COMPONENTE PRINCIPAL DE LA APP
// -----------------------------------------------
// Representa toda la aplicación. Es el primer componente que se ejecuta.
export default function App() {
  return (
    // Proveedor de contexto seguro (necesario para evitar que elementos
    // se solapen con el notch o barra de estado)
    <SafeAreaProvider>

      {/* Barra de estado del dispositivo */}
      <StatusBar 
        translucent                         // Permite que el contenido se muestre debajo de la barra
        backgroundColor="transparent"       // Fondo transparente
        barStyle="dark-content"             // Iconos oscuros (tema claro)
      />

      {/* SafeAreaView protege el contenido visual principal */}
      <SafeAreaView 
        style={styles.container} 
        edges={["right", "left", "bottom"]} // Áreas protegidas
      >

        {/* Contenedor de navegación */}
        <NavigationContainer>

          {/* Contexto global de autenticación (Login / Logout) */}
          <AuthProvider>

            {/* Raíz de toda la navegación: define si se muestra
                el Drawer o las pantallas de autenticación */}
            <Root />

          </AuthProvider>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


// -----------------------------------------------
// ESTILOS GLOBALES DEL CONTENEDOR
// -----------------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,             // Ocupa toda la pantalla disponible
    backgroundColor: "#fff", // Fondo blanco
  },
});


// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo actúa como **punto de arranque** de la aplicación.
//    Se ejecuta antes que cualquier otra pantalla.
//
// 🔹 Principales responsabilidades:
//    - Inicializar el contexto global de usuario (`AuthProvider`)
//    - Configurar la navegación (`NavigationContainer` y `Root`)
//    - Proteger el contenido con zonas seguras (`SafeAreaProvider`)
//    - Mostrar la barra de estado y manejar el splash de Expo.
//
// 🔹 Estructura jerárquica:
//
// App.tsx
// └── SafeAreaProvider
//     └── StatusBar
//     └── SafeAreaView
//         └── NavigationContainer
//             └── AuthProvider
//                 └── Root (define si muestra Login/Register o el Drawer principal)
//
// 🔹 Objetivo en la defensa oral:
//
// Explicar que **App.tsx es el punto de entrada** del proyecto Expo,
// donde se inicializan todos los contextos globales (como Auth),
// se prepara la navegación general y se asegura que el diseño
// respete las áreas seguras del dispositivo (SafeArea).
//
// También controla la **pantalla de carga inicial (Splash)**,
// evitando que desaparezca hasta que la app esté lista.
//
// En resumen: sin este archivo, la app no puede iniciarse correctamente.
// ===============================================
