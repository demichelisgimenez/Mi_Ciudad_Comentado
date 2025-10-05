// ===============================================
// PANTALLA: QR
// Permite escanear códigos QR usando la cámara del dispositivo.
// Si el QR contiene un link, se puede abrir directamente.
// ===============================================

// Importamos React y el hook useState para manejar estados locales
import React, { useState } from "react";

// Importamos componentes base de React Native:
// - Text y View: estructura y texto
// - Button: botón simple nativo
import { Text, View, Button } from "react-native";

// Importamos componentes de la librería expo-camera:
// - CameraView: muestra la vista de la cámara en pantalla
// - useCameraPermissions: maneja los permisos de acceso a la cámara
import { CameraView, useCameraPermissions } from "expo-camera";

// Importamos los estilos específicos para esta pantalla
import { qrStyles as styles } from "@utils/styles/qr";

// Importamos Linking para poder abrir URLs externas (por ejemplo, links detectados en el QR)
import { Linking } from "react-native";

// ===============================================
// COMPONENTE PRINCIPAL: QR
// ===============================================
export default function QR() {
  // useCameraPermissions() devuelve dos cosas:
  // 1. "permission": información sobre el estado actual del permiso (concedido o no)
  // 2. "requestPermission": función que muestra el cuadro de solicitud de permiso
  const [permission, requestPermission] = useCameraPermissions();

  // Estado que indica si ya se escaneó un código
  const [scanned, setScanned] = useState(false);

  // Estado que guarda el link detectado en el código QR (si existe)
  const [link, setLink] = useState<string | null>(null);

  // ===============================================
  // CONTROL DE PERMISOS DE CÁMARA
  // ===============================================

  // Si todavía no se sabe el estado del permiso, no mostramos nada (vista vacía)
  if (!permission) return <View />;

  // Si el permiso NO está concedido, mostramos un mensaje y un botón para solicitarlo
  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text>Necesitamos permiso para usar la cámara</Text>
        {/* Al presionar este botón se solicita el permiso al sistema */}
        <Button onPress={requestPermission} title="Dar permiso" />
      </View>
    );
  }

  // ===============================================
  // FUNCIÓN: CUANDO SE DETECTA UN CÓDIGO QR
  // ===============================================
  const handleBarcodeScanned = (data: string) => {
    // Se marca que ya se escaneó algo
    setScanned(true);

    // Se guarda el texto (o link) detectado dentro del QR
    setLink(data);
  };

  // ===============================================
  // INTERFAZ PRINCIPAL (CUANDO HAY PERMISO DE CÁMARA)
  // ===============================================
  return (
    <View style={styles.container}>

      {/* ====================================================
           VISTA DE LA CÁMARA (CameraView)
           ==================================================== */}
      <CameraView
        style={{ flex: 1 }} // ocupa todo el espacio disponible
        facing="back" // usa la cámara trasera del dispositivo
        barcodeScannerSettings={{
          barcodeTypes: ["qr"], // solo busca códigos QR (no otros tipos de código de barras)
        }}
        // Evento que se dispara cuando la cámara detecta un código QR
        // Solo ejecuta handleBarcodeScanned si "scanned" es false (evita múltiples lecturas)
        onBarcodeScanned={({ data }) => !scanned && handleBarcodeScanned(data)}
      />

      {/* ====================================================
           RESULTADO DEL ESCANEO (se muestra solo si ya se escaneó algo)
           ==================================================== */}
      {scanned && (
        <View style={styles.actions}>
          <Text style={styles.text}>Link detectado:</Text>

          {/* Texto con el link leído del QR */}
          <Text style={styles.link}>{link}</Text>

          {/* Botón para abrir el link usando el navegador del dispositivo */}
          <Button
            title="Abrir link"
            onPress={() => link && Linking.openURL(link)} // solo si hay link
          />

          {/* Botón para volver a escanear (reinicia el estado) */}
          <Button
            title="Escanear de nuevo"
            onPress={() => setScanned(false)}
          />
        </View>
      )}
    </View>
  );
}

// ===============================================
// EXPLICACIÓN GENERAL (para defensa oral)
// ===============================================
//
// Esta pantalla permite escanear códigos QR reales usando la cámara del celular.
// Está hecha con la librería "expo-camera", que facilita acceder a la cámara
// y configurar qué tipo de código leer.
//
// FUNCIONAMIENTO PASO A PASO:
// 1️⃣ Al entrar a la pantalla, se verifica si el usuario dio permiso para usar la cámara.
// 2️⃣ Si no dio permiso, se muestra un mensaje con el botón “Dar permiso”.
// 3️⃣ Cuando el permiso está activo, se abre la vista de la cámara.
// 4️⃣ Al detectar un código QR, se guarda el texto o link en el estado local “link”.
// 5️⃣ Se muestran dos botones: “Abrir link” (usa Linking.openURL)
//    y “Escanear de nuevo” (reinicia el proceso).
//
// CONCEPTOS CLAVE:
// - useCameraPermissions(): maneja permisos del sistema para la cámara.
// - CameraView: muestra la cámara y escanea QR.
// - onBarcodeScanned: evento que se ejecuta al detectar un código.
// - Linking.openURL(): abre el link en el navegador del dispositivo.
// - useState(): guarda estados simples (si escaneó y qué link se obtuvo).
//
// FUTURAS MEJORAS:
// - Mostrar alerta si el código no contiene un link válido.
// - Agregar animación o sonido al escanear correctamente.
// - Guardar el historial de códigos escaneados.
//
// OBJETIVO EN LA DEFENSA:
// Explicar que entendés cómo interactúa la cámara con el sistema,
// cómo se manejan los permisos y eventos en React Native,
// y cómo se actualiza la interfaz según los estados (sin permiso / escaneando / escaneado).
//
