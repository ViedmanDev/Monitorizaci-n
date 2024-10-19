import { useState } from "react"
import { useAdvancedMarkerRef, Pin, InfoWindow, AdvancedMarker } from "@vis.gl/react-google-maps"
import YoutubeVideo  from "../components/Video"

const AdvancedMarkerInfo = ({ position, nombreObra, contrato, valorInicial, tiempoRetraso, videoUrl }) => {
        const [markerRef, marker] = useAdvancedMarkerRef();
        const [openWindow, setOpenWindow] = useState(false)
        console.log(position)
    return(
        <AdvancedMarker
            position={position}
            ref={markerRef}
            onClick={() => setOpenWindow(true)}
        >
        <Pin background='#15ED2E' glyphColor='#333' borderColor='#333' />
        {openWindow  &&
        <InfoWindow anchor={marker} onCloseClick={() => setOpenWindow(false)}>
            <div>
            <YoutubeVideo videoId={videoUrl}/>
            <h1>{nombreObra}</h1>
            <p>{contrato}</p>
            <p>{valorInicial}</p>
            <p>{tiempoRetraso}</p>
            </div>
        </InfoWindow>}
        </AdvancedMarker>
    )
}

export default AdvancedMarkerInfo;