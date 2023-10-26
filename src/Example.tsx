import { IonItem, 
    IonList, IonSelect, IonSelectOption, 
    IonDatetime, 
    IonDatetimeButton, 
    IonModal 
} from '@ionic/react';
import {
  setInspectionTypeReducer,
  setEstateReducer,
  setBlockReducer,
  setInspectorReducer
} from './exampleSlice'; 
import { useDispatch, useSelector } from 'react-redux';

function Example() {

  const dispatch = useDispatch();
  const inspectionType: string = useSelector((state:any) => state.example.inspectionType);
  const estate: string = useSelector((state:any) => state.example.estate);
  const block: string = useSelector((state:any) => state.example.block);
  const inspector: string = useSelector((state:any) => state.example.inspector);

  function setInspectionType(event: any){
    console.log(event.detail.value)
    dispatch(setInspectionTypeReducer({
        inspectionType: event.detail.value
    }))
  }

  function setEstate(event: any){
    dispatch(setEstateReducer({
      estate: event.detail.value
    }))
  }

  function setBlock(event: any){
    dispatch(setBlockReducer({
      block: event.detail.value
    }))
  }

  function setInspector(event: any){
    dispatch(setInspectorReducer({
      inspector: event.detail.value
    }))
  }

  return (
    <IonList>
      <IonItem>
        <IonSelect label="Inspection  Type" value={inspectionType} onIonChange={setInspectionType}>
          <IonSelectOption value="FIR">FIR</IonSelectOption>
          <IonSelectOption value="RI">RI</IonSelectOption>
          <IonSelectOption value="FQI">FQI</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonSelect label="Estate" labelPlacement="fixed"  value={estate} onIonChange={setEstate}>
          <IonSelectOption value="woodlands">Woodlands</IonSelectOption>
          <IonSelectOption value="sembawang">Sembawang</IonSelectOption>
          <IonSelectOption value="Yishun">Yishun</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonSelect label="Block" labelPlacement="stacked" value={block} onIonChange={setBlock}>
          <IonSelectOption value="1">1</IonSelectOption>
          <IonSelectOption value="2">2</IonSelectOption>
          <IonSelectOption value="3">3</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonSelect label="Inspector" labelPlacement="floating" value={inspector} onIonChange={setInspector}>
          <IonSelectOption value="tom">Tom</IonSelectOption>
          <IonSelectOption value="harry">Harry</IonSelectOption>
          <IonSelectOption value="bob">Bob</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        Start Date
        <IonDatetimeButton datetime="datetime"></IonDatetimeButton>

        <IonModal keepContentsMounted={true}>
            <IonDatetime id="datetime"></IonDatetime>
        </IonModal>
      </IonItem>
      <IonItem>
        End Date
        <IonDatetimeButton datetime="datetime"></IonDatetimeButton>

        <IonModal keepContentsMounted={true}>
            <IonDatetime id="datetime"></IonDatetime>
        </IonModal>
      </IonItem>
    </IonList>
  );
}
export default Example;