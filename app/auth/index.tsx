// ===============================================
// ARCHIVO: app/auth/index.tsx
// Este componente define el Stack Navigator del sistema de autenticación.
// Contiene las pantallas de Login y Registro, y controla su navegación.
// ===============================================

// Importamos React (necesario para definir componentes funcionales)
import React from "react";

// Importamos el creador de Stack Navigator nativo de React Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Importamos las rutas definidas para el flujo de autenticación
import { AUTH_ROUTES } from "@utils/constants";

// Importamos las pantallas Login y Register desde la carpeta /screens
import { Login, Register } from "./screens";

// ===============================================
// TIPADO DE RUTAS (solo para TypeScript)
// ===============================================
// Define el tipo de parámetros que puede recibir cada pantalla.
// En este caso, ambas (Login y Register) no reciben parámetros.
export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

// ===============================================
// CREACIÓN DEL STACK
// ===============================================
// Creamos una instancia del Stack Navigator y le pasamos el tipo de rutas definido arriba.
const Stack = createNativeStackNavigator<AuthStackParamList>();

// ===============================================
// COMPONENTE PRINCIPAL: AUTHSTACK
// ===============================================
export default function AuthStack() {
  return (
    // Stack.Navigator agrupa las pantallas Login y Register
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* PANTALLA: LOGIN */}
      <Stack.Screen name={AUTH_ROUTES.LOGIN} component={Login} />

      {/* PANTALLA: REGISTER */}
      <Stack.Screen name={AUTH_ROUTES.REGISTER} component={Register} />
    </Stack.Navigator>
  );
}

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo define el flujo de autenticación de la app Mi Ciudad.
//    Agrupa las pantallas de “Iniciar Sesión” y “Registrarse” dentro de un Stack.
//
// 🔹 ¿Qué es un Stack Navigator?
//    Es un tipo de navegación que apila pantallas una encima de otra,
//    como una pila (stack). Permite moverse hacia adelante y atrás fácilmente.
//
// FUNCIONAMIENTO:
//
// 1️⃣ Cuando el usuario abre la app por primera vez, el Root Navigator
//     (en app/root.tsx) carga este AuthStack si el usuario **no está logueado**.
//
// 2️⃣ El Stack muestra primero la pantalla de Login (AUTH_ROUTES.LOGIN).
//
// 3️⃣ Si el usuario toca el enlace “¿No tenés cuenta? Registrate”,
//     se navega a la pantalla Register.
//
// 4️⃣ Desde Register puede volver al Login con el enlace inverso.
//
// 🔹 `screenOptions={{ headerShown: false }}`
//    Oculta el header automático del Stack para que el diseño se vea más limpio.
//
// TECNOLOGÍAS Y CONCEPTOS:
//
// - createNativeStackNavigator → sistema de navegación nativo con transiciones rápidas.
// - AUTH_ROUTES → centraliza los nombres de rutas para evitar errores de texto.
// - Tipado con TypeScript (AuthStackParamList) → mejora la autocompletación y seguridad.
//
// FUTURAS MEJORAS:
//
// - Agregar animaciones o validación de formularios entre pantallas.
// - Conectar con un backend (por ejemplo, Supabase) para registrar e iniciar sesión.
// - Implementar una pantalla de “Recuperar contraseña” dentro de este mismo Stack.
//
// OBJETIVO EN LA DEFENSA:
//
// Mostrar que entendés cómo se estructura la navegación de autenticación,
// cómo se conecta con el Root principal, y cómo se organizan las pantallas
// de Login y Register dentro de un flujo lógico.
//
