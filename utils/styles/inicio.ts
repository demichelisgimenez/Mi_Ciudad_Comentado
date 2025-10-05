// ===============================================
// ARCHIVO: utils/styles/inicio.ts
// -----------------------------------------------
// Contiene los estilos específicos para la pantalla "Inicio".
// Define la presentación del clima, el título principal
// y la cuadrícula de tarjetas que dan acceso a las demás secciones.
//
// Utiliza variables globales de colores y tamaños para mantener
// una identidad visual coherente en toda la app “Mi Ciudad”.
// ===============================================

import { StyleSheet } from "react-native";
import { colors, sizes } from "@utils"; // Colores y tamaños globales definidos en la carpeta utils

// ===============================================
// DEFINICIÓN DE ESTILOS
// -----------------------------------------------
// Exportamos un objeto llamado `inicioStyles` con todos los estilos
// aplicables a los componentes de la pantalla de Inicio.
// ===============================================
export const inicioStyles = StyleSheet.create({
  // ---------------------------------------------
  // Contenedor principal de la pantalla
  // ---------------------------------------------
  container: {
    flex: 1, // ocupa toda la altura disponible
    padding: sizes.base || 16, // espaciado interno general
    backgroundColor: colors.background || "#f1f1f1ff", // color de fondo (por defecto gris claro)
  },

  // ---------------------------------------------
  // Tarjeta del clima (muestra clima actual)
  // ---------------------------------------------
  weatherCard: {
    padding: sizes.base || 16,
    borderRadius: sizes.radius || 12, // esquinas redondeadas
    flexDirection: "row", // disposición horizontal
    justifyContent: "space-between", // separa el texto de la temperatura
    alignItems: "center", // alinea verticalmente
    backgroundColor: colors.surface || "#17181aff", // fondo oscuro
    marginBottom: sizes.base || 16, // espacio inferior respecto al siguiente bloque
  },

  // ---------------------------------------------
  // Título de la sección del clima (“Clima en Federal”)
  // ---------------------------------------------
  weatherTitle: {
    fontSize: sizes.md || 16,
    fontWeight: "bold",
    color: colors.textPrimary || "#ffffffff", // texto blanco
  },

  // ---------------------------------------------
  // Subtítulo del clima (“Nublado”, “Soleado”, etc.)
  // ---------------------------------------------
  weatherSubtitle: {
    fontSize: sizes.sm || 14,
    color: colors.textSecondary || "#b8b8b8ff", // tono gris claro
  },

  // ---------------------------------------------
  // Temperatura actual (por ejemplo, “13°”)
  // ---------------------------------------------
  weatherTemp: {
    fontSize: sizes.xl || 28, // fuente grande
    fontWeight: "bold",
    color: colors.textPrimary || "#ffffffff",
  },

  // ---------------------------------------------
  // Título principal (“¿Qué querés hacer hoy?”)
  // ---------------------------------------------
  title: {
    fontSize: sizes.lg || 18,
    fontWeight: "bold",
    marginBottom: sizes.base || 16,
    color: colors.textPrimary || "#1b1a1fff", // texto oscuro sobre fondo claro
  },

  // ---------------------------------------------
  // Contenedor de las tarjetas (rejilla o cuadrícula)
  // ---------------------------------------------
  grid: {
    flexDirection: "row", // organiza horizontalmente
    flexWrap: "wrap", // permite que las tarjetas bajen a otra línea
    justifyContent: "space-between", // reparte el espacio entre las tarjetas
  },

  // ---------------------------------------------
  // Tarjeta individual (Farmacias, Escuelas, etc.)
  // ---------------------------------------------
  card: {
    backgroundColor: colors.primary || "#1b1a1fff", // color de fondo principal
    width: "48%", // ocupa casi la mitad del ancho (dos por fila)
    borderRadius: sizes.radius || 12,
    padding: sizes.base || 16,
    marginBottom: sizes.base || 16, // espacio entre filas
  },

  // ---------------------------------------------
  // Título dentro de cada tarjeta (“Farmacias”, “Notas”, etc.)
  // ---------------------------------------------
  cardTitle: {
    fontSize: sizes.md || 16,
    fontWeight: "bold",
    color: colors.onPrimary || "#fff", // texto blanco sobre fondo oscuro
    marginTop: 8,
  },

  // ---------------------------------------------
  // Subtítulo dentro de la tarjeta (“Mapa y contactos”, etc.)
  // ---------------------------------------------
  cardSubtitle: {
    fontSize: sizes.sm || 12,
    color: colors.onPrimaryVariant || "#e0e0e0", // tono gris claro
  },
});

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo define el aspecto visual de la pantalla **Inicio**,
//    que es la primera vista del usuario dentro de la app Mi Ciudad.
//
// 🔹 Se importa en la pantalla con:
//
//    ```tsx
//    import { inicioStyles as styles } from "@utils/styles/inicio";
//    ```
//
// 🔹 Organización de los estilos:
//
// | Estilo | Función |
// |---------|----------|
// | **container** | Contenedor general de toda la pantalla |
// | **weatherCard** | Tarjeta que muestra el clima actual |
// | **weatherTitle** / **weatherSubtitle** | Textos del bloque de clima |
// | **weatherTemp** | Temperatura grande a la derecha |
// | **title** | Texto principal “¿Qué querés hacer hoy?” |
// | **grid** | Contenedor de las tarjetas de opciones |
// | **card** | Tarjeta individual (Farmacias, Escuelas, etc.) |
// | **cardTitle** / **cardSubtitle** | Textos dentro de cada tarjeta |
//
// 🔹 Conceptos técnicos:
//
// - Se usa `flexDirection: "row"` y `flexWrap: "wrap"` para crear una **rejilla flexible**.
// - Los colores y tamaños vienen de `@utils`, para mantener uniformidad.
// - El diseño se adapta tanto a tema claro como oscuro.
//
// 🔹 Ejemplo de cómo se aplican:
//
// ```tsx
// <View style={styles.grid}>
//   <TouchableOpacity style={styles.card}>
//     <MaterialIcons name="school" size={32} color="#fff" />
//     <Text style={styles.cardTitle}>Escuelas</Text>
//     <Text style={styles.cardSubtitle}>Mapa y listado</Text>
//   </TouchableOpacity>
// </View>
// ```
//
// 🔹 En resumen:
//
// Este archivo controla la estética del **Home principal de la app**,
// combinando un bloque informativo (el clima) con una cuadrícula funcional
// de accesos rápidos a las distintas secciones del proyecto.
//
// OBJETIVO EN LA DEFENSA:
//
// Explicar que el archivo `inicio.ts` define la “cara principal” de la aplicación,
// que combina un diseño modular con componentes táctiles,
// y que los estilos están centralizados para mantener una estética consistente
// en todas las pantallas.
//
