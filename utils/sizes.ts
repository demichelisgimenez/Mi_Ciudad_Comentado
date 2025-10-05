// ===============================================
// ARCHIVO: utils/sizes.ts
// -----------------------------------------------
// Este archivo define medidas y tamaños globales
// reutilizables en toda la aplicación “Mi Ciudad”.
//
// Su función principal es mantener **consistencia visual**
// en el tamaño de textos, márgenes, paddings y bordes.
// ===============================================

// Objeto global que contiene valores numéricos
// que pueden ser usados en distintos estilos.
export const sizes = {
  titulo: 20, // Tamaño de fuente estándar para títulos
};

// ===============================================
// 🧭 EXPLICACIÓN PARA DEFENSA ORAL
// ===============================================
//
// 🔹 **Objetivo del archivo**
// Centralizar los tamaños usados en la app
// (fuentes, márgenes, bordes, etc.) para mantener coherencia.
//
// 🔹 **Ventajas**
// ✅ Si se quiere cambiar el tamaño de los títulos o márgenes,
//    basta con modificarlo aquí y se actualizará en toda la app.
// ✅ Facilita el mantenimiento y la escalabilidad.
//
// 🔹 **Ejemplo de uso**
// ```tsx
// import { sizes } from "@utils";
//
// const styles = StyleSheet.create({
//   title: {
//     fontSize: sizes.titulo, // usa el valor definido globalmente
//   },
// });
// ```
//
// 🔹 **Resumen para decir en el oral**
// “El archivo `sizes.ts` define constantes con medidas globales.
// En este caso, establece el tamaño de los títulos en 20 puntos.
// Sirve para mantener una apariencia uniforme y fácil de ajustar
// desde un solo lugar.”
