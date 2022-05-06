import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { DataDashboardService } from '../../resources/dashboardDataService/data-dashboard.service';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  detail = false;
  height = '';
  heightTemp='';

  modalClient=false;
  clientEdit:any;
  modalDelete = false;
  clientDelete = '';

  @Input() set detailProducts(detail:boolean){
    this.detail = detail
  }

  @Input() set heightBody(height:string){
    this.height = height;
  }

  listClients:any[] = [];
  constructor(private dashboard:DataDashboardService) {
    this.dashboard.getClients().subscribe((listClients)=>{
      this.listClients = [];
      listClients.forEach((client:any)=>{
        this.listClients.push({
          id: client.payload.doc.id,
          ...client.payload.doc.data()
        })
      })
    })
  }

  ngOnInit(): void {

  }

  openModalClient(){
    this.modalClient = true;
  }

  closeModalClient(){
    this.modalClient = false;
    this.modalDelete = false;

  }

  deleteEvent(response:any){
    console.log(this.clientDelete);
    this.modalDelete = false;
    if(response){
      this.dashboard.deleteClient(this.clientDelete).then(()=>{
      }).catch((error)=>{
        console.error(error);
      })
    }
  }

  editClient(client:any){
    this.clientEdit = client;
    this.openModalClient();
  }

  deleteClient(idClient:string){
    this.clientDelete = idClient;
    this.modalDelete = true;
  }


  add_update(response:any){
    this.closeModalClient();
    if(this.clientEdit == undefined){
      this.addClient(response);
    }else{
      this.updateClient(response);
    }
  }


  addClient(newClient:any){
    this.dashboard.addClient(newClient).then(()=>{

    })
    .catch((error)=>{
      console.error(error);
    })
  }

  updateClient(updateClient:any){
    this.dashboard.updateClient(this.clientEdit.id , updateClient).then(()=>{
      this.clientEdit = undefined;
    })
  }
}
