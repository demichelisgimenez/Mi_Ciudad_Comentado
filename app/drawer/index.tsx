// ===============================================
// ARCHIVO: app/drawer/index.tsx
// Este componente define el Drawer Navigator, es decir,
// el menú lateral principal de la aplicación Mi Ciudad.
// Desde aquí el usuario puede acceder a todas las pantallas principales.
// ===============================================

// Importamos el creador del Drawer Navigator desde React Navigation
import { createDrawerNavigator } from "@react-navigation/drawer";

// Importamos las constantes de rutas principales y de autenticación
import { DRAWER_ROUTES, AUTH_ROUTES } from "@utils/constants";

// Importamos todas las pantallas que aparecerán dentro del Drawer
import InicioScreen from "@app/screens/inicio";
import Farmacias from "@app/screens/farmacias";
import Escuelas from "@app/screens/escuelas";
import Radios from "@app/screens/radios";
import Notas from "@app/screens/notas";
import QR from "@app/screens/qr";
import Ajustes from "@app/screens/ajustes";

// También importamos las pantallas de autenticación
import Login from "@app/auth/screens/login";
import { Register } from "@app/auth/screens";

// Importamos los íconos que se mostrarán en el menú lateral
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

// Creamos una instancia del Drawer Navigator
const Drawer = createDrawerNavigator();

// ===============================================
// COMPONENTE PRINCIPAL: DRAWER NAVIGATOR
// ===============================================
export default function DrawerNavigator() {
  return (
    // Definimos el menú lateral con sus diferentes pantallas
    <Drawer.Navigator initialRouteName={DRAWER_ROUTES.INICIO}>
      
      {/* ====================================================
           PANTALLA: INICIO
           ==================================================== */}
      <Drawer.Screen
        name={DRAWER_ROUTES.INICIO}
        component={InicioScreen}
        options={{
          headerShown: false, // se oculta el header superior
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* ====================================================
           PANTALLA: FARMACIAS
           ==================================================== */}
      <Drawer.Screen
        name={DRAWER_ROUTES.FARMACIAS}
        component={Farmacias}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="local-pharmacy" size={size} color={color} />
          ),
        }}
      />

      {/* ====================================================
           PANTALLA: ESCUELAS
           ==================================================== */}
      <Drawer.Screen
        name={DRAWER_ROUTES.ESCUELAS}
        component={Escuelas}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="school" size={size} color={color} />
          ),
        }}
      />

      {/* ====================================================
           PANTALLA: RADIOS
           ==================================================== */}
      <Drawer.Screen
        name={DRAWER_ROUTES.RADIOS}
        component={Radios}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="radio" size={size} color={color} />
          ),
        }}
      />

      {/* ====================================================
           PANTALLA: NOTAS
           ==================================================== */}
      <Drawer.Screen
        name={DRAWER_ROUTES.NOTAS}
        component={Notas}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="note-alt" size={size} color={color} />
          ),
        }}
      />

      {/* ====================================================
           PANTALLA: QR
           ==================================================== */}
      <Drawer.Screen
        name={DRAWER_ROUTES.QR}
        component={QR}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="qr-code-scanner" size={size} color={color} />
          ),
        }}
      />

      {/* ====================================================
           PANTALLA: AJUSTES
           ==================================================== */}
      <Drawer.Screen
        name={DRAWER_ROUTES.AJUSTES}
        component={Ajustes}
        options={{
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />

      {/* ====================================================
           PANTALLA: LOGIN
           ==================================================== */}
      <Drawer.Screen
        name={AUTH_ROUTES.LOGIN}
        component={Login}
        options={{
          title: "Iniciar Sesión",
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="login" size={size} color={color} />
          ),
        }}
      />

      {/* ====================================================
           PANTALLA: REGISTER (OCULTA EN EL MENÚ)
           ==================================================== */}
      <Drawer.Screen
        name={AUTH_ROUTES.REGISTER}
        component={Register}
        options={{
          title: "Registrarse",
          // Ocultamos esta opción del menú para que solo se acceda desde el login
          drawerItemStyle: { display: "none" },
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="person-add" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// Este componente define el menú lateral (Drawer) de Mi Ciudad.
// Desde aquí el usuario puede acceder a todas las secciones de la app:
//
//  🏠 Inicio
//  💊 Farmacias
//  🏫 Escuelas
//  📻 Radios
//  📝 Notas
//  🔳 Lector QR
//  ⚙️ Ajustes
//
// También incluye las pantallas de autenticación (Login y Register),
// aunque "Register" está oculta del menú.
//
// FUNCIONAMIENTO:
//
// - DrawerNavigator se monta una sola vez cuando el usuario inicia sesión.
// - Cada <Drawer.Screen> representa una pantalla distinta con su ícono.
// - `drawerIcon` define el ícono que se muestra junto al nombre en el menú.
// - `initialRouteName` indica que la pantalla “Inicio” se abre primero.
//
// TECNOLOGÍAS CLAVE:
//
// - @react-navigation/drawer → crea el menú lateral.
// - MaterialIcons (de Expo) → íconos uniformes en todo el menú.
// - DRAWER_ROUTES y AUTH_ROUTES → mantienen los nombres de rutas centralizados.
//
// FUTURAS MEJORAS:
//
// - Personalizar el diseño del Drawer (avatar, encabezado, tema claro/oscuro).
// - Agregar opción de “Cerrar sesión” dentro del Drawer.
// - Proteger pantallas con autenticación real.
//
// OBJETIVO EN LA DEFENSA:
//
// Mostrar que entendés cómo se construye la navegación principal,
// cómo se definen las rutas y cómo se asignan íconos y opciones personalizadas
// a cada una de las pantallas del proyecto.
//
