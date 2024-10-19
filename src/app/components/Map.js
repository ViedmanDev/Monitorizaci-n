import { APIProvider, Map } from "@vis.gl/react-google-maps";
import AdvancedMarkerInfo from './AdvancedMarkerInfo';
import data from '../data.json'

const GoogleMap = () => {

const mapId = "b9a46f605cb1e045"

    return (
        <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
            <Map
                mapId={mapId}
                style={{width: '100vw', height: '100vh'}}
                defaultZoom={11}
                defaultCenter={{lat: 3.4508239012324067, lng: -76.52944552328202}}
                disableDefaultUI={true}
                zoomControl={true}
            >
                {data.map((loc) =>(
                    <AdvancedMarkerInfo
                    key={loc.id}
                    position={loc.location}
                    video={loc.videoUrl}
                    nombreObra={loc.nombreObra}
                    contrato={loc.contrato}
                    valorInicial={loc.valorInicial}
                    tiempoRetraso={loc.tiempoRetraso}
                    />
                ))}
            </Map>
        </APIProvider>
    )
}

export default GoogleMap;