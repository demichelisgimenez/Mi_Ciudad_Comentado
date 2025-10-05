// ===============================================
// PANTALLA: NOTAS
// Permite al usuario escribir y visualizar notas personales.
// En esta primera entrega las notas son estáticas (no se guardan todavía).
// ===============================================

// Importamos React para poder usar JSX
import React from "react";

// Importamos componentes base de React Native:
// - View: contenedor principal
// - Text: texto
// - TextInput: campo de texto para escribir la nota
// - TouchableOpacity: botón táctil
// - ScrollView: contenedor con desplazamiento vertical (para la lista de notas)
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

// Importamos los estilos definidos para esta pantalla
import { notasStyles as styles } from "@utils/styles/notas";

// Importamos íconos de Ionicons (librería de Expo con íconos de interfaz)
import { Ionicons } from "@expo/vector-icons";

// ===============================================
// COMPONENTE PRINCIPAL: NOTAS
// ===============================================
export default function Notas() {
  return (
    // Contenedor general de la pantalla
    <View style={styles.container}>

      {/* TÍTULO PRINCIPAL */}
      <Text style={styles.title}>Mis Notas</Text>

      {/* ====================================================
           SECCIÓN: INPUT PARA ESCRIBIR UNA NUEVA NOTA
           ==================================================== */}
      <View style={styles.inputContainer}>
        {/* Campo de texto donde el usuario podría escribir una nota */}
        <TextInput
          style={styles.input}
          placeholder="Escribe una nota..." // texto guía cuando el campo está vacío
          editable={true} // true = el usuario puede escribir
        />

        {/* Botón para agregar la nota (todavía sin funcionalidad) */}
        <TouchableOpacity style={styles.addButton} disabled={false}>
          {/* Ícono de "+" */}
          <Ionicons name="add-circle-outline" size={20} color="white" />
          {/* Texto del botón */}
          <Text style={styles.addButtonText}> Agregar</Text>
        </TouchableOpacity>
      </View>

      {/* ====================================================
           SECCIÓN: BOTONES DE CÁMARA Y GALERÍA
           (por ahora solo visuales)
           ==================================================== */}
      <View style={styles.inputContainer}>
        {/* Botón para abrir la cámara */}
        <TouchableOpacity style={styles.addButton} disabled={false}>
          <Ionicons name="camera-outline" size={20} color="white" />
          <Text style={styles.addButtonText}> Cámara</Text>
        </TouchableOpacity>

        {/* Botón para abrir la galería */}
        <TouchableOpacity style={styles.addButton} disabled={false}>
          <Ionicons name="images-outline" size={20} color="white" />
          <Text style={styles.addButtonText}> Galería</Text>
        </TouchableOpacity>
      </View>

      {/* ====================================================
           SECCIÓN: LISTA DE NOTAS EXISTENTES
           (por ahora, tres notas fijas a modo de ejemplo)
           ==================================================== */}
      <ScrollView style={styles.notesList}>
        {/* Cada nota se representa como una tarjeta */}
        <View style={styles.noteCard}>
          <Text style={styles.noteText}>Comprar pan</Text>
        </View>

        <View style={styles.noteCard}>
          <Text style={styles.noteText}>Ir a la Farmacia</Text>
        </View>

        <View style={styles.noteCard}>
          <Text style={styles.noteText}>Realizar evaluaciones</Text>
        </View>
      </ScrollView>
    </View>
  );
}

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// Esta pantalla permite escribir notas personales y verlas listadas.
// Por ahora no hay lógica funcional (las notas no se guardan),
// pero la interfaz ya está diseñada para incorporar esa funcionalidad.
//
// ESTRUCTURA PRINCIPAL:
// 1️⃣ Título "Mis Notas".
// 2️⃣ Input + botón "Agregar" para crear una nueva nota (visual).
// 3️⃣ Botones de "Cámara" y "Galería" (a futuro permitirán adjuntar imágenes).
// 4️⃣ Lista scrollable (ScrollView) con tres notas de ejemplo.
//
// COMPONENTES CLAVE:
// - TextInput: recibe texto del usuario.
// - TouchableOpacity: botones personalizados (Agregar, Cámara, Galería).
// - Ionicons: íconos visuales para acompañar cada acción.
// - ScrollView: lista desplazable que muestra las notas.
//
// CONCEPTOS TÉCNICOS IMPORTANTES:
// - editable={true} → permite escribir en el input.
// - disabled={false} → los botones están activos (aunque no tengan acción).
// - Ionicons: nombres de íconos (“add-circle-outline”, “camera-outline”, etc.).
//
// FUTURAS MEJORAS:
// - Guardar notas con useState y FlatList (estado local).
// - Persistir datos con AsyncStorage o base Supabase.
// - Implementar cámara y galería reales con expo-camera y expo-image-picker.
//
// OBJETIVO EN LA DEFENSA:
// Mostrar que comprendés cómo se arma una interfaz funcional,
// cómo se agrupan componentes, y cómo se preparan secciones
// para futuras funciones (inputs, botones, lista).
//
