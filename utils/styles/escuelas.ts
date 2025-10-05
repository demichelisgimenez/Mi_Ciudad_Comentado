// ===============================================
// ARCHIVO: utils/styles/escuelas.ts
// -----------------------------------------------
// Contiene los estilos específicos para la pantalla "Escuelas".
// Define cómo se muestran el mapa, los títulos y las tarjetas
// que listan las instituciones educativas de la ciudad.
//
// Se utilizan variables globales de colores y tamaños para
// mantener coherencia visual en toda la app “Mi Ciudad”.
// ===============================================

import { StyleSheet } from "react-native";
import { colors, sizes } from "@utils";

// ===============================================
// DEFINICIÓN DE ESTILOS
// -----------------------------------------------
// Exportamos un objeto llamado `escuelaStyles` con todos los
// estilos aplicables a los componentes de la pantalla Escuelas.
// ===============================================
export const escuelaStyles = StyleSheet.create({
  // ---------------------------------------------
  // Contenedor principal
  // ---------------------------------------------
  container: {
    flex: 1, // ocupa toda la pantalla
    backgroundColor: colors.background || "#f9f9f9",
    padding: sizes.base || 16, // espacio interno general
  },

  // ---------------------------------------------
  // Título principal ("Escuelas de la Ciudad de Federal")
  // ---------------------------------------------
  titulo: {
    fontSize: sizes.lg || 22, // texto grande
    fontWeight: "bold",
    color: colors.primary || "#1e1f20ff",
    textAlign: "center",
    marginBottom: sizes.base || 20,
  },

  // ---------------------------------------------
  // Tarjeta de cada escuela (contenedor individual)
  // ---------------------------------------------
  card: {
    backgroundColor: colors.surface || "#fff",
    borderRadius: sizes.radius || 12,
    padding: sizes.base || 16,
    marginBottom: sizes.base || 15,
    borderWidth: 1,
    borderColor: colors.border || "#ddd",
    shadowColor: "#000", // sombra sutil
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // sombra en Android
  },

  // ---------------------------------------------
  // Nombre de la escuela
  // ---------------------------------------------
  nombre: {
    fontSize: sizes.md || 18,
    fontWeight: "bold",
    color: colors.textPrimary || "#1b1a1fff",
    marginBottom: sizes.sm || 8,
  },

  // ---------------------------------------------
  // Dirección debajo del nombre
  // ---------------------------------------------
  direccion: {
    fontSize: sizes.sm || 14,
    color: colors.textSecondary || "#555",
    marginBottom: sizes.sm || 10,
  },
});

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo define la apariencia de todos los elementos visuales
//    en la pantalla **Escuelas** (ubicada en `app/screens/escuelas.tsx`).
//
// 🔹 Se importa de esta forma:
//
//    ```tsx
//    import { escuelaStyles as styles } from "@utils/styles/escuelas";
//    ```
//
// 🔹 Organización de los estilos:
//
// | Estilo | Función |
// |---------|----------|
// | **container** | Define la estructura base de la pantalla |
// | **titulo** | Estilo del encabezado principal |
// | **card** | Caja que agrupa los datos de cada escuela |
// | **nombre** | Texto principal (nombre de la institución) |
// | **direccion** | Texto secundario (dirección física) |
//
// 🔹 Combinación con MapView y FlatList:
//
// Este archivo se usa junto con componentes visuales que provienen de
// `react-native-maps` (para el mapa) y `FlatList` (para la lista).
// El mapa no tiene un estilo aquí, porque se le aplica directamente
// desde el archivo `escuelas.tsx` (usando `style={{ width: "100%", height: height * 0.3 }}`).
//
// 🔹 Variables globales:
//
// - `colors`: contiene la paleta de colores general (fondo, texto, superficie, bordes).
// - `sizes`: controla proporciones y espaciados (base, sm, md, lg, radius, etc.).
//
// Esto garantiza que el diseño visual de “Escuelas” coincida con el resto de las pantallas,
// como “Farmacias” o “Radios”.
//
// 🔹 Ejemplo de aplicación:
//
// ```tsx
// <FlatList
//   data={DATA}
//   keyExtractor={(item) => item.id}
//   renderItem={({ item }) => (
//     <View style={styles.card}>
//       <Text style={styles.nombre}>{item.nombre}</Text>
//       <Text style={styles.direccion}>{item.direccion}</Text>
//     </View>
//   )}
// />
// ```
//
// 🔹 En resumen:
//
// Este archivo controla la estética general de la pantalla **Escuelas**,
// manteniendo un estilo limpio, legible y consistente con el resto de la app.
//
// OBJETIVO EN LA DEFENSA:
//
// Explicar que cada pantalla tiene su archivo de estilos separado,
// que se aplican buenas prácticas de diseño modular,
// y que los estilos se basan en un sistema de diseño común (`colors` y `sizes`),
// lo cual mejora la mantenibilidad y coherencia visual.
//
