// ===============================================
// ARCHIVO: shared/models/place.ts
// -----------------------------------------------
// Define el modelo de datos "Place" (Lugar).
// Representa un lugar dentro de la app: por ejemplo, una farmacia,
// una escuela o cualquier punto de interés mostrado en el mapa.
//
// Este archivo contiene:
// 1️⃣ Una interfaz (IPlace) → define la estructura del objeto.
// 2️⃣ Una clase (Place) → implementa la interfaz y crea instancias reales.
// ===============================================

// ===============================================
// INTERFAZ: IPlace
// -----------------------------------------------
// Define el "molde" o estructura que deben cumplir los objetos tipo Place.
// Sirve como contrato para asegurar que todos los lugares tengan las mismas propiedades.
// ===============================================
export interface IPlace {
  id: number;           // Identificador único del lugar
  title: string;        // Nombre o título (ej: "Farmacia Federal")
  imageUrl: string;     // URL de una imagen representativa del lugar
  description: string;  // Descripción breve (ej: "Abierto las 24 hs")
  likes: number;        // Cantidad de 'me gusta' o calificaciones positivas
  comments: string[];   // Lista de comentarios (strings) hechos por los usuarios
  distance: number;     // Distancia (en metros o kilómetros) desde el usuario actual
}

// ===============================================
// CLASE: Place
// -----------------------------------------------
// Implementa la interfaz IPlace.
// Sirve para crear objetos "Place" de forma ordenada y tipada.
// ===============================================
export class Place implements IPlace {
  id: number;
  comments: string[];
  description: string;
  distance: number;
  imageUrl: string;
  likes: number;
  title: string;

  // ---------------------------------------------
  // CONSTRUCTOR
  // ---------------------------------------------
  // Se ejecuta al crear un nuevo lugar.
  // Recibe todos los datos necesarios y los asigna a las propiedades de la clase.
  // Ejemplo de uso:
  // const farmacia = new Place(1, "Farmacia Federal", "foto.png", "Abierto 24hs", 12, ["Buen servicio"], 0.5);
  // ---------------------------------------------
  constructor(
    id: number,
    title: string,
    imageUrl: string,
    description: string,
    likes: number,
    comments: string[],
    distance: number
  ) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.likes = likes;
    this.comments = comments;
    this.distance = distance;
  }
}

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// 🔹 Este archivo define el modelo **Place (Lugar)** que representa
//    cada punto de interés en la app “Mi Ciudad” (farmacias, escuelas, radios, etc.)
//
// 🔹 Diferencia entre interfaz y clase:
//
// | Elemento | Qué hace |
// |-----------|-----------|
// | **IPlace (interfaz)** | Define la forma que deben tener todos los lugares. Solo estructura, sin lógica. |
// | **Place (clase)** | Implementa esa forma y permite crear instancias reales con datos concretos. |
//
// 🔹 Propiedades:
//
// - `id`: número único que identifica al lugar.
// - `title`: nombre del lugar (ejemplo: "Escuela N° 2").
// - `imageUrl`: dirección de la imagen (foto o ícono del lugar).
// - `description`: texto descriptivo (qué es o qué servicios ofrece).
// - `likes`: cantidad de “me gusta” o calificaciones.
// - `comments`: lista de comentarios de usuarios.
// - `distance`: distancia desde el usuario (para ordenar o mostrar cercanía).
//
// 🔹 ¿Dónde se usa este modelo?
//
// - En pantallas como **Farmacias** o **Escuelas**, 
//   donde se muestran listas o mapas de lugares.
// - En componentes que muestran información o tarjetas (cards) de lugares.
// - En casos donde se necesite manejar los datos de lugares de manera tipada.
//
// 🔹 Ejemplo de creación de un objeto Place:
//
// ```tsx
// import { Place } from "@shared/models";
//
// const escuela = new Place(
//   1,
//   "Escuela Secundaria N°2",
//   "https://img.com/escuela.jpg",
//   "Turno mañana y tarde",
//   42,
//   ["Muy buena atención", "Excelente personal"],
//   1.2
// );
// ```
//
// 🔹 Ventajas de este enfoque:
// - Organización y tipado: garantiza que todos los lugares tengan los mismos datos.
// - Facilita el mantenimiento y evita errores al cargar información.
// - Compatible con TypeScript (mejor autocompletado y detección de errores).
//
// 🔹 En resumen:
// Este archivo establece el **modelo de datos base** para representar
// cualquier lugar de la ciudad dentro de la app.
// Es parte del módulo de modelos compartidos (`shared/models`),
// lo que permite usarlo en distintas pantallas (Farmacias, Escuelas, etc.)
// sin duplicar código.
//
// OBJETIVO EN LA DEFENSA:
//
// Explicar que esta clase representa los datos de un “Lugar” en la aplicación,
// que las interfaces definen estructuras seguras para el código,
// y que este patrón (interfaz + clase) es típico en proyectos grandes
// para mantener orden y coherencia entre los módulos.
//
