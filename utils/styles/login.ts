// ===============================================
// ARCHIVO: utils/styles/login.ts
// -----------------------------------------------
// Contiene los estilos específicos para la pantalla "Login".
// Define la apariencia del formulario de inicio de sesión,
// incluyendo los campos de texto, el botón principal y los enlaces.
//
// Se basa en variables globales de color y tamaño definidas en "@utils"
// para mantener coherencia visual con el resto de la app “Mi Ciudad”.
// ===============================================

import { StyleSheet } from "react-native";
import { colors, sizes } from "@utils"; // Paleta y medidas globales del proyecto

// ===============================================
// DEFINICIÓN DE ESTILOS
// -----------------------------------------------
// Exporta el objeto `loginStyles` con todos los estilos aplicables
// a los componentes de la pantalla de inicio de sesión.
// ===============================================
export const loginStyles = StyleSheet.create({
  // ---------------------------------------------
  // Contenedor principal del formulario
  // ---------------------------------------------
  container: {
    flex: 1, // ocupa toda la pantalla
    justifyContent: "center", // centra verticalmente el contenido
    backgroundColor: colors.background || "#f9f9f9", // color de fondo general
    padding: sizes.base || 20, // espacio interno general
  },

  // ---------------------------------------------
  // Título principal ("Iniciar Sesión")
  // ---------------------------------------------
  title: {
    fontSize: sizes.lg || 24, // fuente grande
    fontWeight: "bold", // negrita
    marginBottom: sizes.base || 30, // separación inferior
    color: colors.primary || "#1e3a8a", // color principal del texto
    textAlign: "center", // centrado horizontal
  },

  // ---------------------------------------------
  // Campos de entrada (usuario, contraseña)
  // ---------------------------------------------
  input: {
    backgroundColor: colors.surface || "#fff", // fondo blanco
    padding: sizes.sm || 12, // espaciado interno
    borderRadius: sizes.radius || 10, // esquinas redondeadas
    borderWidth: 1, // borde fino
    borderColor: colors.border || "#ccc", // color del borde
    marginBottom: sizes.base || 15, // separación entre inputs
  },

  // ---------------------------------------------
  // Botón principal ("Ingresar")
  // ---------------------------------------------
  button: {
    backgroundColor: colors.primary || "#18181aff", // color de fondo principal
    paddingVertical: sizes.sm || 12, // padding vertical
    borderRadius: sizes.radius || 10, // bordes redondeados
    alignItems: "center", // centra el texto
    marginBottom: sizes.base || 20, // separación con el siguiente elemento
  },

  // ---------------------------------------------
  // Texto dentro del botón principal
  // ---------------------------------------------
  buttonText: {
    color: colors.onPrimary || "#fff", // texto blanco
    fontWeight: "bold",
    fontSize: sizes.md || 16,
  },

  // ---------------------------------------------
  // Enlace inferior (por ejemplo “¿No tenés cuenta?”)
  // ---------------------------------------------
  linkButton: {
    alignItems: "center", // centra horizontalmente
    marginBottom: sizes.sm || 10,
  },

  // ---------------------------------------------
  // Texto del enlace (subrayado, color tenue)
  // ---------------------------------------------
  linkText: {
    fontSize: sizes.sm || 14,
    color: colors.textSecondary || "#555", // gris medio
    textDecorationLine: "underline", // subrayado
  },
});

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo define la **apariencia visual del formulario de Login**,
//    que es la primera pantalla del flujo de autenticación.
//
// 🔹 Se importa en `app/auth/screens/login.tsx` mediante:
//
//    ```tsx
//    import { loginStyles as styles } from "@utils/styles/login";
//    ```
//
// 🔹 Organización de los estilos:
//
// | Estilo | Función |
// |---------|----------|
// | **container** | Contenedor general del formulario |
// | **title** | Encabezado principal (“Iniciar Sesión”) |
// | **input** | Campos de texto (usuario, contraseña) |
// | **button** | Botón principal de ingreso |
// | **buttonText** | Texto dentro del botón |
// | **linkButton** | Contenedor para los enlaces inferiores |
// | **linkText** | Texto de los enlaces (“Registrate”, etc.) |
//
// 🔹 Conceptos técnicos:
//
// - Se usa `justifyContent: "center"` para **centrar verticalmente** el formulario.
// - Los colores y tamaños provienen de `@utils`, lo que permite
//   mantener la coherencia visual en toda la aplicación.
// - `textDecorationLine: "underline"` simula el estilo de enlace clásico,
//   útil para acciones secundarias.
//
// 🔹 Ejemplo de aplicación:
//
// ```tsx
// <TextInput style={styles.input} placeholder="Usuario o email" />
// <TouchableOpacity style={styles.button}>
//   <Text style={styles.buttonText}>Ingresar</Text>
// </TouchableOpacity>
// <TouchableOpacity style={styles.linkButton}>
//   <Text style={styles.linkText}>¿No tenés cuenta? Registrate</Text>
// </TouchableOpacity>
// ```
//
// 🔹 En resumen:
//
// Este archivo controla la parte estética del **formulario de autenticación**,
// priorizando la claridad, la legibilidad y la organización visual.
// Define márgenes, colores y proporciones coherentes con el resto de pantallas.
//
// OBJETIVO EN LA DEFENSA:
//
// Explicar que los estilos se mantienen modulares, centralizados y coherentes;
// que el diseño del Login está pensado para una experiencia limpia y simple;
// y que todos los valores provienen del sistema global de diseño (`colors`, `sizes`)
// para mantener una identidad uniforme en toda la app.
//
