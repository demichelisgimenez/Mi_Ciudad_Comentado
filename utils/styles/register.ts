// ===============================================
// ARCHIVO: utils/styles/register.ts
// -----------------------------------------------
// Contiene los estilos específicos para la pantalla “Registrarse”.
// Esta pantalla forma parte del flujo de autenticación de la app
// “Mi Ciudad” (junto con el Login).
//
// El objetivo visual es mantener claridad, orden y accesibilidad,
// con colores suaves y elementos bien espaciados.
// ===============================================

import { StyleSheet } from "react-native";
import { colors, sizes } from "@utils";

// ===============================================
// DEFINICIÓN DE ESTILOS
// -----------------------------------------------
// Exporta un objeto `registerStyles` con los estilos utilizados
// en la pantalla `app/auth/screens/register.tsx`.
// ===============================================
export const registerStyles = StyleSheet.create({
  // ---------------------------------------------
  // Contenedor principal
  // ---------------------------------------------
  container: {
    flex: 1, // ocupa toda la pantalla
    justifyContent: "center", // centra verticalmente el formulario
    backgroundColor: colors.background || "#f9f9f9", // fondo claro
    padding: sizes.base || 20, // margen interno
  },

  // ---------------------------------------------
  // Título principal ("Crear cuenta")
  // ---------------------------------------------
  title: {
    fontSize: sizes.lg || 24, // tamaño grande de texto
    fontWeight: "bold", // negrita
    marginBottom: sizes.base || 30, // espacio inferior
    color: colors.primary || "#1e3a8a", // color principal (azul institucional)
    textAlign: "center", // centrado
  },

  // ---------------------------------------------
  // Campo de entrada (TextInput)
  // ---------------------------------------------
  input: {
    backgroundColor: colors.surface || "#fff", // fondo blanco
    padding: sizes.sm || 12, // espaciado interno
    borderRadius: sizes.radius || 10, // esquinas redondeadas
    borderWidth: 1,
    borderColor: colors.border || "#ccc", // gris suave
    marginBottom: sizes.base || 15, // separación entre campos
  },

  // ---------------------------------------------
  // Botón principal ("Registrarse")
  // ---------------------------------------------
  button: {
    backgroundColor: colors.primary || "#121213ff", // azul oscuro
    paddingVertical: sizes.sm || 12,
    borderRadius: sizes.radius || 10,
    alignItems: "center", // centra el texto del botón
    marginBottom: sizes.base || 20,
  },

  // Texto dentro del botón
  buttonText: {
    color: colors.onPrimary || "#fff", // texto blanco sobre fondo oscuro
    fontWeight: "bold",
    fontSize: sizes.md || 16,
  },

  // ---------------------------------------------
  // Botones de enlace (navegación secundaria)
  // ---------------------------------------------
  linkButton: {
    alignItems: "center", // centra el texto del enlace
    marginBottom: sizes.sm || 10,
  },

  // Texto del enlace (“¿Ya tenés cuenta? Iniciá sesión”)
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
// 🔹 Este archivo define los estilos para la pantalla **Registrar cuenta**,
//    usada en el flujo de autenticación de la aplicación.
//
// 🔹 Se importa dentro de:
//    ```tsx
//    import { registerStyles as styles } from "@utils/styles/register";
//    ```
//
// 🔹 Estructura principal de los estilos:
//
// | Estilo | Uso principal |
// |---------|----------------------------|
// | **container** | Contenedor general del formulario |
// | **title** | Encabezado principal (“Crear cuenta”) |
// | **input** | Campos de texto (nombre, apellido, email, contraseña) |
// | **button / buttonText** | Botón principal para confirmar el registro |
// | **linkButton / linkText** | Enlace para volver al inicio de sesión |
//
// 🔹 Conceptos técnicos:
//
// - Se usa un **diseño centrado verticalmente** (`justifyContent: "center"`)  
//   para enfocar la atención del usuario en el formulario.  
// - Se utiliza una **paleta clara** con contrastes definidos para legibilidad.  
// - El uso de `sizes` y `colors` mantiene coherencia con el resto del proyecto,
//   permitiendo cambios globales fáciles (tema claro/oscuro, tamaños, etc.).
//
// 🔹 Ejemplo de aplicación práctica:
//
// ```tsx
// <TextInput style={styles.in
