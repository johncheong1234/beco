import { GoogleMap } from '@capacitor/google-maps';
import { useRef } from 'react';
import Example from './Example';
import { setupIonicReact } from '@ionic/react';
import '@ionic/react/css/core.css';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setRecordInfo } from './exampleSlice';

setupIonicReact();

const App: React.FC = () => {
  const dispatch = useDispatch();
  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;
  const inspectionType: string = useSelector((state:any) => state.example.inspectionType);
  const estate: string = useSelector((state:any) => state.example.estate);
  const block: string = useSelector((state:any) => state.example.block);
  const inspector: string = useSelector((state:any) => state.example.inspector);
  const startDate: string = useSelector((state:any) => state.example.startDate);
  const endDate: string = useSelector((state:any) => state.example.endDate);
  const recordInfo: string = useSelector((state:any) => state.example.recordInfo);

  async function createMap() {
    console.log('info needed is ',
    inspectionType,
    estate,
    inspector,
    block, 
    startDate,
    endDate
    )

    axios.post('http://localhost:3001/records', {
      "inspector": inspector,
      "block": block,
      "estate": estate,
      "inspectionType": inspectionType,
      "startDate":startDate,
      "endDate": endDate
  })
    .then(async function (response: any) {
      console.log(response);
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

        const markerIds = []
        const records = response.data;
        
        for(let i=0; i<records.length; i++){
          
          if(records[i].inspectionType !== 'FIR'){
            console.log(records[i])
            markerIds.push({
              coordinate:{
                lat: parseFloat(records[i].location.coordinates.lat),
                lng: parseFloat(records[i].location.coordinates.lng)
              },
              title: `${records[i].inspector}_${records[i].estate}_${records[i].inspectionType}`
            })
          }else{
            const path = [];
            for(let j=0; j<records[i].location.coordinates.length; j++){
              console.log('records i is ', records[i])
              markerIds.push({
                coordinate:{
                  lat: parseFloat(records[i].location.coordinates[j].lat),
                  lng: parseFloat(records[i].location.coordinates[j].lng),
                },
                title: `${records[i].inspector}_${records[i].estate}_${records[i].inspectionType}`

              })
              path.push({
                lat: parseFloat(records[i].location.coordinates[j].lat),
                lng: parseFloat(records[i].location.coordinates[j].lng)
              })
            }

            const lineSymbol = {
              path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
            };

            await newMap.addPolylines([
              {
                strokeColor: 'Black',
                path: path,
                icons: [
                  {
                    icon: lineSymbol,
                    offset: "100%",
                  },
                ]
              }
            ])
          }
          
        }

    for(let i=0; i<markerIds.length; i++){
      await newMap.addMarker(markerIds[i]);
    }

    await newMap.setOnMarkerClickListener((event) => {
      console.log(event)
      dispatch(setRecordInfo({
        recordInfo: event.title
      }))
    });
    })
    .catch(function (error: any) {
      console.log(error);
    });

    

  }

  return (
    <div className="component-wrapper"
    >      
    <button onClick={createMap}>Create Map</button>
      <Example />
      <capacitor-google-map ref={mapRef} style={{
        display: 'inline-block',
        width: '100%',
        height: '200px'
      }}>

      </capacitor-google-map>
      <div style= {{
        marginTop: '20px',
        marginBottom: '20px',
        marginLeft: '20px'
      }}>
        {recordInfo}
      </div>
    </div>
  )
}

export default App;