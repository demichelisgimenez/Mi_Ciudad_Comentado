// ===============================================
// ARCHIVO: utils/styles/farmacias.ts
// -----------------------------------------------
// Contiene los estilos específicos para la pantalla "Farmacias".
// Define la apariencia del mapa, los títulos y las tarjetas
// que muestran las farmacias disponibles en la ciudad.
//
// Utiliza variables globales de colores y tamaños para mantener
// coherencia visual en toda la app “Mi Ciudad”.
// ===============================================

import { StyleSheet } from "react-native";
import { sizes } from "../../utils"; // Importa medidas globales (tamaños de texto, espaciados, etc.)
import { materialColors } from "@utils/colors"; // Importa la paleta de colores basada en Material Design

// ===============================================
// DEFINICIÓN DE ESTILOS
// -----------------------------------------------
// Exporta el objeto `farmaciasStyles` que agrupa todos los estilos
// utilizados en la pantalla `app/screens/farmacias.tsx`.
// ===============================================
export const farmaciasStyles = StyleSheet.create({
  // ---------------------------------------------
  // Contenedor principal de la pantalla
  // ---------------------------------------------
  container: {
    flex: 1, // ocupa todo el alto disponible
    backgroundColor: materialColors.schemes.dark.background, // color de fondo del tema oscuro
    padding: 16, // margen interno general
  },

  // ---------------------------------------------
  // Título principal ("Farmacias en Federal")
  // ---------------------------------------------
  titulo: {
    fontSize: sizes.titulo, // tamaño grande definido globalmente
    fontWeight: "bold", // negrita
    marginBottom: 12, // espacio inferior
    color: materialColors.schemes.dark.primary, // color principal del tema oscuro
  },

  // ---------------------------------------------
  // Tarjeta de cada farmacia en la lista
  // ---------------------------------------------
  card: {
    backgroundColor: materialColors.schemes.dark.surface, // color de fondo del recuadro
    padding: 12, // espacio interno del contenido
    marginVertical: 8, // separación entre tarjetas
    borderRadius: 8, // bordes redondeados
    elevation: 2, // sombra (efecto de profundidad en Android)
  },

  // ---------------------------------------------
  // Nombre de la farmacia
  // ---------------------------------------------
  nombre: {
    fontSize: 18, // texto grande
    fontWeight: "600", // seminegrita
    color: materialColors.schemes.dark.onSurface, // color de texto principal sobre superficie
  },

  // ---------------------------------------------
  // Dirección de la farmacia
  // ---------------------------------------------
  direccion: {
    fontSize: 14, // texto más pequeño
    color: materialColors.schemes.dark.onSurfaceVariant, // color más claro para texto secundario
    marginBottom: 8, // espacio inferior antes del botón
  },
});

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo define los estilos usados en la pantalla **Farmacias**,
//    donde se muestra un mapa interactivo (MapView) y una lista de tarjetas
//    con la información de cada farmacia (nombre, dirección y botón “Ver más”).
//
// 🔹 Se importa desde la pantalla:
//
//    ```tsx
//    import { farmaciasStyles as styles } from "@utils/styles/farmacias";
//    ```
//
// 🔹 Organización de los estilos:
//
// | Estilo | Función |
// |---------|----------|
// | **container** | Estructura general de la pantalla |
// | **titulo** | Título superior (“Farmacias en Federal”) |
// | **card** | Caja que contiene los datos de cada farmacia |
// | **nombre** | Texto principal (nombre de la farmacia) |
// | **direccion** | Texto secundario (dirección del local) |
//
// 🔹 Paleta de colores:
//
// - `materialColors.schemes.dark`: indica que se está usando el **tema oscuro**
//    definido globalmente en la app (probablemente inspirado en Material Design 3).
// - Colores como `onSurface`, `onSurfaceVariant` o `primary` se eligen para mantener
//   buena legibilidad y coherencia estética en fondos oscuros.
//
// 🔹 Variables globales:
//
// - `sizes`: maneja tamaños uniformes (por ejemplo, `sizes.titulo` para mantener proporción).
//
// 🔹 Ejemplo de uso en la pantalla:
//
// ```tsx
// <FlatList
//   data={DATA}
//   keyExtractor={(item) => item.id}
//   renderItem={({ item }) => (
//     <View style={styles.card}>
//       <Text style={styles.nombre}>{item.nombre}</Text>
//       <Text style={styles.direccion}>{item.direccion}</Text>
//       <Button title="Ver más" onPress={() => {}} />
//     </View>
//   )}
// />
// ```
//
// 🔹 En resumen:
//
// Este archivo controla el aspecto visual de la pantalla **Farmacias**,
// logrando un estilo moderno, legible y consistente con el resto del proyecto.
// Aplica el esquema de colores Material Design y un diseño adaptado a pantallas móviles.
//
// OBJETIVO EN LA DEFENSA:
//
// Explicar que cada pantalla tiene su propio archivo de estilos,
// que se usan temas oscuros (materialColors) y variables globales (sizes)
// para mantener coherencia visual, y que los estilos están modularizados,
// lo cual facilita la escalabilidad y el mantenimiento.
//
