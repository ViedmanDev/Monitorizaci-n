import { useState } from "react"; // Asegúrate de importar useState
import { APIProvider, Map } from "@vis.gl/react-google-maps";
import AdvancedMarkerInfo from './AdvancedMarkerInfo';
import data from '../data.json';

const GoogleMap = () => {
    const [activeMarkerId, setActiveMarkerId] = useState(null); // Estado para el marcador activo
    const mapId = "b9a46f605cb1e045";

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
            <Map
                mapId={mapId}
                style={{ width: '100vw', height: '100vh' }}
                defaultZoom={11}
                defaultCenter={{ lat: 3.4508239012324067, lng: -76.52944552328202 }}
                options={{
                    gestureHandling: "cooperative", // Permite mover el mapa con un dedo, el zoom solo con botones
                    zoomControl: true, // Activa los botones de zoom
                    fullscreenControl: false, // Desactiva el botón de pantalla completa si no es necesario
                    streetViewControl: false, // Desactiva el control de Street View si no es necesario
                    mapTypeControl: false // Desactiva el cambio de tipo de mapa si no es necesario
                }}
            >
                {data.map((loc) => (
                    <AdvancedMarkerInfo
                        key={loc.id}
                        position={loc.location}
                        videoId={loc.videoId}
                        nombreObra={loc.nombreObra}
                        contrato={loc.contrato}
                        valorInicial={loc.valorInicial}
                        tiempoRetraso={loc.tiempoRetraso}
                        markerId={loc.id} // Pasamos el ID del marcador
                        activeMarkerId={activeMarkerId}
                        setActiveMarkerId={setActiveMarkerId} // Pasamos la función para actualizar el marcador activo
                    />
                ))}
            </Map>
        </APIProvider>
    );
}

export default GoogleMap;
