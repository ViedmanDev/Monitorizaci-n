import { useAdvancedMarkerRef, Pin, InfoWindow, AdvancedMarker } from "@vis.gl/react-google-maps";
import YoutubeVideo from "../components/Video";

const AdvancedMarkerInfo = ({ position, nombreObra, contrato, valorInicial, tiempoRetraso, videoId, activeMarkerId, setActiveMarkerId, markerId }) => {
    const [markerRef, marker] = useAdvancedMarkerRef();
    const openWindow = activeMarkerId === markerId;

    return (
        <AdvancedMarker
            position={position}
            ref={markerRef}
            onClick={() => setActiveMarkerId(markerId)}
        >
            <Pin background='#15ED2E' glyphColor='#333' borderColor='#333' />
            {openWindow && (
                <InfoWindow anchor={marker} onCloseClick={() => setActiveMarkerId(null)}>
                    <div>
                        <YoutubeVideo videoId={videoId} />
                        <h1>{nombreObra}</h1>
                        <p>{contrato}</p>
                        <p>{valorInicial}</p>
                        <p>{tiempoRetraso}</p>
                    </div>
                </InfoWindow>
            )}
        </AdvancedMarker>
    );
};

export default AdvancedMarkerInfo;
