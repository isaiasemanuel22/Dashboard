import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/resources/authService/auth.service';
import { CommonServicesService } from 'src/app/resources/common-service/common-services.service';

@Component({
  selector: 'home-dashboard',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  notification = false;
  title = 'dashboard';
  name = 'Isaias Calfin';
  message = '';
  userLogged:any;
  constructor(private commonService: CommonServicesService,
    private auth:AuthService
    ) {}
  modalProducts = false;
  modalClient = false;
  ngOnInit(): void {
    this.commonService.notification$.subscribe((message) => {
      this.message = message.message;
      this.notification = true;
      setTimeout(() => {
        this.notification = false;
      }, 4000);
    });

   this.userLogged = this.auth.getUserLogued();
  }

  openModal(modal: string) {
    if (modal == 'products') {
      this.modalProducts = true;
    }
    if (modal == 'clients') {
      this.modalClient = true;
    }
  }

  closeModalProductos() {
    this.modalProducts = false;
  }

  closeModalClient() {
    this.modalClient = false;
  }
}
