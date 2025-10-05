// ===============================================
// ARCHIVO: shared/models/user.ts
// -----------------------------------------------
// Define el modelo de datos "User" (Usuario).
// Representa la información básica del usuario autenticado en la app.
// Este modelo se utiliza en el sistema de autenticación (AuthContext)
// y en cualquier parte donde sea necesario acceder a los datos del usuario.
// ===============================================

// ===============================================
// INTERFAZ: IUser
// -----------------------------------------------
// Define la estructura (forma) que deben tener todos los objetos usuario.
// Sirve como contrato o plantilla para asegurar consistencia en el código.
// ===============================================
export interface IUser {
  id: string;         // Identificador único del usuario (UUID o similar)
  nombre: string;     // Nombre del usuario
  apellido: string;   // Apellido del usuario
  email: string;      // Correo electrónico del usuario
}

// ===============================================
// CLASE: User
// -----------------------------------------------
// Implementa la interfaz IUser y permite crear instancias concretas
// de usuarios con sus datos. También asegura que todos los usuarios
// tengan las mismas propiedades tipadas.
// ===============================================
export class User implements IUser {
  id: string;
  nombre: string;
  apellido: string;
  email: string;

  // Constructor que inicializa un nuevo usuario con sus datos
  constructor(id: string, nombre: string, apellido: string, email: string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
  }
}

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo define el modelo **User (Usuario)** que representa
//    la identidad del usuario dentro de la aplicación Mi Ciudad.
//
// 🔹 Diferencia entre interfaz y clase:
//
// | Elemento | Qué hace |
// |-----------|-----------|
// | **IUser (interfaz)** | Solo define la estructura de datos esperada (id, nombre, email). |
// | **User (clase)** | Implementa esa estructura y permite crear objetos reales con valores concretos. |
//
// 🔹 Propiedades:
//
// - `id`: identificador único del usuario (por ejemplo, generado por la base de datos).
// - `nombre`: nombre del usuario.
// - `apellido`: apellido del usuario.
// - `email`: dirección de correo electrónico.
//
// 🔹 ¿Dónde se usa este modelo?
//
// - En el contexto de autenticación (`AuthContext` y `AuthProvider`):
//   para guardar los datos del usuario cuando inicia sesión.
// - En componentes que muestran información del usuario (por ejemplo, en Ajustes o Perfil).
// - En el almacenamiento seguro (`secure-store`) para guardar la sesión.
//
// 🔹 Ejemplo de creación de un usuario:
//
// ```tsx
// import { User } from "@shared/models";
//
// const usuario = new User("1", "Agustín", "Demichelis", "agus@mail.com");
// console.log(usuario.nombre); // "Agustín"
// ```
//
// 🔹 Ventajas de este enfoque:
//
// - **Organización:** separa claramente los modelos de los componentes.
// - **Tipado fuerte:** TypeScript garantiza que todos los usuarios tengan los mismos campos.
// - **Reutilización:** el mismo modelo se usa en múltiples partes del sistema (auth, UI, backend).
// - **Escalabilidad:** si se agregan más campos (como foto o rol), solo se modifica aquí.
//
// 🔹 En resumen:
//
// Este archivo define cómo luce y cómo se crea un usuario en la app.
// Es un modelo simple, pero central para el sistema de autenticación
// y para cualquier funcionalidad que dependa de los datos del usuario.
//
// OBJETIVO EN LA DEFENSA:
//
// Explicar que esta clase representa la estructura lógica del usuario,
// que las interfaces aseguran coherencia de tipos,
// y que este modelo es parte del núcleo de datos compartidos (`shared/models`),
// usado por todo el sistema de autenticación y almacenamiento seguro.
//
