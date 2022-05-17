import { Injectable } from '@angular/core';
import { Provider } from '../models/provider/provider';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CommonServicesService } from '../common-service/common-services.service';
import { LoaderService } from '../loader/loader.service';
import { Observable, Subject } from 'rxjs';

export class DataFirestone {
  service!: string;
  data?: Subject<any>;
}

@Injectable({
  providedIn: 'root',
})
export class DataDashboardService {
  private _responseFireston = new Subject<DataFirestone[]>();
  public $responseFireston = this._responseFireston.asObservable();
  private servicesObververs: DataFirestone[] = [];
  addElement: boolean = false;


  constructor(
    private firestore: AngularFirestore,
    private commonSerice: CommonServicesService,
    private loader: LoaderService
  ) {}

  private providers: Provider[] = [
    {
      name: 'Arturo Vasos',
      tel: '223678876',
      email: 'arturoVasos@Arturo.com',
      addres: 'Santa Paula 345',
    },
  ];

  addFirebase(
    collection: string,
    newElement: any,
    messageSuccefull: string | undefined,
    messageError: string | undefined
  ) {
    this.addElement = true;
    let messageS: string = 'Agregado correctamente';
    let messageE: string = 'Error al agregar';
    this.loader.changeState(collection, true);
    if (messageSuccefull) {
      messageS = messageSuccefull;
    }
    if (messageError) {
      messageE = messageError;
    }
    this.firestore
      .collection(collection)
      .add(newElement)
      .then(() => {
        this.commonSerice.addNotification(messageS, true);
        this.loader.changeState(collection, false);
        this.addElement = false;
      })
      .catch(() => {
        this.loader.changeState(collection, false);
        this.commonSerice.addNotification(messageE, false);
        this.addElement = false;
      });
  }

  getFirebase(service: string): Observable<any> {
    let response: any[] = [];
    this.loader.changeState(service, true);
    let obs = this.createSubject(service)!.data!.asObservable();
    this.firestore
      .collection(service)
      .stateChanges()
      .subscribe((reponseArray) => {
        reponseArray.forEach((elementFirestone: any) => {
          let element = {
            id: elementFirestone.payload.doc.id,
            ...elementFirestone.payload.doc.data(),
          };
          if (elementFirestone.type == 'removed') {
            response = [...this.deleteElement(response, element)];
          } else if (elementFirestone.type == 'modified') {
            response = [...this.editEliment(response, element)];
          } else {
            this.addNoDuplicates(response, element);

          }
        });
        if(!this.addElement){
          this.loader.changeState(service, false);
        }
        this.addResponse(response, service);
      });
    return obs;
  }

  deleteFirebase(
    collection: string,
    id: string,
    messageSuccefull: string | undefined,
    messageError: string | undefined
  ) {
    this.addElement = true;
    let messageS: string = 'Eliminado correctamente';
    let messageE: string = 'Error al eliminar';

    this.loader.changeState(collection, true);

    if (messageSuccefull) {
      messageS = messageSuccefull;
    }

    if (messageError) {
      messageE = messageError;
    }

    this.firestore
      .collection(collection)
      .doc(id)
      .delete()
      .then(() => {
        this.commonSerice.addNotification(messageS, true);
        this.loader.changeState(collection, false);
        this.addElement = false;
      })
      .catch(() => {
        this.loader.changeState(collection, false);
        this.commonSerice.addNotification(messageE, false);
        this.addElement = false;
      });
  }

  updateFirebase(collection: string,
    editElement: any,
    messageSuccefull: string | undefined,
    messageError: string | undefined) {
      this.addElement = true;
      let messageS: string = 'Actualizado correctamente';
      let messageE: string = 'No se ha podido actualizar';

      this.loader.changeState(collection, true);

      if (messageSuccefull) {
        messageS = messageSuccefull;
      }

      if (messageError) {
        messageE = messageError;
      }

    this.firestore.collection(collection).doc(editElement.id).update(editElement).then(()=>{
      this.commonSerice.addNotification(messageS, true);
      this.loader.changeState(collection, false);
      this.addElement = false;
    }).catch(() => {
      this.loader.changeState(collection, false);
      this.commonSerice.addNotification(messageE, false);
      this.addElement = false;
    });
  }

  updateClient(idClient: string, data: any) {
    return this.firestore.collection('clients').doc(idClient).update(data);
  }

  getProviders() {
    return this.providers;
  }

  addResponse(newResponse: any[], service: string) {
    let findResponse = this.getResponse(service);
    if (findResponse != undefined) {
      findResponse.data!.next(newResponse);
    }
  }

  private getResponse(service: string) {
    return this.servicesObververs.find(
      (response) => response.service === service
    );
  }

  private addNoDuplicates(response: any[], newResponse: any) {
    let find = response.find((response) => response.id === newResponse.id);
    if (find === undefined) {
      response.push(newResponse);
    }
  }

  private deleteElement(response: any[], deleteResponse: any) {
    return [
      ...response.filter(
        (lastResponse) => lastResponse.id !== deleteResponse.id
      ),
    ];
  }

  private createSubject(service: string): DataFirestone {
    let find = this.servicesObververs.find((obs) => obs.service === service);
    if (find == undefined) {
      find = {
        service: service,
        data: new Subject<any[]>(),
      };
      this.servicesObververs.push(find);
    }
    return find;
  }

  private editEliment(response: any[], editResponse: any) {
    let element = response.findIndex(
      (element) => element.id == editResponse.id
    );
    if (element != null) {
      if (response[element] !== editResponse) {
        response[element] = editResponse;
      }
    }
    return response;
  }
}
