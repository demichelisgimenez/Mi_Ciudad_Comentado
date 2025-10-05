// ===============================================
// ARCHIVO: app/root.tsx
// Este componente define la navegación raíz de la aplicación Mi Ciudad.
// Decide si el usuario ve el login (AuthStack) o las pantallas principales (Drawer)
// según si está autenticado o no.
// ===============================================

// Importamos el stack de autenticación (pantallas de Login y Registro)
import AuthStackScreen from "./auth";

// Importamos el creador del Stack Navigator nativo
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Constantes con los nombres de rutas principales (ROOT_ROUTES.AUTH / ROOT_ROUTES.SCREENS)
import { ROOT_ROUTES } from "@utils/constants";

// Hooks y contextos de React
import { useContext, useEffect, useState } from "react";

// Contexto de autenticación y sus acciones
import { AUTH_ACTIONS, AuthContext } from "@shared/context/AuthContext";

// Función que obtiene el usuario guardado en almacenamiento seguro (SecureStore)
import { getUser } from "@utils/secure-store";

// Librería de Expo que maneja la pantalla de carga inicial (Splash)
import * as SplashScreen from "expo-splash-screen";

// View contenedor para envolver la navegación
import { View } from "react-native";

// Navegador principal tipo Drawer (menú lateral)
import DrawerNavigator from "./drawer";

// ===============================================
// CONFIGURACIÓN DEL STACK PRINCIPAL
// ===============================================

// Creamos una instancia del Stack Navigator
const Stack = createNativeStackNavigator();

// ===============================================
// COMPONENTE PRINCIPAL: ROOT
// ===============================================
export default function Root() {
  // Accedemos al contexto global de autenticación
  const { state, dispatch } = useContext(AuthContext);

  // Estado local: guarda si el usuario está logueado o no
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  // ===============================================
  // useEffect 1 → Se ejecuta cada vez que cambia el estado global (AuthContext)
  // ===============================================
  useEffect(() => {
    if (state?.user) {
      setIsSignedIn(true); // hay usuario → mostrar Drawer
    } else {
      setIsSignedIn(false); // no hay usuario → mostrar login
    }
  }, [state]);

  // ===============================================
  // useEffect 2 → Se ejecuta al inicio para verificar usuario guardado
  // ===============================================
  useEffect(() => {
    getUser().then((user) => {
      // Si hay usuario almacenado, se envía al contexto
      if (user) {
        dispatch({ type: AUTH_ACTIONS.SET_USER, payload: { user } });
        setIsSignedIn(true);
      }
      // Cuando termina de verificar, se oculta la Splash Screen
      SplashScreen.hideAsync();
    });
  }, []);

  // ===============================================
  // RENDERIZADO PRINCIPAL
  // ===============================================
  return (
    // Contenedor principal
    <View style={{ flex: 1 }}>
      {/* Stack Navigator principal */}
      <Stack.Navigator
        // Define la primera ruta según si el usuario está logueado o no
        initialRouteName={isSignedIn ? ROOT_ROUTES.SCREENS : ROOT_ROUTES.AUTH}
        // Oculta el header superior por defecto
        screenOptions={{ headerShown: false }}
      >
        {/* Si el usuario está logueado, muestra las pantallas principales (Drawer) */}
        {isSignedIn ? (
          <Stack.Screen
            name={ROOT_ROUTES.SCREENS}
            component={DrawerNavigator}
          />
        ) : (
          // Si NO está logueado, muestra las pantallas de autenticación
          <Stack.Screen name={ROOT_ROUTES.AUTH} component={AuthStackScreen} />
        )}
      </Stack.Navigator>
    </View>
  );
}

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo es el corazón de la navegación de Mi Ciudad.
//    Controla si el usuario ve el login o el menú principal (Drawer).
//
// FUNCIONAMIENTO:
//
// 1️⃣ Al iniciar la app, se ejecuta getUser() → busca si hay usuario guardado.
// 2️⃣ Si hay usuario, se lo envía al AuthContext y se muestra el DrawerNavigator.
// 3️⃣ Si no hay usuario, se muestra el AuthStackScreen (pantallas de acceso).
// 4️⃣ Cuando termina de verificar, se oculta la SplashScreen (pantalla de carga).
//
// CONCEPTOS CLAVE:
//
// - AuthContext: guarda y comparte el estado del usuario en toda la app.
// - useState / useEffect: manejan los estados locales y los efectos secundarios.
// - createNativeStackNavigator: define el flujo de pantallas (login ↔ app principal).
// - DrawerNavigator: contiene las pantallas principales (Inicio, Farmacias, etc.).
// - SplashScreen.hideAsync(): cierra la pantalla de carga inicial.
//
// FUTURAS MEJORAS:
//
// - Mostrar una pantalla de carga personalizada mientras se verifica el usuario.
// - Implementar cierre de sesión completo (borrar usuario del SecureStore).
// - Integrar control de sesión en tiempo real con Supabase.
//
// OBJETIVO EN LA DEFENSA:
//
// Explicar que este archivo controla la lógica de ingreso del usuario
// y es el punto de conexión entre el sistema de autenticación y la navegación general.
// Es el "cerebro" que decide qué parte de la app se muestra según el estado del usuario.
//
