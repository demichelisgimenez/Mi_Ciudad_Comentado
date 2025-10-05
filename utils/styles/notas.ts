// ===============================================
// ARCHIVO: utils/styles/notas.ts
// -----------------------------------------------
// Define los estilos específicos para la pantalla "Notas".
// Esta pantalla permite al usuario escribir, agregar y visualizar notas,
// por lo que el estilo busca claridad, organización y legibilidad.
//
// Los valores de colores y tamaños se basan en variables globales
// definidas en "@utils" para mantener coherencia visual en toda la app.
// ===============================================

import { StyleSheet } from "react-native";
import { colors, sizes } from "@utils"; // Sistema global de colores y medidas

// ===============================================
// DEFINICIÓN DE ESTILOS
// -----------------------------------------------
// Exporta un objeto llamado `notasStyles` con todos los estilos
// que se aplican en la pantalla de Notas.
// ===============================================
export const notasStyles = StyleSheet.create({
  // ---------------------------------------------
  // Contenedor principal de la pantalla
  // ---------------------------------------------
  container: {
    flex: 1, // ocupa toda la pantalla
    backgroundColor: colors.background || "#f9f9f9", // fondo claro
    padding: sizes.base || 20, // espacio interno
  },

  // ---------------------------------------------
  // Título principal ("Mis Notas")
  // ---------------------------------------------
  title: {
    fontSize: sizes.lg || 22,
    fontWeight: "bold",
    marginBottom: sizes.base || 15,
    color: colors.primary || "#1e3a8a", // color destacado
    textAlign: "center", // centrado horizontal
  },

  // ---------------------------------------------
  // Contenedor que agrupa los inputs y botones
  // ---------------------------------------------
  inputContainer: {
    flexDirection: "row", // organiza en línea los elementos
    marginBottom: sizes.base || 20, // espacio inferior entre secciones
  },

  // ---------------------------------------------
  // Campo de entrada de texto (TextInput)
  // ---------------------------------------------
  input: {
    flex: 1, // ocupa todo el espacio disponible
    backgroundColor: colors.surface || "#fff", // fondo blanco
    padding: sizes.sm || 10, // margen interno
    borderRadius: sizes.radius || 10, // bordes redondeados
    borderWidth: 1,
    borderColor: colors.border || "#ccc",
  },

  // ---------------------------------------------
  // Botón para agregar nota o abrir cámara/galería
  // ---------------------------------------------
  addButton: {
    backgroundColor: colors.primary || "#27282cff", // color principal
    paddingVertical: sizes.sm || 10, // padding vertical
    paddingHorizontal: sizes.base || 15, // padding lateral
    borderRadius: sizes.radius || 10,
    marginLeft: sizes.sm || 10, // separación respecto al input
    justifyContent: "center", // centra el texto e ícono
  },

  // ---------------------------------------------
  // Texto dentro del botón (por ejemplo “Agregar” o “Cámara”)
  // ---------------------------------------------
  addButtonText: {
    color: colors.onPrimary || "#fff", // texto blanco
    fontWeight: "bold",
  },

  // ---------------------------------------------
  // Contenedor de la lista de notas (ScrollView)
  // ---------------------------------------------
  notesList: {
    marginTop: sizes.sm || 10, // separación respecto a los botones
  },

  // ---------------------------------------------
  // Tarjeta individual de cada nota
  // ---------------------------------------------
  noteCard: {
    backgroundColor: colors.surface || "#fff", // fondo blanco
    padding: sizes.base || 15, // espaciado interno
    borderRadius: sizes.radius || 10,
    marginBottom: sizes.sm || 10, // separación entre notas
    borderWidth: 1,
    borderColor: colors.border || "#ddd",
  },

  // ---------------------------------------------
  // Texto de la nota
  // ---------------------------------------------
  noteText: {
    fontSize: sizes.md || 16,
    color: colors.textPrimary || "#333", // texto oscuro
  },

  // ---------------------------------------------
  // Imagen dentro de una nota (si se agrega con cámara o galería)
  // ---------------------------------------------
  noteImage: {
    width: "100%", // ocupa todo el ancho disponible
    height: 180, // altura fija
    borderRadius: sizes.radius || 10,
    marginTop: sizes.sm || 10, // separación respecto al texto
  },
});

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo define la parte estética de la pantalla **Notas**,
//    donde el usuario puede crear y visualizar notas personales.
//
// 🔹 Se importa desde `app/screens/notas.tsx`:
//
//    ```tsx
//    import { notasStyles as styles } from "@utils/styles/notas";
//    ```
//
// 🔹 Organización de los estilos:
//
// | Estilo | Función |
// |---------|----------|
// | **container** | Estructura general de la pantalla |
// | **title** | Título principal (“Mis Notas”) |
// | **inputContainer** | Fila que agrupa input + botón |
// | **input** | Campo para escribir una nota |
// | **addButton** | Botón para agregar nota o abrir cámara/galería |
// | **addButtonText** | Texto dentro del botón |
// | **notesList** | Contenedor de la lista de notas (scroll) |
// | **noteCard** | Tarjeta individual de cada nota |
// | **noteText** | Texto principal de la nota |
// | **noteImage** | Imagen dentro de la nota (si se agrega) |
//
// 🔹 Conceptos técnicos:
//
// - Se usa `flexDirection: "row"` para poner input y botón en la misma línea.  
// - Los colores y tamaños provienen de `@utils` (lo que garantiza coherencia global).  
// - Se prioriza un diseño **limpio y claro**, con buen contraste entre fondo y texto.  
// - El componente se adapta fácilmente a futuras funcionalidades (como guardar notas o adjuntar fotos).
//
// 🔹 Ejemplo de uso:
//
// ```tsx
// <View style={styles.inputContainer}>
//   <TextInput style={styles.input} placeholder="Escribe una nota..." />
//   <TouchableOpacity style={styles.addButton}>
//     <Text style={styles.addButtonText}>Agregar</Text>
//
