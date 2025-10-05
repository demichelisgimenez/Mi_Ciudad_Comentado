// ===============================================
// PANTALLA: FARMACIAS
// Muestra un mapa con pines y una lista de farmacias en Federal
// ===============================================

// Importación de componentes base de React Native:
// - View y Text: para estructurar y mostrar texto
// - FlatList: para renderizar listas de forma eficiente
// - Dimensions: para obtener el alto/ancho de la pantalla (usado para calcular el alto del mapa)
import { View, Text, FlatList, Dimensions } from "react-native";

// Importamos los componentes del mapa desde react-native-maps:
// - MapView: el contenedor del mapa
// - Marker: los pines o marcadores de ubicación
import MapView, { Marker } from "react-native-maps";

// Importamos los estilos definidos en utils/styles/farmacias.ts
// Esto mantiene el código más limpio y modular
import { farmaciasStyles as styles } from "../../../utils/styles/farmacias";

// Importamos un botón reutilizable creado en la carpeta de componentes
// Este botón se usa dentro de las tarjetas de la lista
import Button from "@components/Button";

// Obtenemos las dimensiones de la pantalla (alto y ancho)
// "height" se usará para definir la altura del mapa en proporción al tamaño del dispositivo
const { height } = Dimensions.get("window");

// ===============================================
// DATOS DE EJEMPLO (HARDCODEADOS)
// En esta primera entrega no usamos base de datos, así que las farmacias están cargadas a mano.
// Cada objeto tiene un id único, nombre, dirección y coordenadas (latitud y longitud)
// ===============================================
const DATA = [
  {
    id: "1",
    nombre: "Farmacia Federal",
    direccion: "Belgrano 450",
    latitude: -30.9555,
    longitude: -58.7830,
  },
  {
    id: "2",
    nombre: "Farmacia Del Pueblo",
    direccion: "9 de Julio 210",
    latitude: -30.9560,
    longitude: -58.7850,
  },
  {
    id: "3",
    nombre: "Farmacia Central",
    direccion: "Antelo 320",
    latitude: -30.9540,
    longitude: -58.7810,
  },
];

// ===============================================
// COMPONENTE PRINCIPAL: FARMACIAS
// ===============================================
export default function Farmacias() {
  return (
    // Vista contenedora principal de toda la pantalla.
    // styles.container controla el padding, color de fondo, etc.
    <View style={styles.container}>

      {/* TÍTULO DE LA PANTALLA */}
      <Text style={styles.titulo}>Farmacias en Federal</Text>

      {/* ====================================================
           SECCIÓN DEL MAPA (react-native-maps)
           ==================================================== */}
      <MapView
        // Ocupa el 100% del ancho de la pantalla y un 30% del alto del dispositivo
        style={{ width: "100%", height: height * 0.3, borderRadius: 8 }}

        // Región inicial del mapa al cargar la pantalla
        // latitude y longitude definen el centro
        // latitudeDelta y longitudeDelta determinan el nivel de zoom
        initialRegion={{
          latitude: -30.9546,      // centro aproximado de Federal
          longitude: -58.7833,
          latitudeDelta: 0.01,     // valores chicos = más zoom
          longitudeDelta: 0.01,
        }}
      >
        {/* Recorremos el array DATA para crear un marcador por cada farmacia */}
        {DATA.map((farmacia) => (
          <Marker
            key={farmacia.id} // clave única requerida por React
            coordinate={{
              latitude: farmacia.latitude,
              longitude: farmacia.longitude,
            }}
            title={farmacia.nombre}         // texto principal del marcador
            description={farmacia.direccion} // texto secundario (dirección)
          />
        ))}
      </MapView>

      {/* ====================================================
           SECCIÓN DE LISTA DE FARMACIAS (FlatList)
           ==================================================== */}
      <FlatList
        // Fuente de datos: el array de farmacias definido arriba
        data={DATA}

        // keyExtractor le dice a React cómo identificar cada elemento
        keyExtractor={(item) => item.id}

        // renderItem define cómo se dibuja cada elemento (cada farmacia)
        renderItem={({ item }) => (
          // Tarjeta que contiene los datos de cada farmacia
          <View style={styles.card}>
            {/* Nombre grande de la farmacia */}
            <Text style={styles.nombre}>{item.nombre}</Text>

            {/* Dirección debajo del nombre */}
            <Text style={styles.direccion}>{item.direccion}</Text>

            {/* Botón para futuras funcionalidades (por ahora sin acción real) */}
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
// Esta pantalla muestra un mapa con las farmacias de Federal,
// y debajo una lista con sus nombres y direcciones.
//
// Tecnologías usadas:
// - react-native-maps: para el mapa y los marcadores
// - FlatList: para listar los elementos de manera optimizada
// - Dimensions: para calcular el alto del mapa dinámicamente
// - Un componente de botón reutilizable (Button)
//
// Los datos están cargados localmente en el array DATA.
// En futuras versiones se podrían obtener desde una base de datos o una API.
//
// Los estilos se manejan desde un archivo externo (farmaciasStyles)
// para mantener el código ordenado y reutilizable.
//
