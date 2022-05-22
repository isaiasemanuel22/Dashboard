import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Client } from '../../../resources/models/client/client';

@Component({
  selector: 'add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  addClient!:FormGroup;
  newClient:Client = new Client();

  @Input() set clientEdit(client:Client){
    if(client != undefined){
      this.newClient = client;
    }
  }


  @Output() saveEvent:EventEmitter<Client | undefined>  = new EventEmitter();
  constructor(
    private formBuilder:FormBuilder
    ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(){
    this.addClient = this.formBuilder.group({
      lastName :new FormControl(this.newClient.lastnames, [Validators.required]),
      names :new FormControl(this.newClient.names, [Validators.required]),
      phoneNumber :new FormControl(this.newClient.phoneNumber, [Validators.required]),
      optionalNumber :new FormControl(this.newClient.optionNumber),
      dni :new FormControl(this.newClient.DNI, [Validators.required]),
      addres :new FormControl(this.newClient.addres, [Validators.required]),
      addresNumber :new FormControl(this.newClient.numberAddres, [Validators.required]),
      email :new FormControl(this.newClient.email, [Validators.required]),
    })
  }

  saveClient(){
    const newClientResponse = this.addClient.value;
    console.log(newClientResponse);
    if(!this.validateError()){
      const newClient:any = {
        id : this.newClient.id || '',
        lastnames: newClientResponse.lastName,
        names: newClientResponse.names,
        DNI: newClientResponse.dni,
        phoneNumber: newClientResponse.phoneNumber,
        optionNumber: newClientResponse.optionalNumber,
        email: newClientResponse.email,
        addres: newClientResponse.addres,
        numberAddres: newClientResponse.addresNumber
      }
      this.saveEvent.emit(newClient);
    }

  }


  validateError() {
    let  value = this.addClient.value;
     for (let key in value) {
       if (this.addClient.get(key)?.errors) {
         return true;
       }
     }
     return false;
   }

}
