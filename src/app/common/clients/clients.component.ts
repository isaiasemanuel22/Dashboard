import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { CommonServicesService } from 'src/app/resources/common-service/common-services.service';
import { Loader, LoaderService } from 'src/app/resources/loader/loader.service';
import { DataDashboardService } from '../../resources/dashboardDataService/data-dashboard.service';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  detail = false;
  height = '';
  heightTemp = '';

  modalClient = false;
  clientEdit: any;
  modalDelete = false;
  clientDelete = '';

  @Input() set detailProducts(detail: boolean) {
    this.detail = detail;
  }

  @Input() set heightBody(height: string) {
    this.height = height;
  }
  service = 'clients';
  listClients: any[] = [];
  loader: Loader | undefined = new Loader();
  constructor(
    private dashboard: DataDashboardService,
    private commonService: CommonServicesService,
    private loaderService: LoaderService
  ) {
    this.dashboard.getFirebase(this.service).subscribe((response: any[]) => {
      this.listClients = response;
    });

    this.loaderService.loader$.subscribe((loader) => {
      this.loader = loader.find((load) => load.nameService == this.service);
    });
  }

  ngOnInit(): void {}

  openModalClient() {
    this.modalClient = true;
  }

  closeModalClient() {
    this.modalClient = false;
    this.modalDelete = false;
  }

  deleteEvent(response: any) {
    console.log(this.clientDelete);
    this.modalDelete = false;
    if (response) {
      this.dashboard.deleteFirebase(
        this.service,
        this.clientDelete,
        'Cliente eliminado exitosamene',
        'No se ha podido eliminar'
      );
    }
  }

  editClient(client: any) {
    this.clientEdit = client;
    this.openModalClient();
  }

  deleteClient(idClient: string) {
    this.clientDelete = idClient;
    this.modalDelete = true;
  }

  add_update(response: any) {
    this.closeModalClient();
    if (this.clientEdit == undefined) {
      this.addClient(response);
    } else {
      this.updateClient(response);
    }
  }

  addClient(newClient: any) {
    this.dashboard.addFirebase(
      this.service,
      newClient,
      'Cliente agregado correctamente',
      'Cliente no agregado correctamente'
    );
  }

  updateClient(updateClient: any) {
    this.dashboard.updateFirebase(
      this.service,
      updateClient,
      'El cliente se ha actualizado correctamente',
      'El cliente no se ha podido actualizar'
    );
  }
}
