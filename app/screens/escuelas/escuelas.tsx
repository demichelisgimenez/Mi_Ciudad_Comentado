// ===============================================
// PANTALLA: ESCUELAS
// Muestra un mapa con pines de escuelas de Federal
// y una lista con sus nombres y direcciones.
// ===============================================

// Importación de componentes base de React Native
// - View y Text: para estructurar la pantalla y mostrar texto
// - FlatList: para mostrar una lista de elementos desplazable
// - Dimensions: para obtener el alto de pantalla (usado para calcular la altura del mapa)
import { View, Text, FlatList, Dimensions } from "react-native";

// Importamos el mapa y los marcadores desde react-native-maps
import MapView, { Marker } from "react-native-maps";

// Importamos los estilos específicos de esta pantalla
import { escuelaStyles as styles } from "../../../utils/styles/escuelas";

// Importamos un botón reutilizable que ya existe en @components/Button
import Button from "@components/Button";

// Obtenemos la altura de la pantalla actual
const { height } = Dimensions.get("window");

// ===============================================
// DATOS DE EJEMPLO (HARDCODEADOS)
// En esta entrega se cargan a mano. Cada escuela tiene:
// id, nombre, dirección y coordenadas (latitud/longitud).
// ===============================================
const DATA = [
  {
    id: "1",
    nombre: 'Escuela Nina N° 2 "Justo José de Urquiza"',
    direccion: "Presidente Peron 150",
    latitude: -30.9555,
    longitude: -58.7830,
  },
  {
    id: "2",
    nombre: 'E.E.T. N° 23 "Caudillos Federales"',
    direccion: "Rivadavia 275",
    latitude: -30.9560,
    longitude: -58.7850,
  },
  {
    id: "3",
    nombre: 'Escuela Secundaria N° 2 "José Manuel Estrada"',
    direccion: "Echagüe 320",
    latitude: -30.9540,
    longitude: -58.7810,
  },
];

// ===============================================
// COMPONENTE PRINCIPAL: ESCUELAS
// ===============================================
export default function Escuelas() {
  return (
    // Contenedor principal de la pantalla
    <View style={styles.container}>

      {/* TÍTULO DE LA PANTALLA */}
      <Text style={styles.titulo}>Escuelas de la Ciudad de Federal</Text>

      {/* ====================================================
           SECCIÓN DEL MAPA (con react-native-maps)
           ==================================================== */}
      <MapView
        // Estilo del mapa: ancho completo, 30% del alto de pantalla, bordes redondeados
        style={{ width: "100%", height: height * 0.3, borderRadius: 20, padding: 10 }}

        // Coordenadas iniciales del mapa
        initialRegion={{
          latitude: -30.9546,      // centro aproximado de Federal
          longitude: -58.7833,
          latitudeDelta: 0.01,     // controlan el nivel de zoom
          longitudeDelta: 0.01,
        }}
      >
        {/* Creamos un marcador (pin) por cada escuela del array DATA */}
        {DATA.map((escuela) => (
          <Marker
            key={escuela.id} // clave única
            coordinate={{
              latitude: escuela.latitude,
              longitude: escuela.longitude,
            }}
            title={escuela.nombre}         // texto que aparece arriba del pin
            description={escuela.direccion} // subtítulo (dirección)
          />
        ))}
      </MapView>

      {/* ====================================================
           SECCIÓN DE LISTA DE ESCUELAS (FlatList)
           ==================================================== */}
      <FlatList
        data={DATA} // fuente de datos
        keyExtractor={(item) => item.id} // clave única de cada ítem
        renderItem={({ item }) => (
          // Tarjeta con información de cada escuela
          <View style={styles.card}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.direccion}>{item.direccion}</Text>

            {/* Botón de acción (sin función por ahora) */}
            <Button title="Ver más" onPress={() => {}} />
          </View>
        )}
      />
    </View>
  );
}

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// Esta pantalla muestra un mapa con las escuelas de Federal
// y debajo una lista con los mismos datos (nombre, dirección, botón).
//
// TECNOLOGÍAS USADAS:
// - react-native-maps: muestra el mapa y los marcadores (Marker).
// - FlatList: lista optimizada para renderizar los ítems visibles.
// - Dimensions: permite calcular el alto del mapa de forma dinámica.
//
// ESTRUCTURA GENERAL:
// 1. Un título superior.
// 2. Un mapa con pines (uno por escuela).
// 3. Una lista (FlatList) con las mismas escuelas, sus direcciones y un botón.
//
// FUTURAS MEJORAS:
// - Cargar los datos desde una base (Supabase o API).
// - Hacer que el botón "Ver más" muestre información ampliada de la escuela.
// - Ajustar el zoom del mapa para incluir todos los pines.
//
// OBJETIVO EN LA DEFENSA:
// Mostrar que entendés cómo se combinan mapa + lista + datos,
// cómo se generan los marcadores dinámicamente,
// y cómo se mantienen los estilos organizados en un archivo externo.
//
