import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarOpened = false;
  constructor() { }

  ngOnInit(): void {
  }

  openSidebar(){
    let element = document.getElementById('sidebar');
    let menu = document.getElementById('menu');
   if(window.screen.availWidth < 800 && element && menu){
     if(this.sidebarOpened){
       element.style.width = '40px';
       menu.style.transform = 'translateX(-150px)'
       this.sidebarOpened = false;
     }else{
       element.style.width = '150px';
       menu.style.transform = 'translateX(0px)'
       this.sidebarOpened = true;
     }
   }
  }

}
