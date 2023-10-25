import { IonItem, 
    IonList, IonSelect, IonSelectOption, 
    IonDatetime, 
    IonDatetimeButton, 
    IonModal 
} from '@ionic/react';

function Example() {
  return (
    <IonList>
      <IonItem>
        <IonSelect label="Default label" placeholder="Favorite Fruit">
          <IonSelectOption value="apple">Apple</IonSelectOption>
          <IonSelectOption value="banana">Banana</IonSelectOption>
          <IonSelectOption value="orange">Orange</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonSelect label="Fixed label" labelPlacement="fixed" placeholder="Favorite fruit">
          <IonSelectOption value="apple">Apple</IonSelectOption>
          <IonSelectOption value="banana">Banana</IonSelectOption>
          <IonSelectOption value="orange">Orange</IonSelectOption>
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