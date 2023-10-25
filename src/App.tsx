import { GoogleMap } from '@capacitor/google-maps';
import { useRef } from 'react';
import Example from './Example';
import { setupIonicReact } from '@ionic/react';
import '@ionic/react/css/core.css';

setupIonicReact();

const markerIds = [
  {
    coordinate: {
      lat: 2,
      lng: 103.8198
    }
  }, 
  {
    coordinate: {
      lat: 1.35,
      lng: 103.8198,
    },
    title: 'test'
  }
]

const MyMap: React.FC = () => {
  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;

  async function createMap() {
    if (!mapRef.current) return;

    newMap = await GoogleMap.create({
      id: 'my-cool-map',
      element: mapRef.current,
      apiKey: 'AIzaSyDsJwyFN68zDj4ksES-6sx25nwmdw08VBM',
      config: {
        center: {
          lat: 1.3521,
          lng: 103.8198
        },
        zoom: 8
      }
    })

    for(let i=0; i<markerIds.length; i++){
      await newMap.addMarker(markerIds[i]);
    }
  
    await newMap.addPolylines([
      {
        strokeColor: 'Black',
        path: [
          { lat: 1.35, lng: 103.8 },
          { lat: 2, lng: 103.9 },
        ]
      }
    ])

    await newMap.setOnMarkerClickListener((event) => {
      console.log(event)
    });

  }

  return (
    <div className="component-wrapper">
      <Example />
      <capacitor-google-map ref={mapRef} style={{
        display: 'inline-block',
        width: 275,
        height: 400
      }}></capacitor-google-map>

      <button onClick={createMap}>Create Map</button>
    </div>
  )
}

export default MyMap;