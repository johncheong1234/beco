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
        <IonSelect label="Stacked label" labelPlacement="stacked">
          <IonSelectOption value="apple">Apple</IonSelectOption>
          <IonSelectOption value="banana">Banana</IonSelectOption>
          <IonSelectOption value="orange">Orange</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonSelect label="Floating label" labelPlacement="floating">
          <IonSelectOption value="apple">Apple</IonSelectOption>
          <IonSelectOption value="banana">Banana</IonSelectOption>
          <IonSelectOption value="orange">Orange</IonSelectOption>
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