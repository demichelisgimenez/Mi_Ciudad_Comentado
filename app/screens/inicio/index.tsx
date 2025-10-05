// ===============================================
// PANTALLA: INICIO
// Muestra una vista principal con el clima, un título,
// y una grilla de accesos rápidos a las secciones de la app.
// ===============================================

// Importamos React para poder usar JSX
import React from "react";

// Componentes base de React Native:
// - View y Text: estructura y texto
// - TouchableOpacity: botón táctil que cambia de opacidad al presionarse
import { View, Text, TouchableOpacity } from "react-native";

// Hook de navegación del paquete React Navigation
// Nos permite movernos entre pantallas
import { useNavigation } from "@react-navigation/native";

// Constantes que contienen los nombres de rutas del Drawer
// (por ejemplo, "FARMACIAS", "ESCUELAS", "RADIOS", etc.)
import { DRAWER_ROUTES } from "@utils/constants";

// Importamos los estilos específicos de esta pantalla
import { inicioStyles as styles } from "@utils/styles/inicio";

// Librería de íconos de Expo (Material Icons de Google)
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

// SafeAreaView evita que el contenido quede debajo de la barra de estado o el notch
import { SafeAreaView } from "react-native-safe-area-context";

// ===============================================
// COMPONENTE PRINCIPAL: INICIO
// ===============================================
export default function InicioScreen() {
  // Obtenemos el objeto de navegación para poder cambiar de pantalla
  const navigation = useNavigation();

  return (
    // SafeAreaView protege el contenido de solaparse con la barra superior o bordes del dispositivo.
    // flex:1 hace que el contenedor ocupe toda la altura disponible.
    // edges={["top"]} indica que se aplique el margen seguro solo arriba.
    <SafeAreaView style={{ flex: 1 }} edges={["top"]}>

      {/* CONTENEDOR PRINCIPAL DE LA PANTALLA */}
      <View style={styles.container}>

        {/* ====================================================
             TARJETA DEL CLIMA (ESTÁTICA EN ESTA PRIMERA ENTREGA)
             ==================================================== */}
        <View style={styles.weatherCard}>
          {/* Columna izquierda con título y descripción del clima */}
          <View>
            <Text style={styles.weatherTitle}>Clima en Federal</Text>
            <Text style={styles.weatherSubtitle}>Nublado</Text>
          </View>

          {/* Temperatura grande al lado derecho */}
          <Text style={styles.weatherTemp}>13°</Text>
        </View>

        {/* Título principal de la pantalla */}
        <Text style={styles.title}>¿Qué querés hacer hoy?</Text>

        {/* ====================================================
             GRILLA DE OPCIONES / ACCESOS RÁPIDOS
             Cada "card" es un botón táctil con icono, título y subtítulo.
             ==================================================== */}
        <View style={styles.grid}>

          {/* CARD 1 - FARMACIAS */}
          <TouchableOpacity
            style={styles.card}
            // Al presionar, navega hacia la pantalla "FARMACIAS" del Drawer
            onPress={() => navigation.navigate(DRAWER_ROUTES.FARMACIAS as never)}
          >
            {/* Ícono principal */}
            <MaterialIcons name="local-pharmacy" size={32} color="#fff" />
            {/* Título y subtítulo del botón */}
            <Text style={styles.cardTitle}>Farmacias</Text>
            <Text style={styles.cardSubtitle}>Mapa y contactos</Text>
          </TouchableOpacity>

          {/* CARD 2 - ESCUELAS */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate(DRAWER_ROUTES.ESCUELAS as never)}
          >
            <MaterialIcons name="school" size={32} color="#fff" />
            <Text style={styles.cardTitle}>Escuelas</Text>
            <Text style={styles.cardSubtitle}>Mapa y listado</Text>
          </TouchableOpacity>

          {/* CARD 3 - RADIOS */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate(DRAWER_ROUTES.RADIOS as never)}
          >
            <MaterialIcons name="radio" size={32} color="#fff" />
            <Text style={styles.cardTitle}>Radios</Text>
            <Text style={styles.cardSubtitle}>FM en vivo</Text>
          </TouchableOpacity>

          {/* CARD 4 - NOTAS */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate(DRAWER_ROUTES.NOTAS as never)}
          >
            <MaterialIcons name="note-alt" size={32} color="#fff" />
            <Text style={styles.cardTitle}>Notas</Text>
            <Text style={styles.cardSubtitle}>Notas personales</Text>
          </TouchableOpacity>

          {/* CARD 5 - QR */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate(DRAWER_ROUTES.QR as never)}
          >
            <MaterialIcons name="qr-code-scanner" size={32} color="#fff" />
            <Text style={styles.cardTitle}>QR</Text>
            <Text style={styles.cardSubtitle}>Escanear código</Text>
          </TouchableOpacity>

          {/* CARD 6 - AJUSTES */}
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate(DRAWER_ROUTES.AJUSTES as never)}
          >
            <MaterialIcons name="settings" size={32} color="#fff" />
            <Text style={styles.cardTitle}>Ajustes</Text>
            <Text style={styles.cardSubtitle}>Preferencias</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// Esta pantalla funciona como el "inicio" de la app.
// Es una especie de menú visual con accesos a todas las secciones.
//
// PARTES PRINCIPALES:
// 1. SafeAreaView: protege el contenido del notch y barra superior.
// 2. Tarjeta del clima: por ahora muestra datos fijos ("Nublado", 13°),
//    pero en versiones futuras se puede conectar a una API real.
// 3. Título principal: orienta al usuario ("¿Qué querés hacer hoy?").
// 4. Grilla de accesos rápidos: cada tarjeta (TouchableOpacity)
//    permite navegar hacia una sección diferente del Drawer.
//
// CADA CARD CONTIENE:
// - Un ícono de MaterialIcons.
// - Un título (por ejemplo “Farmacias”).
// - Un subtítulo (por ejemplo “Mapa y contactos”).
//
// TECNOLOGÍAS Y CONCEPTOS CLAVE:
// - useNavigation() de React Navigation: permite moverse entre pantallas.
// - DRAWER_ROUTES: constantes para evitar escribir nombres de rutas a mano.
// - TouchableOpacity: botones táctiles con animación de opacidad.
// - Modularización de estilos: se importan desde utils/styles/inicio.ts.
//
// FUTURAS MEJORAS:
// - Conectar el clima con una API real.
// - Cambiar los textos dinámicamente según datos externos.
// - Añadir un tema claro/oscuro desde los ajustes.
//
// OBJETIVO EN LA DEFENSA:
// Mostrar que comprendés el flujo visual y lógico:
// cómo se organiza la UI, cómo se navega entre pantallas
// y por qué se usan estos componentes.
//
