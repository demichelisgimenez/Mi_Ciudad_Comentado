// ===============================================
// PANTALLA: AJUSTES
// Permite simular la configuración del usuario:
// activar/desactivar notificaciones y cambiar el tema visual.
// ===============================================

// Importamos React y el hook useState para manejar estados locales
import React, { useState } from "react";

// Importamos componentes base de React Native:
// - View: contenedor
// - Text: texto simple
// - TouchableOpacity: botón táctil
// - Switch: interruptor (encendido/apagado)
// - TextInput: campo de texto (aunque en esta versión no se usa)
import { View, Text, TouchableOpacity, Switch, TextInput } from "react-native";

// Importamos los estilos definidos para esta pantalla
import { ajustesStyles as styles } from "@utils/styles/ajustes";

// ===============================================
// COMPONENTE PRINCIPAL: AJUSTES
// ===============================================
export default function Ajustes() {
  // Estado local que controla el valor del Switch (encendido o apagado)
  // useState(false) => comienza en "apagado"
  const [fakeSwitch, setFakeSwitch] = useState(false);

  // ===============================================
  // ESTRUCTURA VISUAL DE LA PANTALLA
  // ===============================================
  return (
    // Contenedor principal de toda la pantalla
    <View style={styles.container}>

      {/* Título principal */}
      <Text style={styles.title}>Ajustes</Text>

      {/* ====================================================
           SECCIÓN: NOTIFICACIONES
           ==================================================== */}
      <View style={styles.section}>
        {/* Subtítulo de la sección */}
        <Text style={styles.sectionTitle}>Notificaciones</Text>

        {/* Fila con texto + switch */}
        <View style={styles.row}>
          {/* Etiqueta descriptiva */}
          <Text style={styles.label}>Recibir notificaciones</Text>

          {/* Switch (interruptor) controlado por el estado fakeSwitch */}
          <Switch
            value={fakeSwitch} // valor actual (true = encendido / false = apagado)
            // cambia el valor del switch al presionarlo
            onValueChange={() => setFakeSwitch(!fakeSwitch)}
            // "disabled" en false => está activo y se puede usar
            disabled={false}
          />
        </View>
      </View>

      {/* ====================================================
           SECCIÓN: TEMA DE LA APLICACIÓN
           ==================================================== */}
      <View style={styles.section}>
        {/* Subtítulo de la sección */}
        <Text style={styles.sectionTitle}>Tema</Text>

        {/* Botón táctil para cambiar el tema visual */}
        {/* (por ahora es decorativo, sin acción funcional) */}
        <TouchableOpacity style={styles.button} disabled={false}>
          <Text style={styles.buttonText}>Cambiar a modo oscuro</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// Esta pantalla simula las configuraciones básicas del usuario.
// Contiene dos secciones:
//
// 🔹 1. NOTIFICACIONES
// - Usa un Switch controlado por el estado "fakeSwitch".
// - Cuando el usuario lo toca, cambia su valor entre true y false.
// - En versiones futuras podría conectarse con el sistema real de notificaciones.
//
// 🔹 2. TEMA
// - Muestra un botón "Cambiar a modo oscuro".
// - En esta entrega no cambia el tema todavía,
//   pero demuestra la estructura y el diseño del apartado de preferencias.
//
// TECNOLOGÍAS Y CONCEPTOS CLAVE:
// - useState(): maneja el estado del switch.
// - Switch: componente nativo de Android/iOS para encender/apagar.
// - TouchableOpacity: crea botones táctiles personalizados.
// - Organización modular: los estilos se importan desde utils/styles/ajustes.ts.
//
// FUTURAS MEJORAS:
// - Implementar cambio de tema real (modo claro/oscuro global).
// - Guardar las preferencias en almacenamiento local (AsyncStorage o SecureStore).
// - Agregar más opciones (cerrar sesión, cambiar idioma, etc.).
//
// OBJETIVO EN LA DEFENSA:
// Mostrar que entendés cómo manejar estados con useState,
// cómo funcionan los componentes controlados (Switch),
// y cómo se estructuran distintas secciones en una misma pantalla.
//
