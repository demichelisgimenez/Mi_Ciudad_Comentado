// ===============================================
// ARCHIVO: utils/styles/qr.ts
// -----------------------------------------------
// Define los estilos específicos para la pantalla "QR".
// Esta pantalla utiliza la cámara del dispositivo para escanear
// códigos QR y mostrar los resultados detectados en pantalla.
//
// Usa colores del esquema Material Design (materialColors) para
// mantener coherencia visual con el resto de la app “Mi Ciudad”.
// ===============================================

import { StyleSheet } from "react-native";
import { materialColors } from "@utils/colors"; // paleta de colores Material Design

// ===============================================
// DEFINICIÓN DE ESTILOS
// -----------------------------------------------
// Exporta el objeto `qrStyles` con todos los estilos aplicables
// a los componentes de la pantalla de escaneo de códigos QR.
// ===============================================
export const qrStyles = StyleSheet.create({
  // ---------------------------------------------
  // Contenedor principal
  // ---------------------------------------------
  container: {
    flex: 1, // ocupa toda la pantalla
    justifyContent: "flex-end", // coloca los elementos secundarios al fondo (para el panel de acciones)
  },

  // ---------------------------------------------
  // Centro de la pantalla (vista mostrada si no hay permisos)
  // ---------------------------------------------
  center: {
    flex: 1,
    justifyContent: "center", // centra verticalmente el contenido
    alignItems: "center", // centra horizontalmente
  },

  // ---------------------------------------------
  // Contenedor de acciones (aparece después de escanear)
  // ---------------------------------------------
  actions: {
    backgroundColor: "rgba(0,0,0,0.6)", // fondo negro semitransparente
    padding: 20, // espaciado interno
  },

  // ---------------------------------------------
  // Texto descriptivo (“Link detectado:”, etc.)
  // ---------------------------------------------
  text: {
    color: materialColors.schemes.light.onSurface, // texto claro sobre fondo oscuro
    fontWeight: "bold", // negrita para resaltar
    marginBottom: 5, // espacio inferior
  },

  // ---------------------------------------------
  // Estilo para el enlace detectado (URL escaneada)
  // ---------------------------------------------
  link: {
    color: materialColors.schemes.light.primary, // color principal (azulado o destacado)
    marginBottom: 10,
  },
});

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo define el estilo de la pantalla **QR**,
//    que permite escanear códigos mediante la cámara del celular.
//
// 🔹 Se importa en `app/screens/qr.tsx`:
//
//    ```tsx
//    import { qrStyles as styles } from "@utils/styles/qr";
//    ```
//
// 🔹 Organización de los estilos:
//
// | Estilo | Función |
// |---------|----------|
// | **container** | Estructura base de toda la pantalla |
// | **center** | Centrado del mensaje cuando no hay permisos de cámara |
// | **actions** | Panel inferior con botones y texto luego del escaneo |
// | **text** | Texto informativo (por ejemplo “Link detectado:”) |
// | **link** | Estilo del enlace detectado (URL del código QR) |
//
// 🔹 Comportamiento visual:
//
// - Mientras el usuario **no haya dado permiso**, se muestra el estilo `center` con el texto y el botón “Dar permiso”.
// - Cuando se escanea un código, aparece el bloque `actions` en la parte inferior con fondo semitransparente, mostrando el enlace y los botones “Abrir link” o “Escanear de nuevo”.
// - Los colores se basan en el tema **Material Design claro**, importado desde `@utils/colors`.
//
// 🔹 Ejemplo de aplicación:
//
// ```tsx
// {scanned && (
//   <View style={styles.actions}>
//     <Text style={styles.text}>Link detectado:</Text>
//     <Text style={styles.link}>{link}</Text>
//     <Button title="Abrir link" onPress={() => Linking.openURL(link)} />
//   </View>
// )}
// ```
//
// 🔹 En resumen:
//
// Este archivo define los estilos que permiten mantener una presentación
// clara y moderna de la cámara y los resultados del escaneo QR.
// Se prioriza la legibilidad del texto y la distinción entre el fondo
// oscuro de la cámara y los elementos de la interfaz.
//
// OBJETIVO EN LA DEFENSA:
//
// Explicar que la pantalla QR combina cámara + interfaz visual,
// que este archivo define el panel de interacción,
// y que usa `materialColors` para integrarse con el sistema visual global
// de la app, respetando el diseño coherente y accesible.
//
