// ===============================================
// PANTALLA: REGISTER (REGISTRO)
// Permite al usuario crear una nueva cuenta ingresando sus datos básicos.
// Contiene campos de texto, un botón de registro y un enlace para volver al login.
// ===============================================

// Importamos React y el hook useState para manejar el estado del ojo de contraseña
import React, { useState } from "react";

// Importamos componentes base de React Native:
// - View: contenedor principal
// - Text: para mostrar texto
// - TextInput: campos de texto (nombre, apellido, email, contraseña)
// - TouchableOpacity: botones táctiles
import { View, Text, TextInput, TouchableOpacity } from "react-native";

// Importamos los estilos específicos de esta pantalla
import { registerStyles as styles } from "@utils/styles/register";

// Importamos navegación para moverse entre pantallas del stack de autenticación
import { useNavigation } from "@react-navigation/native";

// Tipado del stack (para TypeScript)
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { AuthStackParamList } from "../index";

// Constantes con los nombres de rutas de autenticación (LOGIN, REGISTER)
import { AUTH_ROUTES } from "@utils/constants";

// Íconos de Expo (para mostrar/ocultar contraseña)
import { Ionicons } from "@expo/vector-icons";

// ===============================================
// COMPONENTE PRINCIPAL: REGISTER
// ===============================================
export default function Register() {
  // Hook de navegación tipado para el stack de autenticación
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  // Estado local para mostrar u ocultar la contraseña
  const [showPass, setShowPass] = useState(false);

  // ===============================================
  // INTERFAZ DE USUARIO
  // ===============================================
  return (
    // Contenedor principal
    <View style={styles.container}>
      {/* Título de la pantalla */}
      <Text style={styles.title}>Crear cuenta</Text>

      {/* ====================================================
           CAMPOS DE TEXTO PARA DATOS DEL USUARIO
           ==================================================== */}
      <TextInput style={styles.input} placeholder="Nombre" editable={true} />
      <TextInput style={styles.input} placeholder="Apellido" editable={true} />

      {/* Campo de email con teclado adaptado */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        editable={true}
      />

      {/* ====================================================
           CAMPO DE CONTRASEÑA CON ICONO DE OJO
           ==================================================== */}
      <View
        style={[styles.input, { flexDirection: "row", alignItems: "center" }]}
      >
        <TextInput
          style={{ flex: 1 }}
          placeholder="Contraseña"
          secureTextEntry={!showPass} // oculta el texto si showPass = false
          editable={true}
        />
        {/* Botón para alternar visibilidad de contraseña */}
        <TouchableOpacity onPress={() => setShowPass(!showPass)}>
          <Ionicons
            name={showPass ? "eye-off-outline" : "eye-outline"}
            size={22}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {/* ====================================================
           BOTÓN DE REGISTRO (decorativo por ahora)
           ==================================================== */}
      <TouchableOpacity style={styles.button} disabled={false}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      {/* ====================================================
           ENLACE PARA VOLVER AL LOGIN
           ==================================================== */}
      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => navigation.navigate(AUTH_ROUTES.LOGIN as never)}
      >
        <Text style={styles.linkText}>¿Ya tenés cuenta? Iniciá sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// Esta pantalla permite registrar un nuevo usuario (por ahora de forma visual).
// Está diseñada con campos básicos y una interfaz limpia y responsiva.
//
// ESTRUCTURA:
//
// 1️⃣ Título “Crear cuenta”.
// 2️⃣ Campos: nombre, apellido, email y contraseña.
// 3️⃣ Ojo de visibilidad de contraseña (toggle con useState).
// 4️⃣ Botón “Registrarse” (sin acción real en esta entrega).
// 5️⃣ Enlace “¿Ya tenés cuenta? Iniciá sesión” que navega al Login.
//
// FUNCIONAMIENTO:
//
// - useState(showPass): alterna entre mostrar y ocultar el texto del campo contraseña.
// - Ionicons: cambia entre íconos “eye-outline” y “eye-off-outline”.
// - useNavigation(): permite volver al login fácilmente.
// - keyboardType="email-address": cambia el teclado en móviles para emails.
//
// TECNOLOGÍAS Y CONCEPTOS:
//
// - React Native para la interfaz (TextInput, TouchableOpacity).
// - React Hooks para manejar estado local.
// - React Navigation (Stack) para moverse entre pantallas.
// - Tipado con TypeScript (AuthStackParamList, NativeStackNavigationProp).
//
// FUTURAS MEJORAS:
//
// - Validar los campos antes de registrar (nombre, email válido, contraseña segura).
// - Conectar con Supabase o backend real para guardar usuarios.
// - Mostrar errores o mensajes de éxito.
// - Agregar confirmación de contraseña.
//
// OBJETIVO EN LA DEFENSA:
//
// Mostrar que entendés la estructura de una pantalla de registro,
// cómo se maneja el estado interno del formulario,
// y cómo se usa la navegación y los íconos en conjunto para mejorar la experiencia del usuario.
//
