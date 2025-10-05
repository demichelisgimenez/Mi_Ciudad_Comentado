// ===============================================
// ARCHIVO: app/auth/register-hooks.tsx
// Este componente implementa un formulario de registro
// usando la librería react-hook-form para validar y manejar campos.
// Incluye campos controlados, validación básica y botones reutilizables.
// ===============================================

// Importamos componentes base de React Native
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

// Importamos hooks de React
import { useCallback, useState } from "react";

// Importamos componentes personalizados del proyecto
import Link from "../../components/Link";
import Button from "../../components/Button";

// Utilidades (tamaños y colores globales)
import { sizes } from "../../utils";
import { materialColors } from "../../utils/colors";

// Importamos funciones del paquete react-hook-form
// - useForm: crea y gestiona el estado del formulario
// - Controller: conecta los campos (TextInput) con el sistema de validación
import { useForm, Controller } from "react-hook-form";

// ===============================================
// INTERFACES DE TIPADO (TypeScript)
// ===============================================

// Propiedades que recibe este componente desde su padre
// (por ejemplo, una función para volver al login)
interface IProps {
  onLoginClicked: () => void;
}

// Estructura esperada de los valores del formulario
interface IFormValues {
  nombre: string;
  apellido: string;
  email: string;
  pass: string;
}

// Expresión regular para validar formato de email
const regex = /.*@.*/gm;

// ===============================================
// COMPONENTE PRINCIPAL: REGISTERHOOKS
// ===============================================
export default function RegisterHooks(props: IProps) {
  const { onLoginClicked } = props; // función que viene por props
  const [showPass, setShowPass] = useState<boolean>(false); // estado local para mostrar/ocultar contraseña

  // Hook principal de react-hook-form
  // define los valores iniciales y provee controladores para manejar inputs
  const {
    control,
    handleSubmit, // función que procesa el formulario cuando se envía
    formState: { errors, isValid }, // errores de validación e indicador de validez
  } = useForm({
    defaultValues: {
      nombre: "",
      apellido: "",
      email: "",
      pass: "",
    },
  });

  // Función que se ejecuta al enviar el formulario
  const handleRegister = (values: IFormValues) => {
    console.log(values); // por ahora solo muestra los datos en consola
  };

  // ===============================================
  // INTERFAZ DEL FORMULARIO
  // ===============================================
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registrarse!</Text>

      {/* ====================================================
           CAMPO: NOMBRE
           ==================================================== */}
      <Controller
        control={control}
        rules={{
          required: true, // campo obligatorio
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors?.nombre && styles.inputError]}
            placeholder="Nombre"
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
          />
        )}
        name={"nombre"}
      />
      {errors.nombre && (
        <Text style={styles.error}>{errors.nombre?.message}</Text>
      )}

      {/* ====================================================
           CAMPO: APELLIDO
           ==================================================== */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={[styles.input, errors?.apellido && styles.inputError]}
            placeholder="Apellido"
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
          />
        )}
        name={"apellido"}
      />
      {errors.apellido && (
        <Text style={styles.error}>{errors.apellido?.message}</Text>
      )}

      {/* ====================================================
           CAMPO: EMAIL
           ==================================================== */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            keyboardType={"email-address"}
            style={[styles.input, errors?.email && styles.inputError]}
            placeholder="email"
            onBlur={onBlur}
            value={value}
            onChangeText={onChange}
          />
        )}
        name={"email"}
      />
      {errors.email && <Text style={styles.error}>{errors.email?.message}</Text>}

      {/* ====================================================
           CAMPO: CONTRASEÑA CON BOTÓN MOSTRAR/OCULTAR
           ==================================================== */}
      <View style={styles.passContainer}>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              secureTextEntry={!showPass} // oculta el texto si showPass es false
              style={[styles.input, errors?.pass && styles.inputError]}
              placeholder="Contraseña"
              onBlur={onBlur}
              value={value}
              onChangeText={onChange}
            />
          )}
          name={"pass"}
        />

        {/* Botón que alterna la visibilidad de la contraseña */}
        <TouchableOpacity onPress={() => setShowPass(!showPass)}>
          <Text>{showPass ? "Ocultar" : "Mostrar"}</Text>
        </TouchableOpacity>
      </View>
      {errors.pass && <Text style={styles.error}>{errors.pass?.message}</Text>}

      {/* Separador visual */}
      <View style={styles.divider} />

      {/* ====================================================
           BOTÓN DE REGISTRO
           ==================================================== */}
      <Button
        onPress={handleSubmit(handleRegister)} // ejecuta la validación y luego handleRegister
        disabled={!isValid} // desactiva el botón si el formulario no es válido
        title="Registrarse!"
      />

      {/* Separador visual */}
      <View style={styles.divider} />

      {/* ====================================================
           ENLACE PARA VOLVER AL LOGIN
           ==================================================== */}
      <Link link="Volver al login!" onPress={onLoginClicked} />
    </View>
  );
}

// ===============================================
// ESTILOS
// ===============================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: materialColors.schemes.light.surface,
  },
  titulo: {
    fontSize: sizes.titulo,
    fontWeight: "bold",
    color: "black",
  },
  passContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  input: {
    height: 50,
    marginTop: 16,
    borderBottomColor: materialColors.schemes.light.outline,
    borderBottomWidth: 1,
    minWidth: 300,
  },
  inputError: {
    borderBottomColor: materialColors.schemes.light.error,
  },
  divider: {
    height: 16,
  },
  error: {
    color: materialColors.schemes.light.error,
    fontSize: 10,
  },
});

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo implementa un formulario controlado con react-hook-form.
//    A diferencia del registro simple (register.tsx),
//    este controla los campos y la validación de manera más profesional.
//
// FUNCIONAMIENTO:
//
// 1️⃣ useForm() crea el formulario con valores por defecto y controladores.
// 2️⃣ Controller conecta cada TextInput con el sistema de validación.
// 3️⃣ handleSubmit() valida y luego ejecuta handleRegister().
// 4️⃣ handleRegister() recibe los valores finales del formulario.
// 5️⃣ showPass alterna la visibilidad de la contraseña.
//
// CONCEPTOS CLAVE:
//
// - React Hook Form: gestiona estados y validación de formularios.
// - Controller: enlaza los componentes nativos con react-hook-form.
// - useState(showPass): muestra/oculta contraseña.
// - Validación: `rules={{ required: true }}` obliga a completar campos.
// - isValid: desactiva el botón hasta que el formulario sea válido.
//
// FUTURAS MEJORAS:
//
// - Agregar validaciones más complejas (regex de email, longitud de contraseña).
// - Mostrar mensajes de error personalizados.
// - Conectar con una base real (Supabase o backend).
// - Estilizar el botón “Mostrar/Ocultar” con íconos.
//
// OBJETIVO EN LA DEFENSA:
//
// Explicar cómo se maneja un formulario con react-hook-form,
// la diferencia entre formularios controlados y no controlados,
// y cómo se gestionan los estados y errores dentro de React Native.
//
