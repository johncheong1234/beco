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
  },
  {
    coordinate: {
      lat: 1.7,
      lng: 105,
    },
    title: 'test'
  }
]

const App: React.FC = () => {
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

    let path = [];

    for(let i=0; i<markerIds.length; i++){
      await newMap.addMarker(markerIds[i]);
      path.push({
        lat: markerIds[i].coordinate.lat,
        lng: markerIds[i].coordinate.lng
      })
    }
  
    await newMap.addPolylines([
      {
        strokeColor: 'Black',
        path: path
      }
    ])

    await newMap.setOnMarkerClickListener((event) => {
      console.log(event)
    });

  }

  return (
    <div className="component-wrapper"
    >      
    <button onClick={createMap}>Create Map</button>
      <Example />
      <capacitor-google-map ref={mapRef} style={{
        display: 'inline-block',
        width: 1000,
        height: 1000
      }}>

      </capacitor-google-map>

    </div>
  )
}

export default App;