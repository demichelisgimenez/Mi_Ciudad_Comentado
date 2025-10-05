// ===============================================
// COMPONENTE: Link (Enlace táctil reutilizable)
// Archivo: components/Link/index.tsx
// Este componente define un texto presionable, similar a un enlace (link),
// usado para navegar o ejecutar acciones secundarias (por ejemplo: “Volver al login”).
// ===============================================

// Importamos componentes base de React Native
import { Pressable, Text, StyleSheet } from "react-native";

// Importamos utilidades del proyecto
import { colors } from "../../utils";
import { materialColors } from "../../utils/colors";

// ===============================================
// INTERFAZ DE PROPIEDADES (TypeScript)
// ===============================================
//
// Define qué datos recibe el componente:
// - link: texto que se mostrará como enlace (por ejemplo, "Volver al login!").
// - onPress: función que se ejecuta cuando el usuario toca el texto.
//
interface IProps {
  link: string;
  onPress: () => void;
}

// ===============================================
// COMPONENTE PRINCIPAL: Link
// ===============================================
//
// Este componente es una versión simplificada de un botón,
// con apariencia de texto y estilo similar a un hipervínculo.
//
export default function Link(props: IProps) {
  // Desestructuramos las props para usarlas directamente
  const { link, onPress } = props;

  // Renderizado visual del enlace
  return (
    // Pressable detecta el toque del usuario (como TouchableOpacity, pero más moderno)
    <Pressable onPress={onPress}>
      {/* Texto con estilo de link */}
      <Text style={styles.text}>{link}</Text>
    </Pressable>
  );
}

// ===============================================
// ESTILOS
// ===============================================
const styles = StyleSheet.create({
  // Estilo base del texto del link
  text: {
    color: materialColors.schemes.light.tertiary, // color del esquema claro (tono de acento)
  },
});

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este componente representa un enlace o texto interactivo,
//    ideal para acciones secundarias como:
//    - “Volver al login”
//    - “¿Olvidaste tu contraseña?”
//    - “Registrate aquí”
//
// FUNCIONAMIENTO:
//
// 1️⃣ Usa `Pressable` → detecta pulsaciones (más eficiente que TouchableOpacity).
// 2️⃣ Muestra un `Text` con el contenido que recibe por la prop `link`.
// 3️⃣ Ejecuta la función `onPress` cuando el usuario toca el texto.
// 4️⃣ Usa un color del sistema `materialColors` para mantener coherencia visual.
//
// CONCEPTOS CLAVE:
//
// - Reutilización: permite usar el mismo componente en varias pantallas,
//   cambiando solo el texto y la acción.
//
// - Props: recibe el texto (`link`) y la función (`onPress`) desde el padre.
//
// - Diseño simple y accesible: ideal para pantallas de autenticación.
//
// FUTURAS MEJORAS:
//
// - Agregar subrayado o efecto hover cuando se presiona.
// - Permitir pasar estilos personalizados como prop opcional.
// - Cambiar el color automáticamente según el tema (oscuro o claro).
//
// OBJETIVO EN LA DEFENSA:
//
// Explicar que este componente fue creado para evitar repetir código,
// brindar consistencia visual en los enlaces,
// y usar buenas prácticas de componentes reutilizables y tipados.
//
