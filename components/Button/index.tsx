// ===============================================
// COMPONENTE: Button (Botón reutilizable)
// Archivo: components/Button/index.tsx
// Este componente define un botón personalizado reutilizable en toda la app.
// Usa estilos propios y colores del sistema de diseño (materialColors).
// ===============================================

// Importamos componentes base de React Native
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

// Importamos los colores del tema (Material Design adaptado)
import { materialColors } from "../../utils/colors";

// ===============================================
// INTERFAZ DE PROPIEDADES (TypeScript)
// ===============================================
//
// Define qué datos recibe el botón:
// - onPress: función que se ejecuta cuando el botón se toca.
// - disabled: indica si el botón está deshabilitado (opcional).
// - title: texto que se muestra dentro del botón.
//
interface IProps {
  onPress: () => void;
  disabled?: boolean;
  title: string;
}

// ===============================================
// COMPONENTE PRINCIPAL: Button
// ===============================================
//
// Este componente se usa para mantener consistencia visual
// en todos los botones de la aplicación.
//
export default function Button(props: IProps) {
  // Desestructuramos las props para usarlas más fácilmente
  const { onPress, disabled, title } = props;

  // Renderizado visual
  return (
    // TouchableOpacity permite detectar la interacción táctil del usuario
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      {/* View que define el fondo y bordes del botón */}
      <View
        style={{
          ...styles.container,
          ...(disabled && styles.disabledContainer), // aplica estilo distinto si está deshabilitado
        }}
      >
        {/* Texto del botón */}
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

// ===============================================
// ESTILOS
// ===============================================
const styles = StyleSheet.create({
  // Estilo base del contenedor del botón
  container: {
    backgroundColor: materialColors.schemes.dark.primary, // color principal del tema oscuro
    borderRadius: 8, // bordes redondeados
    padding: 12, // espacio interno (padding)
  },

  // Estilo alternativo cuando el botón está deshabilitado
  disabledContainer: {
    backgroundColor: materialColors.coreColors.neutral, // color gris neutro
  },

  // Estilo del texto dentro del botón
  text: {
    color: materialColors.schemes.dark.onPrimary, // color de texto sobre fondo primario
  },
});

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este componente representa un botón genérico reutilizable.
//    Se usa en distintas pantallas como “Farmacias”, “Escuelas”, “Notas”, etc.
//
// FUNCIONAMIENTO:
//
// 1️⃣ `TouchableOpacity` → detecta la pulsación del usuario y ejecuta `onPress`.
// 2️⃣ `disabled` → cuando es true, el botón no responde y cambia de color.
// 3️⃣ `View` → define la caja visual del botón (fondo, forma y color).
// 4️⃣ `Text` → muestra el texto que se pasa en `title`.
// 5️⃣ `materialColors` → garantiza coherencia visual con el resto de la app.
//
// CONCEPTOS CLAVE:
//
// - Reutilización: en lugar de crear botones distintos en cada pantalla,
//   se crea un componente genérico que recibe texto y acción como props.
//
// - Desestructuración: permite acceder fácilmente a las props sin usar `props.` todo el tiempo.
//
// - Operador spread (`...`):
//   Aplica varios estilos combinando objetos, por ejemplo:
//   `{...styles.container, ...(disabled && styles.disabledContainer)}`
//   → si el botón está deshabilitado, agrega ese estilo extra.
//
// FUTURAS MEJORAS:
//
// - Agregar una prop para cambiar el color o tamaño del botón.
// - Incluir un ícono junto al texto (por ejemplo, usando Ionicons).
// - Añadir animación de “presionado” o “loading”.
//
// OBJETIVO EN LA DEFENSA:
//
// Mostrar que entendés cómo crear componentes reutilizables,
// cómo se manejan las props y los estados visuales,
// y cómo se aplican estilos condicionales en React Native.
//
