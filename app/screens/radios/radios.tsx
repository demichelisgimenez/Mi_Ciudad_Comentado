// ===============================================
// PANTALLA: RADIOS
// Simula un reproductor de radio FM con lista de emisoras locales.
// Permite "iniciar/detener" la reproducción y cambiar de estación.
// ===============================================

// Importamos React y el hook useState para manejar estados locales
import React, { useState } from "react";

// Importamos componentes base de React Native:
// - View: contenedor
// - Text: texto
// - TouchableOpacity: botones táctiles
// - ScrollView: para permitir desplazamiento vertical
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

// Importamos los estilos específicos de la pantalla de radios
import { radiosStyles as styles } from "@utils/styles/radios";

// Importamos íconos de Ionicons (librería de Expo)
import { Ionicons } from "@expo/vector-icons";

// ===============================================
// COMPONENTE PRINCIPAL: RADIOS
// ===============================================
export default function RadiosScreen() {
  // Estado: controla si la radio está "reproduciendo" o "detenida"
  const [isPlaying, setIsPlaying] = useState(false);

  // Estado: guarda la estación actualmente seleccionada (frecuencia y nombre)
  const [currentStation, setCurrentStation] = useState({
    freq: 99.5,
    name: "FM Federal",
  });

  // Lista de emisoras predefinidas (presets) de la ciudad de Federal
  const presets = [
    { freq: 99.9, name: "FM 100 Federal" },
    { freq: 90.5, name: "Radio Integración" },
    { freq: 96.9, name: "La Nueva del Chamamé" },
    { freq: 97.9, name: "Radio Vida Federal" },
    { freq: 102.1, name: "Radio Universo" },
    { freq: 93.3, name: "Radio Venecia" },
  ];

  // ===============================================
  // INTERFAZ DE USUARIO
  // ===============================================
  return (
    // ScrollView permite hacer scroll si la lista o los controles exceden el alto de pantalla
    <ScrollView style={{ flex: 1 }}>

      {/* ====================================================
           ENCABEZADO (HEADER)
           ==================================================== */}
      <View style={styles.header}>
        <Text style={styles.title}>
          {/* Ícono de radio + título */}
          <Ionicons name="radio-outline" size={24} color="black" /> Radio FM
        </Text>
        <Text style={styles.subtitle}>Federal, Entre Ríos</Text>
      </View>

      {/* ====================================================
           TARJETA PRINCIPAL DE ESTACIÓN ACTUAL
           ==================================================== */}
      <View style={styles.card}>
        {/* Frecuencia grande (por ejemplo, 99.5) */}
        <Text style={styles.frequency}>{currentStation.freq}</Text>

        {/* Nombre de la emisora (por ejemplo, FM Federal) */}
        <Text style={styles.stationName}>{currentStation.name}</Text>

        {/* Indicador de estado (punto + texto) */}
        <View style={styles.status}>
          <View style={styles.statusDot} /> {/* punto de color */}
          <Text style={styles.statusText}>
            {isPlaying ? "Reproduciendo" : "Detenido"}
          </Text>
        </View>
      </View>

      {/* ====================================================
           CONTROLES DE REPRODUCCIÓN (anterior / play-pause / siguiente)
           ==================================================== */}
      <View style={styles.controls}>
        {/* Botón anterior (sin funcionalidad aún) */}
        <TouchableOpacity style={styles.controlBtn}>
          <Ionicons name="play-skip-back" size={28} color="black" />
        </TouchableOpacity>

        {/* Botón principal de Play/Pause */}
        <TouchableOpacity
          style={[styles.controlBtn, styles.playBtn]}
          onPress={() => setIsPlaying(!isPlaying)} // cambia el estado de reproducción
        >
          {isPlaying ? (
            // Si está reproduciendo, muestra ícono de pausa
            <Ionicons name="pause" size={32} color="white" />
          ) : (
            // Si está detenido, muestra ícono de play
            <Ionicons name="play" size={32} color="white" />
          )}
        </TouchableOpacity>

        {/* Botón siguiente (sin funcionalidad aún) */}
        <TouchableOpacity style={styles.controlBtn}>
          <Ionicons name="play-skip-forward" size={28} color="black" />
        </TouchableOpacity>
      </View>

      {/* ====================================================
           SECCIÓN DE EMISORAS PREDEFINIDAS (PRESETS)
           ==================================================== */}
      <View style={styles.presets}>
        {/* Título de la sección */}
        <Text style={styles.presetsLabel}>Emisoras de Federal</Text>

        {/* Cuadrícula de emisoras */}
        <View style={styles.presetGrid}>
          {presets.map((p, idx) => (
            <TouchableOpacity
              key={idx} // clave única
              style={styles.presetBtn}
              onPress={() => setCurrentStation(p)} // cambia la estación seleccionada
            >
              {/* Muestra la frecuencia y el nombre */}
              <Text style={styles.presetText}>{p.freq}</Text>
              <Text style={styles.presetName}>{p.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// Esta pantalla simula un reproductor de radio FM local.
// No reproduce audio real todavía, pero muestra el diseño completo
// con botones de control y una lista de emisoras de Federal.
//
// FUNCIONAMIENTO:
//
// 1️⃣ El estado "isPlaying" alterna entre "Reproduciendo" y "Detenido"
//     al presionar el botón Play/Pause.
// 2️⃣ "currentStation" guarda la frecuencia y nombre de la emisora actual.
// 3️⃣ La sección de presets permite cambiar la estación seleccionada
//     tocando sobre una de las emisoras de la lista.
//
// ESTRUCTURA:
//
// 🔹 Header → título e información de la ciudad.
// 🔹 Card principal → muestra la estación actual.
// 🔹 Controles → botones de reproducción (anterior, play/pause, siguiente).
// 🔹 Presets → grilla de emisoras locales.
//
// TECNOLOGÍAS CLAVE:
//
// - useState(): para manejar los estados de reproducción y estación actual.
// - TouchableOpacity: botones táctiles personalizados.
// - Ionicons: íconos visuales (radio, play, pause, skip).
// - ScrollView: permite desplazar toda la pantalla si el contenido excede el alto.
//
// FUTURAS MEJORAS:
//
// - Reproducir transmisiones en vivo con streaming de audio real.
// - Hacer que los botones de “siguiente” y “anterior” cambien la estación.
// - Agregar animaciones o visualizaciones de “sonido”.
// - Integrar un componente de volumen o mute.
//
// OBJETIVO EN LA DEFENSA:
//
// Explicar cómo se usa useState para controlar estados,
// cómo se actualiza dinámicamente la interfaz según el estado actual,
// y cómo se estructura una pantalla con varias secciones interactivas.
//
