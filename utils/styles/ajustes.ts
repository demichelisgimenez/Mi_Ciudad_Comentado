// ===============================================
// ARCHIVO: utils/styles/ajustes.ts
// -----------------------------------------------
// Contiene los estilos específicos para la pantalla "Ajustes".
// Centraliza los valores de color, tamaño y espaciado usando variables globales
// definidas en "@utils" (como colors y sizes).
//
// Esto permite mantener consistencia visual en toda la app “Mi Ciudad”.
// ===============================================

// Importamos la función StyleSheet de React Native (para crear hojas de estilo)
import { StyleSheet } from "react-native";

// Importamos colores y tamaños definidos globalmente en la carpeta utils
import { colors, sizes } from "@utils";

// ===============================================
// DEFINICIÓN DE ESTILOS
// -----------------------------------------------
// Creamos y exportamos un objeto llamado ajustesStyles
// que contiene todos los estilos aplicables a los componentes
// de la pantalla de Ajustes.
// ===============================================
export const ajustesStyles = StyleSheet.create({
  // ---------------------------------------------
  // Contenedor principal de la pantalla
  // ---------------------------------------------
  container: {
    flex: 1, // ocupa toda la pantalla disponible
    backgroundColor: colors.background || "#f9f9f9", // color de fondo general
    padding: sizes.base || 20, // margen interno (espaciado)
  },

  // ---------------------------------------------
  // Título principal ("Ajustes")
  // ---------------------------------------------
  title: {
    fontSize: sizes.lg || 22, // tamaño grande de fuente
    fontWeight: "bold", // negrita
    marginBottom: sizes.base || 20, // espacio inferior
    color: colors.primary || "#1e1f20ff", // color principal de texto
    textAlign: "center", // centrado horizontal
  },

  // ---------------------------------------------
  // Sección (bloques que agrupan opciones)
  // ---------------------------------------------
  section: {
    backgroundColor: colors.surface || "#fff", // fondo blanco o color de superficie
    padding: sizes.base || 15, // espaciado interno
    borderRadius: sizes.radius || 12, // bordes redondeados
    marginBottom: sizes.base || 20, // separación entre secciones
    borderWidth: 1, // borde fino
    borderColor: colors.border || "#ddd", // color del borde
  },

  // ---------------------------------------------
  // Título dentro de cada sección (por ejemplo, "Tema", "Notificaciones")
  // ---------------------------------------------
  sectionTitle: {
    fontSize: sizes.md || 18,
    fontWeight: "bold",
    marginBottom: sizes.sm || 10,
    color: colors.textPrimary || "#1b1a1fff",
  },

  // ---------------------------------------------
  // Campo de entrada (si se usa un TextInput en el futuro)
  // ---------------------------------------------
  input: {
    backgroundColor: colors.surface || "#fff",
    padding: sizes.sm || 10,
    borderRadius: sizes.radius || 10,
    borderWidth: 1,
    borderColor: colors.border || "#ccc",
    marginBottom: sizes.sm || 10,
  },

  // ---------------------------------------------
  // Botón genérico (por ejemplo, “Cambiar a modo oscuro”)
  // ---------------------------------------------
  button: {
    backgroundColor: colors.primary || "#212224ff", // color principal
    paddingVertical: sizes.sm || 10, // padding vertical
    paddingHorizontal: sizes.base || 15, // padding horizontal
    borderRadius: sizes.radius || 10,
    alignItems: "center", // centra el texto dentro del botón
  },

  // ---------------------------------------------
  // Texto dentro del botón
  // ---------------------------------------------
  buttonText: {
    color: colors.onPrimary || "#fff", // texto blanco sobre fondo oscuro
    fontWeight: "bold", // negrita
  },

  // ---------------------------------------------
  // Fila para elementos alineados horizontalmente (ej: etiqueta + switch)
  // ---------------------------------------------
  row: {
    flexDirection: "row", // organiza los elementos en fila
    justifyContent: "space-between", // deja espacio entre los extremos
    alignItems: "center", // centra verticalmente los elementos
    marginVertical: sizes.sm || 10, // margen superior e inferior
  },

  // ---------------------------------------------
  // Texto descriptivo junto al switch
  // ---------------------------------------------
  label: {
    fontSize: sizes.md || 16,
    color: colors.textPrimary || "#333", // tono oscuro para buena lectura
  },
});

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo define los estilos usados en la pantalla **Ajustes**.
//    Se importa desde `app/screens/ajustes.tsx` mediante:
//
//    ```tsx
//    import { ajustesStyles as styles } from "@utils/styles/ajustes";
//    ```
//
// 🔹 Organización de los estilos:
//
// | Estilo | Uso principal |
// |---------|----------------------------|
// | **container** | Estructura general de la pantalla |
// | **title** | Título principal (“Ajustes”) |
// | **section** | Bloques que agrupan configuraciones |
// | **sectionTitle** | Subtítulo dentro de cada bloque |
// | **row** | Disposición horizontal (texto + switch) |
// | **button** | Botones táctiles (ej. cambiar tema) |
// | **buttonText** | Texto dentro del botón |
// | **label** | Texto descriptivo junto a un control |
// | **input** | (Opcional) campos de texto futuros |
//
// 🔹 Uso de variables globales:
//
// - `colors`: proviene de `@utils/colors` y define la paleta del tema (claro/oscuro).
// - `sizes`: define medidas comunes (base, sm, md, lg, radius, etc.).
//
// Esto permite mantener una **coherencia visual global**, 
// ya que todos los módulos de la app comparten el mismo sistema de diseño.
//
// 🔹 Ejemplo de aplicación práctica:
//
// ```tsx
// <View style={styles.section}>
//   <Text style={styles.sectionTitle}>Notificaciones</Text>
//   <View style={styles.row}>
//     <Text style={styles.label}>Recibir notificaciones</Text>
//     <Switch />
//   </View>
// </View>
// ```
//
// 🔹 En resumen:
//
// Este archivo controla toda la parte estética de la pantalla de **Ajustes**,
// garantizando que los elementos estén bien distribuidos, legibles
// y visualmente coherentes con el resto de la app.
//
// OBJETIVO EN LA DEFENSA:
//
// Explicar que los estilos están modularizados en archivos separados
// (uno por pantalla), que usan un sistema de diseño global (`colors`, `sizes`),
// y que esta organización mejora la escalabilidad y la consistencia visual.
//
