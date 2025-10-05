// ===============================================
// ARCHIVO: utils/styles/radios.ts
// -----------------------------------------------
// Contiene los estilos específicos para la pantalla "Radios".
// Esta pantalla simula un sintonizador de radio con controles,
// información de la emisora y una lista de emisoras preestablecidas.
//
// Se utilizan colores oscuros con acentos brillantes para
// transmitir una sensación de interfaz de audio moderna.
// ===============================================

import { colors } from "@utils/colors";
import { StyleSheet } from "react-native";

// ===============================================
// DEFINICIÓN DE ESTILOS
// -----------------------------------------------
// Exporta el objeto `radiosStyles`, con todos los estilos aplicables
// a los elementos de la pantalla `app/screens/radios.tsx`.
// ===============================================
export const radiosStyles = StyleSheet.create({
  // ---------------------------------------------
  // Contenedor principal
  // ---------------------------------------------
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor, // color de fondo general (oscuro)
    padding: 20, // espacio interno
  },

  // ---------------------------------------------
  // Encabezado con título y subtítulo
  // ---------------------------------------------
  header: {
    alignItems: "center", // centra horizontalmente el contenido
    marginBottom: 30, // espacio inferior
  },

  // Título principal ("Radio FM")
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "rgba(25, 26, 105, 0.9)", // azul oscuro con opacidad
  },

  // Subtítulo ("Federal, Entre Ríos")
  subtitle: {
    fontSize: 14,
    color: "rgba(22, 22, 22, 1)", // tono gris oscuro
  },

  // ---------------------------------------------
  // Tarjeta principal de la emisora actual
  // ---------------------------------------------
  card: {
    backgroundColor: "rgba(15, 15, 15, 1)", // fondo casi negro
    borderRadius: 20,
    padding: 25,
    alignItems: "center", // centra todo el contenido
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(5, 5, 5, 0.2)", // borde sutil
  },

  // Frecuencia principal (por ejemplo “99.5”)
  frequency: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white", // texto claro sobre fondo oscuro
  },

  // Nombre de la emisora (“FM Federal”)
  stationName: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
    marginBottom: 10,
  },

  // ---------------------------------------------
  // Estado de reproducción (“Reproduciendo” o “Detenido”)
  // ---------------------------------------------
  status: {
    flexDirection: "row", // ícono + texto en una misma línea
    alignItems: "center",
    backgroundColor: "rgba(68, 199, 239, 0.2)", // fondo azul translúcido
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
  },

  // Punto rojo de estado (indicador visual)
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 50, // forma circular
    marginRight: 6,
    backgroundColor: "#ef4444", // rojo brillante
  },

  // Texto del estado
  statusText: {
    color: "white",
    fontSize: 14,
    fontWeight: "500",
  },

  // ---------------------------------------------
  // Controles de reproducción (play, pausa, siguiente, anterior)
  // ---------------------------------------------
  controls: {
    flexDirection: "row", // los botones se alinean horizontalmente
    justifyContent: "center", // centrados en la pantalla
    gap: 20, // espacio entre botones
    marginBottom: 30,
  },

  // Botón genérico de control
  controlBtn: {
    width: 60,
    height: 60,
    borderRadius: 30, // circular
    backgroundColor: "rgba(26, 25, 25, 0.11)", // gris translúcido
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.3)",
  },

  // Botón principal de reproducción (más grande y verde)
  playBtn: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(34,197,94,0.3)", // verde translúcido
    borderWidth: 2,
    borderColor: "rgba(34,197,94,0.5)",
  },

  // Texto opcional dentro de botones grandes (no se usa en esta versión)
  playText: {
    fontSize: 28,
    color: "black",
  },

  // ---------------------------------------------
  // Bloque del sintonizador (tuner)
  // ---------------------------------------------
  tuner: {
    backgroundColor: "rgba(211, 211, 211, 0.12)", // gris claro translúcido
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },

  // Etiqueta dentro del sintonizador
  tunerLabel: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "white",
    marginBottom: 20,
  },

  // ---------------------------------------------
  // Sección de emisoras preestablecidas (presets)
  // ---------------------------------------------
  presets: {
    backgroundColor: "rgba(223, 221, 221, 1)", // fondo gris claro
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.12)",
  },

  // Título de la sección de emisoras
  presetsLabel: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "black",
    marginBottom: 20,
  },

  // Rejilla de botones de emisoras
  presetGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 10,
  },

  // Botón individual de cada emisora predefinida
  presetBtn: {
    flexBasis: "48%", // dos por fila
    backgroundColor: "rgba(22, 21, 21, 0.97)", // gris muy oscuro
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
  },

  // Frecuencia dentro del botón (por ejemplo “99.9”)
  presetText: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },

  // Nombre de la emisora debajo de la frecuencia
  presetName: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 1)",
  },
});

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo define los estilos de la pantalla **Radios**,
//    que simula un reproductor de emisoras FM con un diseño moderno.
//
// 🔹 Se importa en `app/screens/radios.tsx`:
//
//    ```tsx
//    import { radiosStyles as styles } from "@utils/styles/radios";
//    ```
//
// 🔹 Organización de los estilos:
//
// | Estilo | Función |
// |---------|----------|
// | **container** | Contenedor principal de toda la pantalla |
// | **header** | Encabezado con el título y subtítulo |
// | **card** | Tarjeta central de la emisora actual |
// | **frequency / stationName** | Información de frecuencia y nombre |
// | **status / statusDot / statusText** | Estado de reproducción |
// | **controls / controlBtn / playBtn** | Botones de reproducción y navegación |
// | **presets / presetGrid / presetBtn** | Sección de emisoras favoritas |
// | **presetText / presetName** | Texto de frecuencia y nombre de cada emisora |
//
// 🔹 Conceptos técnicos:
//
// - Se usa un **diseño oscuro** con contrastes claros para reflejar
//   la estética de una interfaz de audio moderna.  
// - Se combina `flexDirection`, `alignItems` y `justifyContent` para
//   organizar controles y tarjetas visualmente.  
// - Los botones (`controlBtn`, `playBtn`) están diseñados con formas circulares,
//   bordes y transparencias para simular un panel táctil real.
//
// 🔹 Ejemplo de uso:
//
// ```tsx
// <View style={styles.controls}>
//   <TouchableOpacity style={styles.controlBtn}>
//     <Ionicons name="play-skip-back" size={28} color="black" />
//   </TouchableOpacity>
//   <TouchableOpacity style={[styles.controlBtn, styles.playBtn]}>
//     <Ionicons name="play" size={32} color="white" />
//   </TouchableOpacity>
//   <TouchableOpacity style={styles.controlBtn}>
//     <Ionicons name="play-skip-forward" size={28} color="black" />
//   </TouchableOpacity>
// </View>
// ```
//
// 🔹 En resumen:
//
// Este archivo define la apariencia visual de la pantalla **Radios**,
// que integra un diseño moderno, centrado y visualmente atractivo,
// con una estructura modular y escalable.
//
// OBJETIVO EN LA DEFENSA:
//
// Explicar que los estilos refuerzan la identidad visual del proyecto,
// que combinan un tema oscuro con elementos luminosos para mayor contraste,
// y que se usaron proporciones flexibles (`flex`, `gap`, `borderRadius`)  
// para asegurar buena adaptación en distintos tamaños de pantalla.
//
