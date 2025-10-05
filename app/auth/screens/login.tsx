// ===============================================
// PANTALLA: LOGIN
// Permite al usuario iniciar sesión en la aplicación.
// Incluye campos de usuario y contraseña, y un enlace al registro.
// ===============================================

// Importamos React y el hook useState (para manejar el mostrar/ocultar contraseña)
import React, { useState } from "react";

// Importamos componentes base de React Native:
// - View: contenedor principal
// - Text: para mostrar texto
// - TextInput: para ingresar texto (usuario y contraseña)
// - TouchableOpacity: botones táctiles
import { View, Text, TextInput, TouchableOpacity } from "react-native";

// Importamos los estilos definidos para esta pantalla
import { loginStyles as styles } from "@utils/styles/login";

// Importamos navegación (para ir a la pantalla de registro)
import { useNavigation } from "@react-navigation/native";

// Tipado del stack de autenticación (para TypeScript)
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type { AuthStackParamList } from "../index";

// Constantes con nombres de rutas del sistema de autenticación
import { AUTH_ROUTES } from "@utils/constants";

// Íconos de Expo (para el ojo de mostrar/ocultar contraseña)
import { Ionicons } from "@expo/vector-icons";

// ===============================================
// COMPONENTE PRINCIPAL: LOGIN
// ===============================================
export default function Login() {
  // Configuramos el hook de navegación tipado para el stack de autenticación
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  // Estado local que controla si la contraseña se ve o no
  const [showPass, setShowPass] = useState(false);

  // ===============================================
  // INTERFAZ VISUAL
  // ===============================================
  return (
    <View style={styles.container}>
      {/* Título de la pantalla */}
      <Text style={styles.title}>Iniciar Sesión</Text>

      {/* ====================================================
           CAMPO DE USUARIO / EMAIL
           ==================================================== */}
      <TextInput
        style={styles.input}
        placeholder="Usuario o email"
        editable={true}
      />

      {/* ====================================================
           CAMPO DE CONTRASEÑA CON ICONO DE OJO
           ==================================================== */}
      <View
        style={[styles.input, { flexDirection: "row", alignItems: "center" }]}
      >
        {/* Campo de texto para la contraseña */}
        <TextInput
          style={{ flex: 1 }}
          placeholder="Contraseña"
          secureTextEntry={!showPass} // oculta el texto cuando showPass = false
          editable={true}
        />

        {/* Botón de ícono que alterna entre mostrar/ocultar contraseña */}
        <TouchableOpacity onPress={() => setShowPass(!showPass)}>
          <Ionicons
            name={showPass ? "eye-off-outline" : "eye-outline"} // cambia el ícono según el estado
            size={22}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      {/* ====================================================
           BOTÓN DE INGRESAR (sin funcionalidad aún)
           ==================================================== */}
      <TouchableOpacity style={styles.button} disabled={false}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </TouchableOpacity>

      {/* ====================================================
           ENLACE A REGISTRO
           ==================================================== */}
      <TouchableOpacity
        style={styles.linkButton}
        onPress={() =>
          navigation.navigate(AUTH_ROUTES.REGISTER as never) // navega a la pantalla de registro
        }
      >
        <Text style={styles.linkText}>¿No tenés cuenta? Registrate</Text>
      </TouchableOpacity>

      {/* ====================================================
           ENLACE A "OLVIDASTE TU CONTRASEÑA" (decorativo)
           ==================================================== */}
      <TouchableOpacity style={styles.linkButton} disabled={true}>
        <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
      </TouchableOpacity>
    </View>
  );
}

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// Esta pantalla corresponde al inicio de sesión del usuario.
// Por ahora la funcionalidad es visual (no valida credenciales reales),
// pero ya tiene toda la estructura preparada.
//
// ESTRUCTURA:
//
// 1️⃣ Título “Iniciar Sesión”.
// 2️⃣ Campo de texto para ingresar usuario o email.
// 3️⃣ Campo de contraseña con ícono para mostrar/ocultar texto.
// 4️⃣ Botón “Ingresar” (decorativo).
// 5️⃣ Enlace a registro (“¿No tenés cuenta?”).
// 6️⃣ Enlace “¿Olvidaste tu contraseña?” (sin acción aún).
//
// FUNCIONAMIENTO:
//
// - `useState(showPass)` → maneja el estado de visibilidad de la contraseña.
// - `secureTextEntry={!showPass}` → oculta el texto cuando está en `false`.
// - `Ionicons` cambia entre íconos de ojo abierto/cerrado.
// - `useNavigation()` permite ir a la pantalla de registro.
//
// TECNOLOGÍAS Y CONCEPTOS CLAVE:
//
// - React Navigation (para moverse entre Login y Registro).
// - Hooks de React (`useState` y `useNavigation`).
// - Composición de vistas con estilos personalizados.
// - Accesibilidad: `placeholder` y `secureTextEntry`.
//
// FUTURAS MEJORAS:
//
// - Conectar con Supabase o API real de autenticación.
// - Validar campos y mostrar errores si faltan datos.
// - Guardar usuario autenticado en SecureStore y actualizar el AuthContext.
//
// OBJETIVO EN LA DEFENSA:
//
// Explicar que entendés la estructura de una pantalla de login,
// cómo se manejan los estados internos,
// cómo se implementa la navegación a registro,
// y cómo se controla la visibilidad de contraseñas con hooks e íconos.
//
